================================
// TUYIKUNDE RESTAURANT
// Main JavaScript
// ================================

// 1. Welcome message
console.log("Welcome to Tuyikunde Restaurant! 🍽️");

// 2. Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// 3. Highlight navigation link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// 4. Add a small animation when food cards appear
const foodCards = document.querySelectorAll(".food-card");

const cardObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

foodCards.forEach(function (card) {
    cardObserver.observe(card);
});

// 5. Current year in footer
const footerText = document.querySelector("footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.textContent =
        "© " + currentYear + " Tuyikunde Restaurant. All Rights Reserved.";
}