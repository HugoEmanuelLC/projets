// import { validateForm } from "./insert.js";
import { ListToDoItems } from "./modules/list-module.js";

const urlDatas = "http://localhost/projets/Api-php-toDoList/";

const listToDoItems = new ListToDoItems;

listToDoItems.listToDo(urlDatas);

function validateForm(){
    console.log(document.forms["postAddToDo"]["title"].value);
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    console.log("il ecoute bien")

    validateForm();
})