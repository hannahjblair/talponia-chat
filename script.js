

//changes the display of the form element to flex 
function showForm() {
    document.getElementById("form").style.display = "flex";
    //hides all of the elements with the class of show (click to add a message
    //instructions and the messages themeselves) 
    const elementsToShow = document.getElementsByClassName("show");
    for (let i = 0; i < elementsToShow.length; i++) {
        elementsToShow[i].style.display = "none";
    }

}

//changes the display of the form element to none and stops event propogation
function hideForm(event) {
    event.stopPropagation();
    document.getElementById("form").style.display = "none";
    document.getElementById("form").reset();
    //shows all of the elements with the class of show (click to add a message
    //instructions and the messages themeselves) 
    const elementsToShow = document.getElementsByClassName("show");
    for (let i = 0; i < elementsToShow.length; i++) {
        elementsToShow[i].style.display = "flex";
    }

    //makes sure there are no alert messages showing
    document.getElementById("name-alert").style.display = "none";
    document.getElementById("age-alert").style.display = "none";
    document.getElementById("message-alert").style.display = "none";
}

//stops the event propogation when there is a click inside form so it doesnt count as a click in clickable-area
document.getElementById("form").addEventListener("click", function(event) {
    event.stopPropagation();
});



//Form validation, check if the input is left blank and if so sets the alert message
//to show using css

function validateName() {
    let nameValue = document.getElementById("name").value.trim();
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
    let messageValue = document.getElementById("message").value.trim();
    if (messageValue == "") {
        document.getElementById("message-alert").style.display = "block";
        return false;
    } else {
        document.getElementById("message-alert").style.display = "none";
        return true;
    }
}


//puts the click location of the click in the clickable-area in an object
let clickLocation = {x: 0, y: 0};

function findClickLocation(event) {
    clickLocation.x = event.pageX;
    clickLocation.y = event.pageY;
    console.log(clickLocation);
}

// function that adds the user input from the form to an object then pushes 
// that opject to an array of form answers

let formArray = []

function setContent() {
    let nameValue = document.getElementById("name").value;
    let dateOfBirth = document.getElementById("age").value;
    let messageValue = document.getElementById("message").value;

    let formObj = {name: nameValue, dob: dateOfBirth, message: messageValue, location: {...clickLocation}}

    formArray.push(formObj);
    console.log(formArray);
    //return obj here so it can be passed in to the show message function when the submit button is clicked
    //so the location object can be added to the form array
    return formObj;

}

function showMessage(formObj) {
    //makes a div to hold each message frim the array/form input
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message-div", "show");

    messageDiv.innerHTML = `${formObj.name} ${formObj.dob} ${formObj.message}`;
    //displays the message at the location the user clicked
    messageDiv.style.position = "absolute";
    messageDiv.style.left = formObj.location.x + "px";
    messageDiv.style.top = formObj.location.y + "px";
    document.body.appendChild(messageDiv);
}




document.getElementById("clickable-area").addEventListener("click", findClickLocation);

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
    //if all inputs have input then calls setContent and  and showMessage
    if (isNameValid === true && isDOBValid === true && ismessageValid === true) {
        //passing in the obj that is returned from set content so the location object can 
        //be added to the formArray so the message can be displayed at the location of the 
        //users initial click
        let currentForm = setContent();
        setContent(); 
        showMessage(currentForm);
        hideForm(event); 
    
    }
});




//TO DO:

//right now if you click one place initially then once the form is pulled up click 
//somewhere outside of the form the message will go to that location because that 
//click gets saved to the click location object. might leave it like that but leaving
//this note so I don't forget it does that.

//Calculate the users life cycle stage from DOB and display
//image of the life cycle stage at the top corner of the message
//the life cycle stage will need to be calculated each time the pg loads
//and not set as a value in the object becuase the current cycle will change

//make keyboard that represents peduncle borer communication better
//than human letters
