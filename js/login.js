let attempt = 3;

let valid = true;
var users = JSON.parse(localStorage.getItem("users"));

function validate() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    if (email === '' || password === '') {
        alert("Please fill all fields...!!!!!!");
        return false;
    }
    for (let i = 0; i < users.length; i++) {
        if (email === users[i].email && password === users[i].pass) {
            valid = true;
            // alert("Login successfully");
            window.location = "dashboard.html";
            return false;
        } else {
            valid = false;
        }
    }
    if (valid === false) {
        attempt--;
        alert("wrong email or password - you have " + attempt + " remain attempts");
        if (attempt === 0) {
            document.getElementById("email").disabled = true;
            document.getElementById("pass").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
        return false;
    }
}