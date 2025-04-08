
import { TODOLIST } from "./todoList.js"
import Todos from "./Todos.js"

const pElem=document.querySelector(".todos") /*Itt fognak megjelenni a teendők*/
const iPElem=document.querySelector(".todoinput") /*Ide fognak kerülni az inputmező és az "ok" gomb*/

new Todos(TODOLIST,pElem,iPElem) /*Létrehoz egy új todo példányt*/
