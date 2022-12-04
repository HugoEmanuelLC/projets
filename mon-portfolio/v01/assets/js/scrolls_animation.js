

// BIBLIOTHEQUE JQUERY
$(function(){
    let html_body = $('html, body');
    let footer = $('footer');
    let a_scroll_up = $(".a_scroll_up");
    let a_scroll_down = $(".a_scroll_down");

    a_scroll_up.click(function(){
        html_body.animate({
            scrollTop: html_body.offset().top
        }, 2000);
    })
    a_scroll_down.click(function(){
        html_body.animate({
            scrollTop: footer.offset().top
        }, 2000);
    })
})