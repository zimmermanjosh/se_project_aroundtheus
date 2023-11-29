export default class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  clearItems() {
    // Assuming this._container is the DOM element that holds all the cards
    while (this._container.firstChild) {
      this._container.removeChild(this._container.firstChild);
    }
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
