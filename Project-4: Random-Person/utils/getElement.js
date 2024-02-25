export default selection => {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error(`There is no such an ${element}`);
}