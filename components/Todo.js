class Todo {
  constructor(data, selector) {
    this.data = data;
    this._templateElement = document.querySelector(selector);
  }

  _setEventListeners() {
    const deletButton = this.element.querySelector(".todo__delete");
    deletButton.addEventListener("click", () => this.handleDelete());

    this._todoCheckboxElement.addEventListener("change", () => {
      this._data.completed = this._data.completed;
    });
  }

  _generateCheckboxElement() {
    this._todoCheckboxElement =
      this._todoCheckboxElement.querySelector(".todo_completed");
    this._todoLabel = this._todoCheckboxElement.querySelector(".todo_label");
    this._todoCheckboxElement.checked = this._data.completed;
    this._todoCheckboxElement.id = `.todo-$(this._data.id)`;
    this._todoLabel.setAttribute("for", `todo-$(this._data.id)`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoElement.querySelector(".todo_name");
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    const todoDate = this._todoElement.querySelector(".todo_date");
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = data.name;
    todoCheckboxEl.checked = data.completed;

    todoCheckboxEl.id = `todo-${data.id}`;
    todoLabel.setAttribute("for", `todo-${data.id}`);

    return this._todoElement;
  }
}

export default Todo;
