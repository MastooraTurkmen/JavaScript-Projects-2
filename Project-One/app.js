function Counter(element, value) {
    console.log(element, value);
    this.increase = element.querySelector(".increase");
    this.decrease = element.querySelector(".decrease");
    this.reset = element.querySelector(".reset");
    this.value = element.querySelector(".value");
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