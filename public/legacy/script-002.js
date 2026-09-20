// One control plays/pauses BOTH comparison videos together;
            // each card's mute button stays independent (reuses toggleMute).
            window.toggleComparePlay = function (btn) {
                var a = document.getElementById("cmpGenericVid");
                var b = document.getElementById("cmpRealVid");
                if (!a || !b) return;
                var PLAY_ICON =
                    '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M8 5v14l11-7z"/></svg>';
                var PAUSE_ICON =
                    '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
                if (a.paused) {
                    // Restart both from the top so they play in sync.
                    a.currentTime = 0;
                    b.currentTime = 0;
                    a.play().catch(function () {});
                    b.play().catch(function () {});
                    btn.innerHTML = PAUSE_ICON;
                    btn.setAttribute("aria-label", "Pause");
                } else {
                    a.pause();
                    b.pause();
                    btn.innerHTML = PLAY_ICON;
                    btn.setAttribute("aria-label", "Play");
                }
            };

            // No per-video loop: when the LONGER clip ends (i.e. both have
            // finished), restart both from the top together.
            (function () {
                var a = document.getElementById("cmpGenericVid");
                var b = document.getElementById("cmpRealVid");
                if (!a || !b) return;
                function restartIfBothEnded() {
                    if (a.ended && b.ended) {
                        a.currentTime = 0;
                        b.currentTime = 0;
                        a.play().catch(function () {});
                        b.play().catch(function () {});
                    }
                }
                a.addEventListener("ended", restartIfBothEnded);
                b.addEventListener("ended", restartIfBothEnded);
            })();
