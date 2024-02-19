function Counter(element, value) {
    console.log(element, value);
}

const firstCounter = new Counter(getElement(".first-counter"), 100)
const secondCounter = new Counter(getElement(".second-counter"), 100)

function getElement(element) {
    const elements = document.querySelector(element)
    if (elements) {
        return elements
    }
    throw new Error(
        `Pleas check ${element} we couldn't able to find anyhow:(`
    )
}