import Todo from "./Todo.js";
import TodoInput from "./TodoInput.js";

export default class Todos {
  #lista = [];
  constructor(lista, pElem, iPElem) {
    this.#lista = lista;
    this.pElem = pElem;
    this.iPElem = iPElem;
    this.viewTodos();
    this.viewInput();
    this.removeEvent();
    this.okEvent();
    this.addEvent();
  }

  removeEvent() {
    window.addEventListener("remove", (event) => {
      console.log(event.detail);
      // this.#lista eltávolítom az event,detail-edik elemet.
      this.#lista.splice(event.detail, 1);
      this.viewTodos();
    });
  }
  okEvent() {
    window.addEventListener("done", (event) => {
      console.log(event.detail);
      // this.#lista eltávolítom az event,detail-edik elemet.
      this.#lista[event.detail].state = true;
      this.viewTodos();
    });
  }
  addEvent() {
    window.addEventListener("add", (event) => {
      console.log(event.detail);
      // this.#lista.push(event.detail)
      let obj = { todoText: event.detail, state: false };
      this.#lista.push(obj);
      this.viewTodos();
    });
  }
  viewInput() {
    new TodoInput(this.iPElem);
  }
  viewTodos() {
    this.pElem.innerHTML = "";
    for (let index = 0; index < this.#lista.length; index++) {
      const element = this.#lista[index];
      new Todo(element, this.pElem, index);
    }
  }
}
