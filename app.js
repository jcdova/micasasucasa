

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

// $("#form").on("click", function() {
//     event.preventDefault();
//     window.open("https://goo.gl/forms/rnTFT84LFfxmJlUA3", '_self')
// });


$(document).ready(main)



