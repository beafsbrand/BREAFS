// BREAFS - Main Script
// Minimal, clean, no bullshit

// BREAFS — Main Script

document.addEventListener("DOMContentLoaded", () => {
  console.log("BREAFS website loaded");

  // Smooth scroll
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        nav.classList.remove("open");
      }
    });
  });

  // Fade-in on scroll
  const faders = document.querySelectorAll(".fade");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach(el => observer.observe(el));

  // Mobile menu
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});


