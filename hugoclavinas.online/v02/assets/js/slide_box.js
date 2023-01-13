$(function(){
    
    // slide box
    let a_in_slide_box = $(".a_in_slide_box");
    let a_in_contact = $(".a_in_contact");
    let a_out_slide_box = $(".a_out_slide_box");
    
    let slide_box = $(".slide_box");

    //variable init
    let tompon = "";
    
    a_in_contact.click(function(){
        tompon = title;
        title = "HClavinas | Contact";
        $("title").html(title);
    })
    
    a_in_slide_box.click(function(){
        slide_box.addClass("show").removeClass("hide");
    });
    a_out_slide_box.click(function(){
        title = tompon;
        $("title").html(title);
        slide_box.addClass("hide").removeClass("show");
    });

})