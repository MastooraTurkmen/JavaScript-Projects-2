import people from "./data.js";

const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const container = document.querySelector(".slide-container");

container.innerHTML = people.map((item) => {
    const { img, name, job, text } = item;

    return `
    <article class="slide">
        <img src="${img}" class="img" alt="peter doe">
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="text">${text}</p>
        <div class="quote-icon">
          <div class="fas fa-quote-right"></div>
        </div>
      </article>
    `
})