function selectCurrency(id) {
    for (let i = 1; i <= 3; i++) {
        document.getElementById("btn-" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function isCanBeSubmitted() {
    let checkBox = document.getElementById("checkbox-1");
    let submitButton = document.getElementById("submit");
    submitButton.disabled = checkBox.checked !== true;
}

function sendData() {
    // send data to server
    userPasswordValidation();
}

function userPasswordValidation() {
    let user = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!user) {
        document.getElementById("email").src = "dcdcdcdcdc";
        alert("User must not be empty");
    }
    if (!password) {
        alert("Password must not be empty");
    }
}

//modal window

var modal = document.getElementById("myModal");
var btn = document.getElementById("enter");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}