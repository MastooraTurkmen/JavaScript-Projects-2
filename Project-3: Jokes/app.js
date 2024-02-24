const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");

const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", async () => {
    try {
        const respons = await fetch(URL);
        const data = await respons.json();
        displayData(data);
    } catch (error) {
        console.log(error)
    }

});

function displayData(data) {
    img.classList.add("shake-img");
    const { value: joke } = data;
    content.textContent = joke;
    const random = Math.random() * 1000;
    setTimeout(() => {
        img.classList.remove("shake-img")
    }, random)
};


// I have made this project in four ways and also there are so many categories you can add

/*

You can add more categories in API "https://api.chucknorris.io/jokes/random?category={category}"
    [
        "animal",
        "career",
        "celebrity",
        "dev",
        "explicit",
        "fashion",
        "food",
        "history",
        "money",
        "movie",
        "music",
        "political",
        "religion",
        "science",
        "sport",
        "travel"
    ]
*/