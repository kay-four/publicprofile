document.querySelector('.download-btn').addEventListener('click', function() {
    alert('CV Downloading...');
});
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Adjust for header height
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});

// function scrollToSection(index) {
//     const slider = document.getElementById('slider');
//     slider.style.transform = `translateX(-${index * 100}vw)`;
// }

function scrollToSection(index) {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${index * 100}vw)`;
}

// Image slideshow rotation
const images = ['profile.jpg', 'profile2.jpg', 'profile3.jpg'];
let currentImage = 0;
const profileImg = document.getElementById('profileImage');

setInterval(() => {
    currentImage = (currentImage + 1) % images.length;
    profileImg.style.opacity = 0;

    setTimeout(() => {
        profileImg.src = images[currentImage];
        profileImg.style.opacity = 1;
    }, 500);
}, 4000);
