

export class ListToDoItems {

    async listToDo(res){ //affiche tous les element de la list 
        const afficherList = $('.listDone');
        let item = "" ;

        const jsonData = await res.json();

        jsonData.forEach(elem => {
            if(elem.done === "false"){
                // console.log("IF "+elem.title)
                
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
                // menus += '<div class="item" style="background-image: url(./assets/images/menus/'+elem.URL_IMG+');">';
                // menus +=    '<div onclick="idvalue('+elem.ID+')" class="dark_opo">';
                // menus +=        '<h1 style="text-transform: capitalize">'+elem.NAME+'</h1>';
                // menus += '</div></div>';
            
                // list_menus.html(menus);
            }
        });
    }


    addToDo(){



    }

}