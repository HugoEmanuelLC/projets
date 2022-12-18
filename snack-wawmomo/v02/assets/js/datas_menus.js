    
 
    

if ($(".box_list_menus")) {

    /*AFICHAGE des Menus*/
    let list_menus = $(".box_list_menus"); 
    let menus = "";
    $.ajax({
        async: false,
        url: "http://localhost/projets/dashboard/0",
        dataType: "json",
        success: function(data){
                
            data.forEach(dataMenus => {
                menus += '<div class="item" style="background-image: url(./assets/images/menus/'+dataMenus.URL_IMG+');">';
                menus +=    '<div onclick="idvalue('+dataMenus.ID+')" class="dark_opo">';
                menus +=        '<h1 style="text-transform: capitalize">'+dataMenus.NAME+'</h1>';
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

        if( $(".box_list_produits .produits table") ){
            $(".box_list_produits .produits table").css("background-color", "rgb(255, 255, 255,0.9)")
        }

        let produitName = "";
        let produitPrix ;
        let nameMenu = "";
        let item = "";
        let i = 0;
        $.ajax({
            async: true,
            url: "http://localhost/projets/dashboard/0/"+id,
            dataType: "json",
            success: function(data){

                fond_none = true;
                
                data.forEach(dataProduits => {

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





