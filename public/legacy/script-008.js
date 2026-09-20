// Lazy-load videos with data-src when scrolled into viewport
            (function () {
                var videos = document.querySelectorAll("video[data-src]");
                if (!("IntersectionObserver" in window)) {
                    // Fallback: just load everything immediately
                    videos.forEach(function (v) {
                        v.src = v.dataset.src;
                        v.load();
                        v.play().catch(function () {});
                    });
                    return;
                }
                var io = new IntersectionObserver(
                    function (entries) {
                        entries.forEach(function (entry) {
                            var v = entry.target;
                            if (entry.isIntersecting) {
                                if (!v.src) {
                                    v.src = v.dataset.src;
                                    v.load();
                                }
                                v.play().catch(function () {});
                            } else {
                                // Pause off-screen videos to save CPU/bandwidth
                                if (v.src) v.pause();
                            }
                        });
                    },
                    { rootMargin: "200px 0px" },
                );
                videos.forEach(function (v) {
                    io.observe(v);
                });
            })();
