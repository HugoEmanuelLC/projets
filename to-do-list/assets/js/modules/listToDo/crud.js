
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
        if(elem.done === "false" || elem.done == ""){
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
            
            afficherList.html(item);
        }else{
            console.log("ELSE "+elem.title)
        }
    });
}


async function changeDone(urlItem, idValue){
    const listToDo = await fetch(urlItem+idValue, {
        method: "PUT", 
        mode: "cors", 
        cache: "no-cache", 
    })
    .then((res) => res.json())
    .then((data))
}


export async function verifList(urlList, urlItem, idValue){
    const listToDo = await fetch(urlList, {
        method: "GET", 
        mode: "cors", 
        cache: "no-cache", 
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("data")
        console.log(data)
        data.find(elem => {
            if (elem.id == idValue) {
                console.log(elem.id+" "+elem.done);
                console.log("element trouver : " +elem.id+" "+elem.done);
                changeDone(urlItem, elem.id)
            }else{
                console.log("aucun element data touver");
            }
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