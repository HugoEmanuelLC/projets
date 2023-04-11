
import { ListToDoItems } from "./modules/list-module.js";


const listToDoItems = new ListToDoItems;

const listToDo = await fetch("http://localhost/projets/Api-php-toDoList/list", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        });

listToDoItems.listToDo(listToDo);




