const url = 'https://api.github.com/users/MastooraTurkmen/followers?per_page=100'

const fetchFollowers = async () => {
    const respons = await fetch(url);
    const data = await respons.json();
    return data;
}

export default fetchFollowers
