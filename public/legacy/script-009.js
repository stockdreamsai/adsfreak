// Lightbox: click any "Everything Included" image to magnify it,
            // or a flow-demo loop to watch it full-size with sound.
            (function () {
                var imgs = document.querySelectorAll(".included-img img");
                var loopVids = document.querySelectorAll(
                    ".flow-media video, .included-img video",
                );
                if (!imgs.length && !loopVids.length) return;

                var overlay = document.createElement("div");
                overlay.className = "lightbox";
                overlay.setAttribute("role", "dialog");
                overlay.setAttribute("aria-modal", "true");
                overlay.setAttribute("aria-hidden", "true");
                overlay.innerHTML =
                    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
                    '<img class="lightbox-img" src="" alt="" />' +
                    '<video class="lightbox-video" controls playsinline style="display: none"></video>';
                document.body.appendChild(overlay);

                var imgEl = overlay.querySelector(".lightbox-img");
                var vidEl = overlay.querySelector(".lightbox-video");
                var closeBtn = overlay.querySelector(".lightbox-close");
                var lastFocus = null;

                function show(trigger) {
                    overlay.classList.add("open");
                    overlay.setAttribute("aria-hidden", "false");
                    document.body.style.overflow = "hidden";
                    lastFocus = trigger;
                    closeBtn.focus();
                }

                function open(img) {
                    vidEl.style.display = "none";
                    imgEl.style.display = "";
                    imgEl.src = img.src;
                    imgEl.alt = img.alt || "";
                    show(img);
                }

                function openVideo(src, poster, trigger) {
                    imgEl.style.display = "none";
                    vidEl.style.display = "";
                    if (poster) vidEl.poster = poster;
                    vidEl.src = src;
                    show(trigger);
                    vidEl.play().catch(function () {});
                }

                function close() {
                    overlay.classList.remove("open");
                    overlay.setAttribute("aria-hidden", "true");
                    document.body.style.overflow = "";
                    vidEl.pause();
                    vidEl.removeAttribute("src");
                    vidEl.load();
                    if (lastFocus) lastFocus.focus();
                }

                imgs.forEach(function (img) {
                    img.setAttribute("role", "button");
                    img.setAttribute("tabindex", "0");
                    img.addEventListener("click", function () {
                        open(img);
                    });
                    img.addEventListener("keydown", function (e) {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            open(img);
                        }
                    });
                });

                loopVids.forEach(function (v) {
                    v.setAttribute("role", "button");
                    v.setAttribute("tabindex", "0");
                    v.addEventListener("click", function () {
                        openVideo(v.dataset.src || v.src, v.poster, v);
                    });
                    v.addEventListener("keydown", function (e) {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openVideo(v.dataset.src || v.src, v.poster, v);
                        }
                    });
                });

                // Don't let clicks on the video controls close the overlay.
                vidEl.addEventListener("click", function (e) {
                    e.stopPropagation();
                });

                // Close on backdrop, the image itself, or the X button.
                overlay.addEventListener("click", close);
                document.addEventListener("keydown", function (e) {
                    if (
                        e.key === "Escape" &&
                        overlay.classList.contains("open")
                    ) {
                        close();
                    }
                });
            })();
