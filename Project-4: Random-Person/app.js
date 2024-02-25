import getElement from "./utils/getElement";
import getUser from "./utils/getUser";

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btn = getElement(".btn");
const btns = [...document.querySelectorAll(".icon")];


const showUser = async () => {
    const person = await getUser()
    console.log(person)
}


window.addEventListener("DOMContentLoaded", showUser)