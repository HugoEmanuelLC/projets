import { Logique } from "./Logique.js";


const logique = new Logique;

const listToDo = await fetch("http://localhost/projets/Api-php-toDoList/list", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "force-cache", // *default, no-cache, reload, force-cache, only-if-cached
        });

logique.listToDo(listToDo);



// logique.addNew(title,until,description)
