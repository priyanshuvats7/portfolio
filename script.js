document.addEventListener("DOMContentLoaded", () => {
  const resumeLink = document.querySelector("#resume a");
  resumeLink.addEventListener("click", () => {
    alert("Thank you for downloading my resume!");
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Dark Mode Toggle
  const toggleBtn = document.getElementById("darkToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});