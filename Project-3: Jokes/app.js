const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".content img");

const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", function () {
    getData(URL)
})

function getData(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.readyState === 200) {
            const { value: joke } = JSON.parse(xhr.responseText);
            content.textContent = joke;
            img.classList.add("shake-img");
            const random = Math.random() * 1000;
    
            setTimeout(() => {
                img.classList.remove("shake-img")
            }, random)
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
            });
        };
    };
};