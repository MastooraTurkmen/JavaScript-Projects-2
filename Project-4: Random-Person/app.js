import getElement from "./utils/getElement.js";
import getUser from "./utils/getUser.js";
import displayUser from "./utils/displayUser.js";

const btn = getElement(".btn");
const btns = [...document.querySelectorAll(".icon")];

const showUser = async () => {
    const person = await getUser()
    displayUser(person)
}


window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);