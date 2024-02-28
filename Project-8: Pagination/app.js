import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const text = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');

let index = 0;
let pages = [];

const setUp = () => {
    displayButtons(btnContainer, pages, index);
    displayFollowers(pages[index]);
};

const init = async () => {
    const followers = await fetchFollowers();
    text.textContent = 'pagination';
    pages = paginate(followers);
    setUp();
};

window.addEventListener('load', init)