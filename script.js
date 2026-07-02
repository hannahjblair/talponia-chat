//I want the form to appear when the user clicks where they want their message to go on the screen
//and when the form shows everything else should be hidden
//then i want their message and the info about them to go to the spot they clicked
//but then I'll have to have that only work once becuase I don't want the user being prompted to enter a message evrytime they click after the initial click


//I need to change the display for form to display:none when user clicks anytwhere in 
// the clickable-area container to flex and the display for elements with show to none from flex
//then once submit button is clicked make the display go back to none for the form and flex for the elemts with class of show.

//changes the display of the form element to flex 
function showForm() {
    document.getElementById("form").style.display = "flex";
}

//calls showForm function when user clicks in clickable-area container
document.getElementById("clickable-area").addEventListener("click", showForm);

//changes the display of the form element to none and stops event propogation
function hideForm(event) {
    event.stopPropagation();
    document.getElementById("form").style.display = "none";
}

//calls hideForm function when the submit button is clicked
document.getElementById("btn").addEventListener("click", hideForm);

//stops the event propogation when there is a click inside form so it doesnt count as a click in clickable-area
document.getElementById("form").addEventListener("click", function(event) {
    event.stopPropagation();
});
