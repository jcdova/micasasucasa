

var main = function() {
    $('.icon-menu').click(function() {
        $('.menu').animate({left: '0px'}, 300)
        // $('body').animate({left: '0px'}, 1000)
    })

    $('.icon-close').click(function() {
        $('.menu').animate({left: '-285px'}, 300)
        // $('body').animate({left: '0px'}, 1000)
    })
}


$(document).ready(main)
