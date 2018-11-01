var baseURl = "",
    slideImg = [
        "https://farm9.staticflickr.com/8165/7679976352_1f8c00cbcd_b.jpg",
        "https://farm9.staticflickr.com/8101/8469431266_d3417f3625_b.jpg",
        "https://farm8.staticflickr.com/7210/6803452926_75ddf7c812_b.jpg",
        "https://farm9.staticflickr.com/8377/8497776083_c6b59b83d9_b.jpg",
        "./images/awesome-railway-road-image.jpg"
    ],
    $gallery = $("#gallery");

$(function () {
    var files = "",
        bullets = "";
  
    for (var i = 0; i < slideImg.length; i++) {
        files += "" + "<div class=\"slide\">" + "<img class=\"slideImg\" src=\"" + baseURl + slideImg[i] + "\">" + "</div>";
        $gallery.html(files); // Injects content created by loop
    }
    for (var j = 0; j < slideImg.length; j++) {
        bullets += "" + "<div class=\"bulletOption\"></div>";
        $("#sliderBullets").html(bullets); // Injects content created by loop
    }
    $('#sliderBullets').children().attr('class', 'bulletOption').eq(0).addClass('bulletSelected'); // Sets first bullet as selected bullet
});


// ------------------------- //
// ----- Separate files ----- //
// ------------------------- //


var slideIndex = 1, // Sets index number for first slide (+1 for every slide thereafter)
    slideChangeSpeed = 5000, // Time between slide change in milliseconds
    slideFadeIn = 1200, // Fade in time in milliseconds
    slideFadeOut = 1200; // Fade out time in milliseconds

// Start slideshow
var beginSlideShow = setInterval(function () {
    $gallery.children().fadeOut(slideFadeOut).eq(slideIndex).fadeIn(slideFadeIn);
    $('#sliderBullets').children().attr('class', 'bulletOption').eq(slideIndex).addClass('bulletSelected');
    slideIndex++;
    if (slideIndex === $('#gallery').children().length) {
        slideIndex = 0;
    }
}, slideChangeSpeed);

// Show specific slide based on bullet choice and stop slideshow
$(document).ready(function () {
    $('#sliderBullets').children().click(function () {
        clearInterval(beginSlideShow);
        $gallery.children().fadeOut(slideFadeOut); // Fades out all slides
        $gallery.children().eq($(this).index()).fadeIn(slideFadeIn); // Uses the selected bullet's index to fade in the corresponding slide
        $('#sliderBullets').children().attr('class', 'bulletOption').eq($(this).index()).addClass('bulletSelected'); // Sets all bullets to unselected, then sets the selected bullet to selected
    });
});