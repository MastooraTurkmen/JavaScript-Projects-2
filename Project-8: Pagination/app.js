import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'


const init = async () => {
    const followers = await fetchFollowers();
    displayFollowers(followers)
}

window.addEventListener('load', init)