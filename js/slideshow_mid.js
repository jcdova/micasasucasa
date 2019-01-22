
$("#slideshow_mid > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow_mid > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow_mid');
}, 3000);





