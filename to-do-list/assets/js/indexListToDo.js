
import { listToDo , addToDo } from "./modules/listToDo/crud.js";
import { urlDataAllListToDo , urlDataAddListToDoItems } from "./modules/serviceUrl.js";

listToDo(urlDataAllListToDo);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let title = document.forms["postAddToDo"]["title"].value;
    let date = "2023-04-11";
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
        // setTimeout(addToDo(urlDataAddListToDoItems, dataJson), 1000);
        // setInterval(,2000);

        addToDo(urlDataAddListToDoItems, dataJson);

        if (dataJson != "") {
            console.log("dataJson")
            setTimeout(() => {
                listToDo(urlDataAllListToDo)
            }, 180);
        }
    }
})