// Highlight active nav link
const navLinks = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#ffb86c";
    link.style.textDecoration = "underline";
  }
});

// Scroll animation observer
const revealOnScroll = () => {
  const elements = document.querySelectorAll("header, section, .card, .certificate, .profile-pic");

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.animationPlayState = "running"; // play CSS animations
    }
  });
};

document.addEventListener("scroll", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);
// You can add animations or effects here later if needed
console.log("Portfolio loaded successfully!");
