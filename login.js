$(document).ready()

// Get the modal
var modal = document.getElementById('id01');
var checkUser = "";
var checkPassword = "";


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("#login").on("click", function() {
    event.preventDefault();

    checkUser = $("#UserId").val().trim();
    checkPassword = $("#passWord").val().trim();

    if (checkUser === "analydia" && checkPassword === "shooks" ||
        checkUser === "jorge" && checkPassword === "caro" ||
        checkUser === "glen" && checkPassword === "shooks") {
        
        window.open('index.html');
       
    } else {
    alert("Incorrect username or password, Please try again")
    }
});