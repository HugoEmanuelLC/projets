// import { validateForm } from "./insert.js";
import { ListToDoItems } from "./modules/list-module.js";

const urlDatas = "http://localhost/projets/Api-php-toDoList/";

const listToDoItems = new ListToDoItems;

listToDoItems.listToDo(urlDatas);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    console.log("il ecoute bien")

    validateForm();
    return setTimeout(listToDoItems.listToDo(urlDatas), 2000)
    
})