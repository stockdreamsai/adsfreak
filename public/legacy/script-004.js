(function () {
                        var toggle = document.querySelector(".how-toggle");
                        if (!toggle) return;
                        var btns = toggle.querySelectorAll("button");
                        var panels = {
                            viral: document.getElementById("trackViral"),
                            pro: document.getElementById("trackPro"),
                        };
                        toggle.addEventListener("click", function (e) {
                            var btn = e.target.closest("button");
                            if (!btn) return;
                            var track = btn.dataset.track;
                            btns.forEach(function (b) {
                                var on = b === btn;
                                b.classList.toggle("active", on);
                                b.setAttribute(
                                    "aria-pressed",
                                    on ? "true" : "false",
                                );
                            });
                            Object.keys(panels).forEach(function (k) {
                                panels[k].classList.toggle(
                                    "active",
                                    k === track,
                                );
                            });
                        });
                    })();
