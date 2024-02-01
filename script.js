const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const sidebar = document.querySelector(".container .sidebar");

menuOpen.addEventListener("click", function () {
  sidebar.style.left = "0%";
});

menuClose.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});
