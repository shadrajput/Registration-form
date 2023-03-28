function Validate() {

    // Name Validation
    if (document.getElementById("name").value == "") {
        alert("Please enter your name")
        return false;
    }

    // Password Validation
    if (document.getElementById("password").value == "") {
        alert("Please Enter your password ")
        return false;
    }
    if (document.getElementById("password").value.length < 8) {
        alert("password must be 8 to 15 character")
        return false;
    }
    if (document.getElementById("password").value.length > 15) {
        alert("password must be 8 to character")
        return false;
    }


    // Number Validation
    if (document.getElementById("number").value == "") {
        alert("Please enter your mobile number")
        return false;
    }
    if (document.getElementById("number").value.length < 10) {
        alert("Mobile number must be 10 digit")
        return false;
    }
    if (document.getElementById("number").value.length > 10) {
        alert("Mobile number must be 10 digit")
        return false;
    }

    // // Gender Validation
    if (document.getElementById("male").checked != true && document.getElementById("female").checked != true && document.getElementById("other").checked != true) {
        alert("Please Select Your Gender")
        return false;
    }

    // Language Validation
    if (document.getElementById("language").value == "") {
        alert("Please Select Your Language")
        return false;
    }

    // zip Validation
    if (document.getElementById("zip").value == "") {
        alert("Please Enter Your Zip Code")
        return false
    }
    if (document.getElementById("zip").value.length < 6) {
        alert("Zip code must be 6 digit")
        return false;
    }
    if (document.getElementById("zip").value.length > 6) {
        alert("Zip code must be 6 digit")
        return false;
    }


}
