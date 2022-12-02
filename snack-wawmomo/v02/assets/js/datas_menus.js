    
 
    

if ($(".box_list_menus")) {
    /*AFICHAGE des Menus*/
    let list_menus = $(".box_list_menus"); 
    let menus = "";
    $.ajax({
        async: false,
        url: "http://localhost/tests/Api/api-wawmomo/menus.php",
        dataType: "json",
        success: function(data){
                
            data.forEach(dataMenus => {
                menus += '<div class="item" style="background-image: url(./assets/images/menus/'+dataMenus.URL_IMG+');">';
                menus +=    '<div onclick="idvalue('+dataMenus.ID+')" class="dark_opo">';
                menus +=        '<h1>'+dataMenus.NAME+'</h1>';
                menus += '</div></div>';
    
                list_menus.html(menus);
            })
        },
        error: ()=>{
            console.log("n'as pas chargé");
        }
    });


    /*AFICHAGE des produits*/
    let list_produits = $(".box_list_produits table tbody"); 
    function idvalue(id){
        let produit = "";
        let produitColor = "";
        let nameMenu = "";
        // let i = 0;
        $.ajax({
            async: true,
            url: "http://localhost/tests/Api/api-wawmomo/produits.php?i="+id,
            dataType: "json",
            success: function(data){
                
                data.forEach(dataProduits => {

                    nameMenu = '<h1>'+dataProduits.NAME+' :</h1>';
                    produit += '<tr> <td>'+dataProduits.nom+'</td>';
                    produit += '<td>'+dataProduits.PRIX+' €</td> </tr>';
                    
                    list_produits.html(nameMenu+produit+produitColor);

                    // i = i+1;
                    // if (i %2==0) {
                    //     produit += '<tr> <td>'+dataProduits.nom+'</td>';
                    //     produit += '<td>'+dataProduits.PRIX+' €</td> </tr>';
                    // }
                    
                })
            }
        });
    }
}else{}







