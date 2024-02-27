import sublinks from "./data.js";

const nav = document.querySelector(".nav");
const toggleBtn = document.querySelector(".toggle-btn")
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener('click', () => {
    sidebarWrapper.classList.add("show");
});

closeBtn.addEventListener('click', () => {
    sidebarWrapper.classList.remove("show");
});

