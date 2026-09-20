// Auto-Captions live demo. The word timings below were measured
            // from this exact ad by the product's own captioner, so the
            // demo shows the real feature, not a mock-up.
            (function () {
                var video = document.getElementById("capVideo");
                var overlay = document.getElementById("capOverlay");
                var looksEl = document.getElementById("capLooks");
                var soundBtn = document.getElementById("capSound");
                if (!video || !overlay || !looksEl) return;

                var WORDS = [
                    ["Falling", 0.1, 0.4],
                    ["at", 0.44, 0.54],
                    ["terminal", 0.6, 0.9],
                    ["velocity", 0.96, 1.5],
                    ["but", 1.6, 1.68],
                    ["I've", 1.72, 1.92],
                    ["never", 2.0, 2.16],
                    ["felt", 2.3, 2.42],
                    ["more", 2.54, 2.7],
                    ["relaxed!", 2.78, 3.4],
                    ["These", 3.94, 4.1],
                    ["gummies", 4.14, 4.46],
                    ["are", 4.48, 4.58],
                    ["my", 4.62, 4.78],
                    ["secret", 4.84, 5.1],
                    ["to", 5.14, 5.22],
                    ["staying", 5.24, 5.44],
                    ["chill,", 5.64, 5.92],
                    ["even", 6.52, 6.72],
                    ["in", 6.76, 6.84],
                    ["mid-air!", 6.92, 7.32],
                ].map(function (w) {
                    return { text: w[0], start: w[1], end: w[2] };
                });

                // Same grouping budgets as the app's looks.
                var LOOKS = {
                    "freak-pop": { maxWords: 3, maxChars: 16, upper: true },
                    karaoke: { maxWords: 4, maxChars: 22, upper: false },
                    boxed: { maxWords: 4, maxChars: 22, upper: false },
                    outline: { maxWords: 3, maxChars: 16, upper: true },
                    clean: { maxWords: 5, maxChars: 28, upper: false },
                    band: { maxWords: 1, maxChars: 40, upper: true },
                };

                function buildCues(look) {
                    var cfg = LOOKS[look];
                    var cues = [];
                    var cur = [];
                    function flush() {
                        if (!cur.length) return;
                        cues.push({
                            start: cur[0].start,
                            end: cur[cur.length - 1].end,
                            words: cur,
                        });
                        cur = [];
                    }
                    WORDS.forEach(function (w) {
                        var prev = cur[cur.length - 1];
                        if (prev) {
                            var chars =
                                cur.reduce(function (n, x) {
                                    return n + x.text.length + 1;
                                }, 0) + w.text.length;
                            if (
                                w.start - prev.end > 0.6 ||
                                cur.length >= cfg.maxWords ||
                                chars > cfg.maxChars
                            ) {
                                flush();
                            }
                        }
                        cur.push(w);
                        if (/[.!?]$/.test(w.text)) flush();
                        else if (/[,;:]$/.test(w.text) && cur.length >= 2)
                            flush();
                    });
                    flush();
                    // Hold each cue until just before the next so lines
                    // don't flicker in pauses.
                    cues.forEach(function (c, i) {
                        var next = cues[i + 1];
                        c.end = next
                            ? Math.max(
                                  c.end,
                                  Math.min(c.start + 0.5, next.start - 0.03),
                              )
                            : c.end + 0.5;
                    });
                    return cues;
                }

                var look = "freak-pop";
                var cues = buildCues(look);
                var shownCue = null;
                var shownActive = -2;

                function fit() {
                    var inner = overlay.firstElementChild;
                    if (!inner) return;
                    inner.style.transform = "";
                    var avail = overlay.clientWidth;
                    var need = inner.scrollWidth;
                    if (avail > 0 && need > avail) {
                        inner.style.transform = "scale(" + avail / need + ")";
                    }
                }

                function render(force) {
                    var t = video.currentTime || 0;
                    var cue = null;
                    for (var i = 0; i < cues.length; i++) {
                        if (t >= cues[i].start && t < cues[i].end) {
                            cue = cues[i];
                            break;
                        }
                    }
                    var active = -1;
                    if (cue) {
                        cue.words.forEach(function (w, n) {
                            if (t >= w.start) active = n;
                        });
                    }
                    if (!force && cue === shownCue && active === shownActive)
                        return;
                    shownCue = cue;
                    shownActive = active;
                    overlay.textContent = "";
                    if (!cue) return;
                    var inner = document.createElement("span");
                    inner.className = "cap-line";
                    cue.words.forEach(function (w, n) {
                        if (look === "band" && n !== active) return;
                        var el = document.createElement("span");
                        el.className =
                            "cap-word" +
                            (n === active ? " is-active" : "") +
                            (n < active ? " is-past" : "");
                        var text = w.text;
                        el.textContent = LOOKS[look].upper
                            ? text.toUpperCase()
                            : text;
                        inner.appendChild(el);
                        inner.appendChild(document.createTextNode(" "));
                    });
                    overlay.appendChild(inner);
                    fit();
                }

                function loop() {
                    render(false);
                    requestAnimationFrame(loop);
                }
                requestAnimationFrame(loop);
                window.addEventListener("resize", function () {
                    render(true);
                });

                looksEl.addEventListener("click", function (e) {
                    var btn = e.target.closest(".cap-look");
                    if (!btn) return;
                    look = btn.getAttribute("data-look");
                    cues = buildCues(look);
                    looksEl.querySelectorAll(".cap-look").forEach(function (b) {
                        b.classList.toggle("is-active", b === btn);
                    });
                    overlay.className = "cap-overlay cap-look-" + look;
                    applyY();
                    render(true);
                    // Restart from the top so the new look is seen in full.
                    if (video.src) {
                        try {
                            video.currentTime = 0;
                        } catch (err) {}
                        video.play().catch(function () {});
                    }
                });

                // Drag to reposition, as in the app: grab the captions or
                // the gold grip. Movement is clamped to the band between the
                // areas where TikTok, Reels and Shorts draw their own UI.
                var SAFE_TOP = 0.12;
                var SAFE_BOTTOM = 0.76;
                var LOOK_Y = { clean: 0.74, band: 0.62 };
                var phone = overlay.parentElement;
                var grip = document.getElementById("capGrip");
                var guide = document.getElementById("capGuide");
                var userY = null; // null = the look's own default height
                var dragging = false;

                function currentY() {
                    return userY !== null ? userY : LOOK_Y[look] || 0.72;
                }
                function applyY() {
                    var pct = currentY() * 100 + "%";
                    overlay.style.top = pct;
                    if (grip) grip.style.top = pct;
                    if (guide) guide.style.top = pct;
                }
                function yFromEvent(e) {
                    var r = phone.getBoundingClientRect();
                    var y = (e.clientY - r.top) / r.height;
                    return Math.min(SAFE_BOTTOM, Math.max(SAFE_TOP, y));
                }
                function startDrag(e) {
                    e.preventDefault();
                    dragging = true;
                    phone.classList.add("is-dragging");
                    e.currentTarget.setPointerCapture(e.pointerId);
                    userY = yFromEvent(e);
                    applyY();
                }
                function moveDrag(e) {
                    if (!dragging) return;
                    userY = yFromEvent(e);
                    applyY();
                }
                function endDrag(e) {
                    if (!dragging) return;
                    dragging = false;
                    phone.classList.remove("is-dragging");
                    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                        e.currentTarget.releasePointerCapture(e.pointerId);
                    }
                }
                [overlay, grip].forEach(function (el) {
                    if (!el) return;
                    el.addEventListener("pointerdown", startDrag);
                    el.addEventListener("pointermove", moveDrag);
                    el.addEventListener("pointerup", endDrag);
                    el.addEventListener("pointercancel", endDrag);
                });
                // Arrow keys on the grip, for keyboard users.
                if (grip) {
                    grip.addEventListener("keydown", function (e) {
                        if (e.key !== "ArrowUp" && e.key !== "ArrowDown")
                            return;
                        e.preventDefault();
                        var step = e.key === "ArrowUp" ? -0.02 : 0.02;
                        userY = Math.min(
                            SAFE_BOTTOM,
                            Math.max(SAFE_TOP, currentY() + step),
                        );
                        applyY();
                    });
                }
                applyY();

                if (soundBtn) {
                    soundBtn.addEventListener("click", function () {
                        video.muted = !video.muted;
                        soundBtn.setAttribute(
                            "aria-pressed",
                            String(!video.muted),
                        );
                        soundBtn.querySelector("span").textContent = video.muted
                            ? "Tap for sound"
                            : "Sound on";
                        if (!video.muted) {
                            try {
                                video.currentTime = 0;
                            } catch (err) {}
                            video.play().catch(function () {});
                        }
                    });
                }
            })();
