const map = document.querySelector(".map");

function lockScroll() {
    const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
}

function unlockScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.body.style.paddingRight = "";
}

// Desktop
map.addEventListener("mouseenter", lockScroll);
map.addEventListener("mouseleave", unlockScroll);

// Mobile
map.addEventListener("touchstart", lockScroll, { passive: true });
map.addEventListener("touchend", unlockScroll);
map.addEventListener("touchcancel", unlockScroll);