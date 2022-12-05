

// BIBLIOTHEQUE JQUERY
$(function(){
    let html_body = $('html, body');
    let contact = $('.contact');
    let objectifs = $('.objectifs');
    let competences = $('.competences');
    let footer = $('footer');

    let a_scroll_up = $(".a_scroll_up");
    let a_contact = $(".a_contact");
    let a_objectifs = $(".a_objectifs");
    let a_competences = $(".a_competences");
    let a_scroll_down = $(".a_scroll_down");

    a_scroll_up.click(function(){
        html_body.animate({
            scrollTop: html_body.offset().top
        }, 2000);
    })
    
    a_contact.click(function(){
        html_body.animate({
            scrollTop: contact.offset().top
        }, 2000);
    })
    a_objectifs.click(function(){
        html_body.animate({
            scrollTop: objectifs.offset().top
        }, 2000);
    })
    a_competences.click(function(){
        html_body.animate({
            scrollTop: competences.offset().top
        }, 2000);
    })
    a_scroll_down.click(function(){
        html_body.animate({
            scrollTop: footer.offset().top
        }, 2000);
    })
})