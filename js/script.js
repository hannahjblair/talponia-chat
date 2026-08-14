

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
function hideForm(event)
 {
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

//will be using this as a percentage in lines 178 and 179
function findClickLocation(event) {
    clickLocation.x = (event.pageX / window.innerWidth) * 100;
    clickLocation.y = (event.pageY / window.innerHeight) * 100;
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
    // console.log(formArray);

    //determines how many days old the user is based on thr dob they enter in the form

    //https://www.geeksforgeeks.org/javascript/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/

    // Create Date object for the current date
    let currentDate = new Date();
    
    //makes currentDate at midnight - fixes wonky issues when determinig how many days old
    currentDate.setHours(0, 0, 0, 0);

    // Create Date object for the dob
    let dob = new Date(formObj.dob);

    // Calculate time difference in milliseconds
    let timeDifference = currentDate - dob;

    // Convert milliseconds to days, age = how many days old user is
    let age = Math.floor(timeDifference / (1000 * 3600 * 24));
    // console.log(age);

    //gunna determine what life cycle stage the user is in according to their age/dob
    //if age is negative - particle
    //if 0-14 days egg
    //if 15-90 days larva
    //if 91-331 days pupa
    //if 332-362 days moth
    //if 363 or greater decomposed

    let stage = "";
    let altDescription = "";

    if (age < 0) {
        stage = "img/particle.png";
        altDescription = "the user is currently a particle that has not yet become a pawpawpeduncle borer";
    } else if (age >= 0 && age <= 14) {
        stage = "img/egg.png";
        altDescription = "the user is an egg";
    } else if (age >= 15 && age <= 90) {
        stage = "img/larva.png";
        altDescription = "the user is a larva";
    } else if (age >= 91 && age <= 331) {
        stage = "img/pupa.png";
        altDescription = "the user is a pupa";
    } else if (age >= 332 && age <= 362) {
        stage = "img/moth.png";
        altDescription = "the user is a moth";
    } else if (age >= 363) {
        stage = "img/decomposed.png";
        altDescription = "the user is decomposed";
    };


    //makes a div to hold each message frim the array/form input
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("display-container", "show");

    // sets the html for the display of the message with the users input from the form
    messageDiv.innerHTML = `<div class="name-container">
                                <p>${formObj.name}</p>
                                <img src="${stage}"alt="${altDescription}">
                            </div>
                            <div class="user-message">
                                <p>${formObj.message}</p>
                            </div>`

    //displays the message at the location the user clicked, using percentages instead of pixels so the display is more dynamic
    messageDiv.style.position = "absolute";
    messageDiv.style.left = formObj.location.x + "%";
    messageDiv.style.top = formObj.location.y + "%";
    document.body.appendChild(messageDiv);
}


//calls findClickLocation when user clicks in clickable-area container
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
        setContent();
        hideForm(event);
    }
});



