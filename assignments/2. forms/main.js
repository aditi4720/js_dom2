function validateForm() {
    var name = document.forms["regn"]["name"];
    var email = document.forms["regn"]["email"];
    var password = document.forms["regn"]["pass"];

    if(name.value == "") {
        window.alert("Name must be filled out");
        name.focus();
        return false;
    }
    if(email.value == "") {
        window.alert("Email must be filled out");
        email.focus();
        return false;
    }
    if(password.value == "") {
        window.alert("Password must be filled out");
        password.focus();
        return false;
    }
}