// Reveal the sticky CTA after the hero offer scrolls out of view
            (function () {
                var bar = document.getElementById("stickyCta");
                var hero = document.getElementById("start");
                if (!bar || !hero) return;
                var setVisible = function (past) {
                    bar.classList.toggle("visible", past);
                    bar.setAttribute("aria-hidden", past ? "false" : "true");
                };
                if ("IntersectionObserver" in window) {
                    new IntersectionObserver(function (entries) {
                        var entry = entries[entries.length - 1];
                        setVisible(
                            !entry.isIntersecting &&
                                entry.boundingClientRect.bottom < 0,
                        );
                    }).observe(hero);
                } else {
                    var onScroll = function () {
                        setVisible(hero.getBoundingClientRect().bottom < 0);
                    };
                    window.addEventListener("scroll", onScroll, {
                        passive: true,
                    });
                    onScroll();
                }
            })();
