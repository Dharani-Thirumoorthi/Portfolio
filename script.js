// Example JS functionality - you can expand later
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded!");
});
// Fade-in sections on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
});

// Trigger on load too
window.addEventListener('load', () => {
  document.querySelectorAll('section').forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
      section.classList.add('visible');
    }
  });
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


