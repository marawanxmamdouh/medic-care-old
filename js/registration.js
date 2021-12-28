let users = [{email: "test@gmail.com", pass: "12345678"},
    {email: "test2@gmail.com", pass: "12345678"},
    {email: "test3@gmail.com", pass: "12345678"}];

if (localStorage.getItem("users") !== null) {
    users = JSON.parse(localStorage.getItem("users"));
}

function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let repass = document.getElementById("repass").value;
    if (email === '' || password === '' || repass === '') {
        alert("Please fill all fields...!!!!!!");
        return false;
    } else if ((password.length) < 8) {
        alert("Password should at least 8 character in length...!!!!!!");
        return false;
    } else if (!(password).match(repass)) {
        alert("Your passwords don't match. Try again?");
        return false;
    } else {
        let object = {email: email, pass: password};
        users.push(object);
        localStorage.setItem("users", JSON.stringify(users));
        window.location = "index.html";
        return false;
    }
}