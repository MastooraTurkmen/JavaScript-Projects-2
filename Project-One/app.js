function Counter(element, value) {
    this.value = value;
    this.element = element;
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.resetBtn = element.querySelector(".reset");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)

    this.increaseBtn.addEventListener("click", this.increase)
    this.decreaseBtn.addEventListener("click", this.decrease)
    this.resetBtn.addEventListener("click", this.reset)

}

Counter.prototype.increase = function () {
    this.value++;
    this.valueDOM.textContent = this.value;
}

Counter.prototype.decrease = function () {
    this.value--;
    this.valueDOM.textContent = this.value;
}

Counter.prototype.reset = function () {
    this.value = 0;
    this.valueDOM.textContent = this.value;
}



const firstCounter = new Counter(getElement(".first-counter"), 100)
const secondCounter = new Counter(getElement(".second-counter"), 200)

function getElement(element) {
    const elements = document.querySelector(element)
    if (elements) {
        return elements
    }
    throw new Error(
        `Pleas check ${element} we couldn't able to find anyhow:(`
    )
}