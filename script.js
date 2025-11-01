// Simple alert for fun
window.onload = function() {
    console.log("Welcome to Homemade Indian Food!");
};
// ---------- Highlight Active Section Link ----------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // small offset for header
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
// ---------- Shrink Header on Scroll ----------
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
// ---------- Parallax Background Effect ----------
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  // Adjust the number (0.5) to control how fast the background moves
  document.body.style.backgroundPositionY = `${scrollY * 0.5}px`;
});


 function toggleCategory(id) {
  const menu = document.getElementById(id);
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
function toggleCategory(id) {
  const menu = document.getElementById(id);
  menu.classList.toggle("show");
}
