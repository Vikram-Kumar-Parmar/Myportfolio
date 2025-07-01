const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");

let mouseX = 0;
let mouseY = 0;

let posX1 = 0, posY1 = 0;
let posX2 = 0, posY2 = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // Smooth inertia motion for floating icons
    posX1 += (mouseX - posX1) * 0.05;
    posY1 += (mouseY - posY1) * 0.05;
    posX2 += (mouseX - posX2) * 0.03;
    posY2 += (mouseY - posY2) * 0.03;

    icon1.style.transform = `translate(${posX1 * 0.03}px, ${posY1 * 0.03}px)`;
    icon2.style.transform = `translate(${posX2 * -0.02}px, ${posY2 * -0.02}px)`;

    requestAnimationFrame(animate);
}

// Scroll-triggered animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.querySelectorAll('.animate-card, .animate-slide-up, .animate-slide-in').forEach(el => {
                el.style.animationPlayState = 'running';
            });
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize animations
animate();