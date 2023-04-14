

let tampom = "";

export function text(){
    console.log("text test");
}

export async function listToDo(url){ //affiche tous les element de la list 
    const afficherList = $('.listDone');
    let item = "" ;
    const listToDo = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    });
    const jsonData = await listToDo.json();
    await jsonData.forEach(elem => {
        if(elem.done === "false"){
            tampom = "true";
            item += "<div class='listDoneFalse'>";
            item += "<div>";
            item +=     "<h4>"+elem.title+"</h4>";
            item +=     "<div>";
            item +=         "<button class=\"btnDoneTrue\" type=\"button\" onclick=\"idvalue("+elem.id+")\" >Fait</button>";
            item +=         "<button type=\"button\">Suprimer</button>";
            item +=     "</div>";
            item += "</div>";
            
            item += "<div>";
            item +=     "<p>"+elem.description+"</p>";
            item += "</div>";

            item += "<div>";
            item +=     "<p>enregistre le : "+elem.date+"</p>";
            item +=     "<p>jusqu'au : "+elem.until+"</p>";
            item += "</div>";
            item += "</div>";
            
            return afficherList.html(item);
        }else{
            console.log("ELSE "+elem.title)
            if (tampom == "") {
                return afficherList.html("");
            }
        }
    });
}


async function changeDone(urlItemDone, idValue, dataJson){
    const listToDo = await fetch(urlItemDone+idValue, {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        body: JSON.stringify(dataJson),
    })
    .then((res) => res.json())
    console.log("tampom1 ->" + tampom)
}


export async function verifList(urlList, urlItem, idValue, dataJson){
    const listToDo = await fetch(urlList, {
        method: "GET", 
        mode: "cors", 
        cache: "no-cache", 
    })
    .then((res) => res.json())
    .then((data) => {
        data.find(elem => {
            if (elem.id == idValue) {
                changeDone(urlItem, elem.id, dataJson);
            }else{
                console.log("aucun element data touver");
            }
            console.log("tampom2 ->" + tampom)
        })
    })
}



export function addToDo(urlDatas, dataJson){ //nouveau element dans la list
    fetch(urlDatas, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify(dataJson),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}

console.log("tampom ->" + tampom)