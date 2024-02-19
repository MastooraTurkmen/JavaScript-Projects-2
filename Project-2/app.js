function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element) {
  this.list = [...element.querySelectorAll(".img")]

  // target

  this.modal = getElement(".modal")
  this.modalImg = getElement(".main-img")
  this.modalImges = getElement(".modal-images")
  this.closeBtn = getElement(".close-btn")
  this.prevBtn = getElement(".prev-btn")
  this.nextBtn = getElement(".next-btn")
}

const nature = new Gallery(getElement(".nature"))
const city = new Gallery(getElement(".city"))