

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


//Form validation:
//don't let user enter a blank for name or the message
//make sure the user does select a dob (ok if it is in the future though, but 
//must slect day month and year.)
//if user doesn't have input needed keep all the things that normaly happen at the 
//submit button click from happening


function validateName() {
    let nameValue = document.getElementById("name").value;
    if (nameValue == "") {
        document.getElementById("name-alert").style.display = "block";
        return false;
    } else {
        document.getElementById("name-alert").style.display = "none";
        return true;
    }
}

function validateDOB () {
    let DOB = document.getElementById("age").value;
    if (!DOB) {
        document.getElementById("age-alert").style.display = "block";
        return false; 
    } else {
        document.getElementById("age-alert").style.display = "none";
        return true;
    }
}

function validateMessage() {
    let messageValue = document.getElementById("message").value;
    if (messageValue == "") {
        document.getElementById("message-alert").style.display = "block";
        return false;
    } else {
        document.getElementById("message-alert").style.display = "none";
        return true;
    }
}




//calls showForm function when user clicks in clickable-area container
document.getElementById("clickable-area").addEventListener("click", showForm);

//calls hideForm function when the x button is clicked
document.getElementById("btn-close").addEventListener("click", hideForm);

//calls on the form validation functions when the submit button is clicked
document.getElementById("btn").addEventListener("click", function(event) {
    //have to run the validation functions first because otherwise the alert message
    //will only show for the first input that is left blank
    let isNameValid = validateName();
    let isDOBValid = validateDOB();
    let ismessageValid = validateMessage();
    //if all inputs have input then calls setContent and hideForm
    if (isNameValid === true && isDOBValid === true && ismessageValid === true) {
        setContent(); 
        hideForm(event); 
    }
});




//TO DO:

//reset the form completely when x is clicked and make sure 
//none of the alert messages are showing

// figure out how to add the location of the click that brings up
//the form to the object so I can later display that message at the
//spot the user clicked

//Display each message where the user clicked

//Calculate the users life cycle stage from DOB and display
//image of the life cycle stage at the top corner of the message
//the life cycle stage will need to be calculated each time the pg loads
//and not set as a value in the object becuase the current cycle will change

//make keyboard that represents peduncle borer communication better
//than human letters
