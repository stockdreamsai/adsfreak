if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                document.querySelector(".typing-text").textContent = "You";
            } else {
                new Typed(".typing-text", {
                    strings: [
                        "You",
                        "Any Of 100+ Avatars",
                        "Your Custom Avatar",
                    ],
                    typeSpeed: 50,
                    backSpeed: 35,
                    backDelay: 1600,
                    loop: true,
                    showCursor: false,
                });
            }
