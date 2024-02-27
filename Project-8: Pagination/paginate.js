const paginate = (followers) => {
    const itemOfPage = 10;
    const numberOfPage = Math.ceil(followers.length / itemOfPage);

    const newFollwers = Array.from(({length:numberOfPage}), (_, index) => {
        const start = index * itemOfPage;
        return followers.slice(start, start + itemOfPage);
    })

}

export default paginate;
