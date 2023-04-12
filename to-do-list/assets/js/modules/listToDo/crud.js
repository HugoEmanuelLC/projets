

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
            item +=         "<h4>Fait</h4>";
            item +=         "<h4>Suprimer</h4>";
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