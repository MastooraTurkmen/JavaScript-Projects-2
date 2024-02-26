import showLoading from "./toggleLoading.js";

const fetchDrink = async (url) => {
    showLoading();
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchDrink;
