

let list_produits = $(".box_list_produits .produits table"); 
let titre = $(".box_list_produits .produits h1");

/*AFICHAGE des Menus*/
let list_menus = $(".box_list_menus"); 
let menus = "";

async function listMenus(){
    const response = await fetch("http://localhost:3000/api/", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    });
    const jsonData = await response.json();

    jsonData.forEach(dataMenus => {
            // console.log(dataMenus.NAME)
            menus += '<div class="item" style="background-image: url(./assets/images/menus/'+dataMenus.URL_IMG+');">';
            menus +=    '<div onclick="idvalue('+dataMenus.ID+')" class="dark_opo">';
            menus +=        '<h1 style="text-transform: capitalize">'+dataMenus.NAME+'</h1>';
            menus += '</div></div>';
        
            list_menus.html(menus);
        });
    // console.log("debut --- jsonData");
    // console.log(jsonData);
    // console.log("fin --- jsonData");
}
listMenus();
    
async function idvalue(id){
    /*AFICHAGE des Produits*/
    let produitName = "";
    let produitPrix ;
    let nameMenu = "";
    let item = "";
    let i = 0;
    
    if( $(".box_list_produits .produits table") ){
        $(".box_list_produits .produits table").css("background-color", "rgb(255, 255, 255,0.9)")
    }else{}

    const response = await fetch("http://localhost:3000/api/menu"+id, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    });
    const jsonData = await response.json();

    jsonData.forEach(dataProduits => {
    
            i = i +1;
        
            nameMenu = dataProduits.NAME;
        
            if(nameMenu){
                titre.html(nameMenu.toUpperCase());
            }else{
                titre.html("<h1>menu</h1>".toUpperCase());
            }
        
            if( i %2==0 ){
                produitName = '<tr class="pair"> <td>'+dataProduits.nom+'</td>';
                produitPrix = '<td>'+dataProduits.PRIX+' €</td> </tr>';
        
                item += produitName+produitPrix;
            }else{
                produitName = '<tr> <td style="text-transform: capitalize">'+dataProduits.nom+'</td>';
                produitPrix = '<td>'+dataProduits.PRIX+' €</td> </tr>';
        
                item += produitName+produitPrix;
            }
        
            list_produits.html(item);
                        // .slice(1)
                        // .toUpperCase()
        })
}





