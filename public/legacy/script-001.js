(function () {
                    var slides = [
                        {
                            ref: "https://ddufpaulv1kgi.cloudfront.net/videos/terminal-velocity.mp4",
                            rec: "https://ddufpaulv1kgi.cloudfront.net/videos/ali-terminal-velocity.mp4",
                        },
                    ];
                    var current = 0;
                    var PLAY_ICON =
                        '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M8 5v14l11-7z"/></svg>';
                    var PAUSE_ICON =
                        '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';

                    function syncPlayBoth() {
                        var ref = document.getElementById("showcaseRef");
                        var rec = document.getElementById("showcaseRec");
                        if (!ref || !rec) return;
                        rec.currentTime = ref.currentTime;
                        ref.play().catch(function () {});
                        rec.play().catch(function () {});
                    }

                    window.changeSlide = function (dir) {
                        current =
                            (current + dir + slides.length) % slides.length;
                        var refVid = document.getElementById("showcaseRef");
                        var recVid = document.getElementById("showcaseRec");
                        refVid.src = slides[current].ref;
                        recVid.src = slides[current].rec;
                        refVid.load();
                        recVid.load();
                        var btn = document.getElementById("showcasePlayBtn");
                        if (btn) {
                            btn.innerHTML = PAUSE_ICON;
                            btn.setAttribute("aria-label", "Pause");
                        }
                        syncPlayBoth();
                    };

                    window.toggleShowcasePlay = function (btn) {
                        var ref = document.getElementById("showcaseRef");
                        var rec = document.getElementById("showcaseRec");
                        if (!ref || !rec) return;
                        if (ref.paused) {
                            syncPlayBoth();
                            btn.innerHTML = PAUSE_ICON;
                            btn.setAttribute("aria-label", "Pause");
                        } else {
                            ref.pause();
                            rec.pause();
                            btn.innerHTML = PLAY_ICON;
                            btn.setAttribute("aria-label", "Play");
                        }
                    };

                    // Drift correction: keep AI-recreated video aligned to reference
                    setInterval(function () {
                        var ref = document.getElementById("showcaseRef");
                        var rec = document.getElementById("showcaseRec");
                        if (!ref || !rec || ref.paused || rec.paused) return;
                        if (
                            Math.abs(ref.currentTime - rec.currentTime) > 0.25
                        ) {
                            rec.currentTime = ref.currentTime;
                        }
                    }, 1000);
                    window.toggleMute = function (videoId, btn) {
                        var vid = document.getElementById(videoId);
                        vid.muted = !vid.muted;
                        if (vid.muted) {
                            btn.innerHTML =
                                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
                        } else {
                            btn.innerHTML =
                                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
                        }
                    };

                    // For UGC tile videos: only one can be unmuted at a time.
                    window.toggleTileMute = function (btn) {
                        var vid = btn.previousElementSibling;
                        while (vid && vid.tagName !== "VIDEO")
                            vid = vid.previousElementSibling;
                        if (!vid) return;
                        var nowUnmute = vid.muted;
                        if (nowUnmute) {
                            // Mute every other tile + reset their button icons
                            document
                                .querySelectorAll(".ugc-frame video")
                                .forEach(function (v) {
                                    if (v !== vid) {
                                        v.muted = true;
                                        var b =
                                            v.parentElement.querySelector(
                                                ".ugc-mute-btn",
                                            );
                                        if (b)
                                            b.innerHTML =
                                                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
                                    }
                                });
                        }
                        vid.muted = !vid.muted;
                        if (vid.muted) {
                            btn.innerHTML =
                                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
                        } else {
                            btn.innerHTML =
                                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
                        }
                    };
                })();
