// BREAFS - Main Script
// Minimal, clean, no bullshit

document.addEventListener("DOMContentLoaded", () => {
  console.log("BREAFS website loaded");

  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});

