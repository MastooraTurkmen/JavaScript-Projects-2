import getElement from "./utils/getElement.js";
import getUser from "./utils/getUser.js";

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btn = getElement(".btn");
const btns = [...document.querySelectorAll(".icon")];


const showUser = async () => {
    const person = await getUser()
    console.log(person)
}


window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("DOMContentLoaded", showUser);