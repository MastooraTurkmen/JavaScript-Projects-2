import getElement from "./getElement.js";

const btns = [...document.querySelectorAll(".icon")];
const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");

function displayUser(person) {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = 'My name is';
    btns.forEach((btn)=> btn.classList.remove("active"))
    btns[0].classList.add("active");

    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener('click', () => {
            value.textContent = person[label];
            title.textContent = `My ${label} is`;
            btns.forEach((btn) => btn.classList.remove("active"));
            btn.classList.add("active");
        })
    })

}


export default displayUser;