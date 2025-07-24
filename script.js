// ===== script.js for Priyanshu's Portfolio =====

document.addEventListener("DOMContentLoaded", () => { // Dark Mode Toggle const toggle = document.getElementById("darkToggle"); toggle.addEventListener("click", () => { document.body.classList.toggle("dark-mode"); toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙"; });

// Smooth scroll for nav links document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => { link.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); }); });