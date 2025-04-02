
import { TODOLIST } from "./todoList.js"
import Todos from "./Todos.js"

const pElem=document.querySelector(".todos")
const iPElem=document.querySelector(".todoinput")

new Todos(TODOLIST,pElem,iPElem)
