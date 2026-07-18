//changes the display of the form element to flex 
function showForm() {
    document.getElementById("form").style.display = "flex";
    //hides the other content (right now just one <p>)
    document.getElementsByClassName("show")[0].style.display = "none";
}

//changes the display of the form element to none and stops event propogation
function hideForm(event) {
    event.stopPropagation();
    document.getElementById("form").style.display = "none";
    document.getElementById("form").reset();
    //shows the other content 
    document.getElementsByClassName("show")[0].style.display = "flex";
}

//stops the event propogation when there is a click inside form so it doesnt count as a click in clickable-area
document.getElementById("form").addEventListener("click", function(event) {
    event.stopPropagation();
});


//calls showForm function when user clicks in clickable-area container
document.getElementById("clickable-area").addEventListener("click", showForm);


// function that adds the user input from the form to an object then pushes 
// that opject to an array of form answers

let formArray = []

function setContent() {
    let nameValue = document.getElementById("name").value;
    let dateOfBirth = document.getElementById("age").value;
    let messageValue = document.getElementById("message").value;

    let formObj = {name: nameValue, dob: dateOfBirth, message: messageValue}

    formArray.push(formObj);
    console.log(formArray);

}


//calls setContent function when the submit button is clicked
document.getElementById("btn").addEventListener("click", setContent);

//calls hideForm function when the submit button is clicked
document.getElementById("btn").addEventListener("click", hideForm);

//calls hideForm function when the x button is clicked
document.getElementById("btn-close").addEventListener("click", hideForm);



//TO DO:
//1. form validation
//2. figure out how to add the location of the click that brings up
//the form to the object so I can later display that message at the
//spot the user clicked
//3. Display each message where the user clicked
//4. Calculate the users life cycle stage from DOB and display
//image of the life cycle stage at the top corner of the message
//the life cycle stage will need to be calculated each time the pg loads
//and not set as a value in the object becuase the current cycle will change
//5. make keyboard that represents peduncle borer communication better
//than human letters
