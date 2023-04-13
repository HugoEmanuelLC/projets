
import { listToDo , addToDo } from "./modules/listToDo/crud.js";
import { urlDataAllListToDo , urlDataAddListToDoItems } from "./modules/serviceUrl.js";

listToDo(urlDataAllListToDo);
const d = new Date();
const btn = document.querySelector("#btn");

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
            console.log("dataJson")
            setTimeout(() => {
                listToDo(urlDataAllListToDo)
            }, 180);

            document.forms["postAddToDo"]["title"].value = "";
            document.forms["postAddToDo"]["until"].value = "";
            document.forms["postAddToDo"]["description"].value = "";
        }
    }
});

// const btnDoneTrue = "";

// if (document.getElementsByClassName("listDoneFalse")) {

//     console.log("LE #btnDoneTrue");
//     btnDoneTrue = document.getElementsByClassName("btnDoneTrue");
    
// }else{
//     console.log("PAS de btnDoneTrue");
// }
// btnDoneTrue.addEventListener("click", () => {
//         console.log("Done deviens TRUE");
//     });