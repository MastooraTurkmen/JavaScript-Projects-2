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

sidebar.innerHTML = sublinks.map((item) => {
    const { links, page } = item;
    return `
    <article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
    ${links.map((link) => {
        return `
        <a href="${link.url}">
          <i class="${link.icon}"></i>${link.label}
        </a>
        `
    }).join('')
}
    </div>
    </article>
    `
}).join('')