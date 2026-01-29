// ===============================
// 1. Sticky Header on Scroll
// ===============================
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});

// ===============================
// 2. Smooth Scroll for Links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ===============================
// 3. Active Navigation Highlight
// ===============================
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// ===============================
// 4. WhatsApp Floating Button
// ===============================
const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/91XXXXXXXXXX";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = "💬";
whatsappBtn.className = "whatsapp-float";
document.body.appendChild(whatsappBtn);

// ===============================
// 5. Call-to-Action Button Feedback
// ===============================
const ctaButtons = document.querySelectorAll(".btn");
ctaButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Thanks for your interest!
