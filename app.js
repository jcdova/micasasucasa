var main = function() {
	$('.icon-menu').click(function() {
	    $('.menu').animate({left: '0px'}, 1000)
	    $('body').animate({left: '285px'}, 1800)
	})

	$('.icon-close').click(function() {
	    $('.menu').animate({left: '-285px'}, 1800)
	    $('body').animate({left: '0px'}, 1000)
	})
}

$(document).ready(main)


// Change Content
var changeContent = function () {
	$("button").click(function() {
        $("#changeContent").html("Content Changed")
    })
}

changeContent()

// Hide Content by clicking on it
$("p").click(function() {
        $(this).hide()
    })

// Hide Content by double clicking on it
$("#dblClickHide").dblclick(function() {
        $(this).hide()
    })

//Mouseeneter
// $("#p1").mouseenter(function() {
//     alert("You entered p1!")
// });

// //Mouse hover
// $("#p2").hover(function() {
//     alert("You hovered p2!")
// });

//Change color when clicking on input space 
$("input").focus(function() {
        $(this).css("background-color", "#cccccc")
    })
    $("input").blur(function() {
        $(this).css("background-color", "#ffffff")
    })

//Assign one a more elements using the on event
$("section").on("click", function(){
    $(this).hide()
});

//Show and Hide event
var HideShow = function () {
    $("#hide").click(function(){
        $("#par").hide()
    });
    $("#show").click(function(){
        $("#par").show(3000)
    })
}

HideShow()

//Toggle event
var Toggle = function () {
	$("#tog").click(function() {
		$("#parToggle").toggle()
	})
}

Toggle()

//Fade in
$("#fadeIn").click(function(){
        $("#div1").fadeIn()
        $("#div2").fadeIn("slow")
        $("#div3").fadeIn(3000)
    })

//Fade out
$("#fadeOut").click(function(){
        $("#divRed").fadeOut(6000) 
    })

//Fade to
$("#fadeTo").click(function(){
        $("#divBlue").fadeTo("slow", 0.15) 
    })

//Slide toggle
$("#flip").click(function(){
    $("#panel").slideToggle();
});

//Animate
$("#animate1").click(function(){
    $("#box-animate1").animate({
        left: '250px',
        opacity: '0.5',
        // height: '150px',
        // height: 'toggle',
        // width: '150px'
        height: '+=150px',
        width: '+=150px'
    });
});

//Callback Functions
$("#callback").click(function(){
    $("#par").hide(1000, function(){
        alert("The paragraph is now hidden");
    });
});

//Chaining
$("#chain").click(function(){
   $("#parchain").css("color", "blue")
     	// .slideUp(2000)
      //   .slideDown(2000); 
        .hide(2000)
        .show(2000);         
});

//Get
$("#alertInput").click(function(){
        alert("Value: " + $("#test").val());
    });

$("#alertUrl").click(function(){
        alert($("#url").attr("href"));
    });

