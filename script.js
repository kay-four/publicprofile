// Highlight current nav item on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
            const id = section.getAttribute("id");
            if (id) current = id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let currentIndex = 0;

    if (slides && images.length > 0) {
        // Slider control function
        function plusSlides(n) {
            currentIndex = (currentIndex + n + images.length) % images.length;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Assign navigation buttons
        const prev = document.querySelector(".prev");
        const next = document.querySelector(".next");

        if (prev && next) {
            prev.addEventListener("click", () => plusSlides(-1));
            next.addEventListener("click", () => plusSlides(1));
        }

        // Auto-slide every 4 seconds
        setInterval(() => plusSlides(1), 4000);
    }

    // Smooth scroll to section if scrollToSection(index) is used
    window.scrollToSection = function(index) {
        const sections = document.querySelectorAll("section");
        if (sections[index]) {
            sections[index].scrollIntoView({ behavior: "smooth" });
        }
    };
});
