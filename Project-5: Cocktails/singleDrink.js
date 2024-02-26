import fetchDrink from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const presentDrink = async () => {
    const id = localStorage.getItem("drink");
    const drink = await fetchDrink(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${id}`);
    displayDrink(drink)
}

window.addEventListener("DOMContentLoaded", presentDrink)