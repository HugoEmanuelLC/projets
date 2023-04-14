
import { listToDo , addToDo, verifList } from "./modules/listToDo/crud.js";
import { urlDataAllListToDo , urlDataAddListToDoItems , urlDataListToDoItems } from "./modules/serviceUrl.js";


listToDo(urlDataAllListToDo);
const d = new Date();
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    const dateActuelle = d.toLocaleDateString('fr-CA');
    
    let title = document.forms["postAddToDo"]["title"].value;
    let date = dateActuelle;
    let until = document.forms["postAddToDo"]["until"].value;
    let done = "false";
    let description = document.forms["postAddToDo"]["description"].value;
    const dataJson = {
        title: title,
        date: date,
        until: until,
        done: done,
        description: description
    }
    if ( title == "" || until == 0 || description == "" ) {
        alert("Name must be filled out");
        return false;
    }else{

        addToDo(urlDataAddListToDoItems, dataJson);

        if (dataJson != "") {
            setTimeout(() => {
                listToDo(urlDataAllListToDo)
            }, 180);

            document.forms["postAddToDo"]["title"].value = "";
            document.forms["postAddToDo"]["until"].value = "";
            document.forms["postAddToDo"]["description"].value = "";
        }
    }
});



if (localStorage.getItem("idValue")) {
    verifList(urlDataAllListToDo, urlDataListToDoItems, localStorage.getItem("idValue"));
    localStorage.clear();
    console.log(localStorage.getItem("idValue"))
}else{
    console.log("rien dans le stock");
}
