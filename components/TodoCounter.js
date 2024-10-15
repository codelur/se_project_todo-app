class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((item) => item.completed === true).length;
    this._total = todos.length;
  }

  updateCompleted = (increment) => {
    this._completed += increment ? 1 : -1;
    this.updateText();
  };

  updateTotal = (increment) => {
    this._total += increment ? 1 : -1;
    this.updateText();
  };

  updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}
export default TodoCounter;
