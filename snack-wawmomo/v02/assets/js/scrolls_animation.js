

// BIBLIOTHEQUE JQUERY
$(function(){
    let html_body = $('html, body');
    let a_scroll_up = $(".a_scroll_up");
    let a_gallerie = $(".a_gallerie");
    let a_menu = $(".a_menu");
    let a_horaires = $(".a_horaires");
    let a_contact = $(".a_contact");

    a_scroll_up.click(function(){
        html_body.animate({
            scrollTop: html_body.offset().top
        }, 2000);
    })
    
    a_menu.click(function(){
        html_body.animate({
            scrollTop: $("#menu").offset().top
        }, 2000);
    })
    a_gallerie.click(function(){
        html_body.animate({
            scrollTop: $("#gallerie").offset().top
        }, 2000);
    })
    a_horaires.click(function(){
        html_body.animate({
            scrollTop: $("#horaires").offset().top
        }, 2000);
    })
    a_contact.click(function(){
        html_body.animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    })
})