import Todo from "./Todo.js";
import TodoInput from "./TodoInput.js";

/*Kezeli a todok listáját, megjeleníti őket, kezeli az eseményeket*/

export default class Todos { 
  #lista = []; /*Privát változók amiben eltárolja az összes teendőt*/
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

  removeEvent() { /*Figyeli a "remove" eseményt, kitőrli az adott indexű teendőt a listából, frissíti a megjelenítést*/
    window.addEventListener("remove", (event) => {
      console.log(event.detail);

      this.#lista.splice(event.detail, 1);
      this.viewTodos();
    });
  }
  okEvent() { /*Figyeli a "done" eseményt, megadott indexű teendőt "készre" állítja*/
    window.addEventListener("done", (event) => {
      console.log(event.detail);
      this.#lista[event.detail].state = true;
      this.viewTodos();
    });
  }
  addEvent() { /*Figyeli az "add" eseményt, létrehoz egy új objektumot, hozzáadjuk a listához, frissíti a megjenést*/
    window.addEventListener("add", (event) => {
      console.log(event.detail);
      let obj = { todoText: event.detail, state: false };
      this.#lista.push(obj);
      this.viewTodos();
    });
  }
  viewInput() { /*Példányosítja a TodoInput osztályt*/
    new TodoInput(this.iPElem);
  }
  viewTodos() { /*Űresre állítjuk a pElem tartalmát, majd végigmegy a listán és mindegyikhez létrehoz egy Todo objektumot*/
    this.pElem.innerHTML = "";
    for (let index = 0; index < this.#lista.length; index++) {
      const element = this.#lista[index];
      new Todo(element, this.pElem, index);
    }
  }
}
