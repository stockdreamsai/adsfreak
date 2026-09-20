// Scroll-reveal + count-up stats
            (function () {
                var reduceMotion = window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                ).matches;
                var targets = document.querySelectorAll(
                    ".reveal, .reveal-stagger",
                );

                function countUp(el) {
                    var end = parseFloat(el.dataset.count);
                    if (isNaN(end)) return;
                    var decimals = parseInt(el.dataset.decimals || "0", 10);
                    var suffix = el.dataset.suffix || "";
                    var format = function (val) {
                        return (
                            (decimals
                                ? val.toFixed(decimals)
                                : Math.round(val).toLocaleString("en-US")) +
                            suffix
                        );
                    };
                    if (reduceMotion) {
                        el.textContent = format(end);
                        return;
                    }
                    var duration = 1200;
                    var start = null;
                    function tick(ts) {
                        if (!start) start = ts;
                        var p = Math.min((ts - start) / duration, 1);
                        var eased = 1 - Math.pow(1 - p, 3);
                        el.textContent = format(end * eased);
                        if (p < 1) requestAnimationFrame(tick);
                    }
                    requestAnimationFrame(tick);
                }

                function activate(el) {
                    el.classList.add("in");
                    el.querySelectorAll("[data-count]").forEach(countUp);
                }

                if (!("IntersectionObserver" in window) || reduceMotion) {
                    targets.forEach(activate);
                    return;
                }

                var io = new IntersectionObserver(
                    function (entries) {
                        entries.forEach(function (entry) {
                            // Activate when visible, or if a fast scroll
                            // already carried it above the viewport.
                            if (
                                entry.isIntersecting ||
                                entry.boundingClientRect.bottom < 0
                            ) {
                                activate(entry.target);
                                io.unobserve(entry.target);
                            }
                        });
                    },
                    // Huge top margin: anything at or above the viewport
                    // counts as intersecting, so fast scrolls and mid-page
                    // reloads can never leave content stuck hidden.
                    { threshold: 0, rootMargin: "10000px 0px -50px 0px" },
                );
                targets.forEach(function (el) {
                    io.observe(el);
                });
            })();
