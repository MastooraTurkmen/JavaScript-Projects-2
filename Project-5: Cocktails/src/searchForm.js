import getElement from "./getElement.js";
import presentDrink from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const from = getElement(".search-from");
const input = getElement('[name="drink"]');


from.addEventListener("keyup", function (e) {
    e.preventDefault();
    const value = input.value;
    if (!value) return;
    presentDrink(`${baseURL}${value}`);
});