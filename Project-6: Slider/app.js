import people from "./data.js";

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const container = document.querySelector(".slide-container");

container.innerHTML = people.map((item, slideIndex) => {
  const { img, name, job, text } = item;
  
  let position = 'next';
  if (slideIndex === 0) {
    position = 'active';
  }

  if (slideIndex === people.length - 1) {
    position = 'last';
  }

  return `
    <article class="slide ${position}">
        <img src="${img}" class="img" alt="peter doe">
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="text">${text}</p>
        <div class="quote-icon">
          <div class="fas fa-quote-right"></div>
        </div>
      </article>
    `
});

const slideChange = () => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;

  if (!next) {
    next = container.firstChild;
  }

  last.classList.remove(["last"]);
  next.classList.remove(["next"]);
  active.classList.remove(["active"]);

  last.classList.add('next');
  next.classList.add('active');
  active.classList.add('last');

};

nextBtn.addEventListener('click', function () {
  slideChange()
});

prevBtn.addEventListener('click', function () {
  slideChange('prev')
})