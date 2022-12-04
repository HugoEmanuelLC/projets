    
 
    

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
    let list_produits = $(".box_list_produits .produits table"); 
    let titre = $(".box_list_produits .produits h1")
    function idvalue(id){
        let produitName = "";
        let produitPrix ;
        let nameMenu = "";
        let item = "";
        let i = 0;
        $.ajax({
            async: true,
            url: "http://localhost/tests/Api/api-wawmomo/produits.php?i="+id,
            dataType: "json",
            success: function(data){
                
                data.forEach(dataProduits => {

                    i = i +1;

                    nameMenu = dataProduits.NAME;

                    if(nameMenu){
                        titre.html(nameMenu.toUpperCase());
                    }else{
                        titre.html("menu".toUpperCase());
                    }

                    if( i %2==0 ){
                        produitName = '<tr class="pair"> <td>'+dataProduits.nom+'</td>';
                        produitPrix = '<td>'+dataProduits.PRIX+' €</td> </tr>';

                        item += produitName+produitPrix;
                    }else{
                        produitName = '<tr> <td>'+dataProduits.nom+'</td>';
                        produitPrix = '<td>'+dataProduits.PRIX+' €</td> </tr>';

                        item += produitName+produitPrix;
                    }

                    list_produits.html(item).slice(1);
                    

                    // i = i+1;
                    // if (i %2==0) {
                    //     produit += '<tr> <td>'+dataProduits.nom+'</td>';
                    //     produit += '<td>'+dataProduits.PRIX+' €</td> </tr>';
                    // }
                    // .slice(1)
                    // .toUpperCase()
                })
            }
        });
    }
}else{}







