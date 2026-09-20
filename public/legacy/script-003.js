(function () {
                    var toggle = document.querySelector(".duo-toggle");
                    if (!toggle) return;
                    var btns = toggle.querySelectorAll("button");
                    var cards = {
                        viral: document.getElementById("duoViral"),
                        pro: document.getElementById("duoPro"),
                    };
                    var current = "viral";

                    function setMode(mode) {
                        current = mode;
                        btns.forEach(function (b) {
                            var on = b.dataset.mode === mode;
                            b.classList.toggle("active", on);
                            b.setAttribute(
                                "aria-pressed",
                                on ? "true" : "false",
                            );
                        });
                        Object.keys(cards).forEach(function (k) {
                            cards[k].classList.toggle("active", k === mode);
                        });
                    }

                    // Auto-flip every 4s while the section is on screen, so
                    // both studios get seen. First manual click stops it for
                    // good. Skipped entirely under reduced motion.
                    var timer = null;
                    var userTouched = false;
                    var reduced = window.matchMedia(
                        "(prefers-reduced-motion: reduce)",
                    ).matches;

                    function stopAuto() {
                        if (timer) {
                            clearInterval(timer);
                            timer = null;
                        }
                    }

                    function startAuto() {
                        if (userTouched || reduced || timer) return;
                        timer = setInterval(function () {
                            setMode(current === "viral" ? "pro" : "viral");
                        }, 4000);
                    }

                    btns.forEach(function (btn) {
                        btn.addEventListener("click", function () {
                            userTouched = true;
                            stopAuto();
                            setMode(btn.dataset.mode);
                        });
                    });

                    if ("IntersectionObserver" in window) {
                        new IntersectionObserver(
                            function (entries) {
                                entries.forEach(function (entry) {
                                    if (entry.isIntersecting) startAuto();
                                    else stopAuto();
                                });
                            },
                            { threshold: 0.4 },
                        ).observe(toggle.closest(".duo-section") || toggle);
                    } else {
                        startAuto();
                    }
                })();
