import getElement from "./getElement.js";

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");

function displayUser(person) {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = 'My Name is';

}


export default displayUser;