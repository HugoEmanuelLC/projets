$(function(){

    // description projets/demos
    let a_in_description = $(".a_in_description");
    let a_out_description = $(".a_out_description");
    
    let description_snack = $(".snack");


    a_in_description.click(function(){
        description_snack.addClass("show2").removeClass("hide");
    });
    a_out_description.click(function(){
        description_snack.addClass("hide").removeClass("show2");
    });

})