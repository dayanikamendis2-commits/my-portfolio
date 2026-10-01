// ==================== PORTFOLIO JAVASCRIPT ====================

document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully.");

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Close menu when clicking a link on mobile
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});