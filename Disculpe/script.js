// SCROLL REVEAL
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// SMOOTH SCROLL
function scrollToSection() {
    document.getElementById("course").scrollIntoView({
        behavior: "smooth"
    });
}