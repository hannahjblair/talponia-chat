//TO DO:
//clear input from form once submitted
//form validation
//store form input in an array
//display form input on page

//changes the display of the form element to flex 
function showForm() {
    document.getElementById("form").style.display = "flex";
}

//changes the display of the form element to none and stops event propogation
function hideForm(event) {
    event.stopPropagation();
    document.getElementById("form").style.display = "none";
    document.getElementById("form").reset();
}

//stops the event propogation when there is a click inside form so it doesnt count as a click in clickable-area
document.getElementById("form").addEventListener("click", function(event) {
    event.stopPropagation();
});

//clear the inuput
// function clearForm() {
//     document.getElementsByClassName("user-input").value = "";
// }


//calls showForm function when user clicks in clickable-area container
document.getElementById("clickable-area").addEventListener("click", showForm);

//calls hideForm function when the submit button is clicked
document.getElementById("btn").addEventListener("click", hideForm);





