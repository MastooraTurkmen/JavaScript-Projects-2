import fetchDrink from "./fetchDrinks.js";

const showDrinks = async (url) => {
    const data = await fetchDrink(url);
    console.log(data)
}

export default showDrinks;