import getElemet from './getElement';

export default function displayDrinks({drinks}) {
    const section = getElemet('.section-center');
    const title = getElemet('.title');

    if (!drinks) {
        title.textContent = "Sorry, No Drinks finds :(";
        section.innerHTML = null;
        return
    }

    const newDrink = drinks.map((drink) => {
        const {idDrink: id, strDrink: name, strDrinkThumb:image} = drink
        return `
        <a href="drink.html">
        <article class="cocktail" data-id="${id}">
          <img src="${image}" alt="${name}">
          <h3>${name}</h3>
        </article>
      </a>
        `
    }).join('')

    title.textContent = "";
    section.innerHTML = newDrink;
    return section;
}