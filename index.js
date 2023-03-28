function Validate() {
    var isNameValid = true;
    var isEmailValid = true;
    var isPasswordValid = true;
    var isNumberValid = true;
    var isGenderValid = true;
    var isLanguageValid = true;
    var isZipValid = true;
    var isAboutValid = true;

    // Name Validation
    if (document.getElementById("name").value == "") {
        isNameValid = false;
        document.getElementById("namevalidation").innerHTML = "Please Enter Your Name"
        document.getElementById("namevalidation").style.color = "red"
    } else {
        if (isNameValid = true) {
            document.getElementById("namevalidation").style.display = "none"
        }

    }

    // Email Validation
    if (document.getElementById("email").value == "") {
        isEmailValid = false;
        document.getElementById("emailvalidation").innerHTML = "Please Enter Your Email"
        document.getElementById("emailvalidation").style.color = "red"
    } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("emailvalidation").value) == false) {
            isEmailValid = false;
            document.getElementById("emailvalidation").innerHTML = "Please Enter Valid Email"
            document.getElementById("emailvalidation").style.color = "red"
        } else {
            if (isEmailValid = true) {
                document.getElementById("emailvalidation").style.display = "none"
            }
        }
    }

    // Password Validation
    if (document.getElementById("password").value == "") {
        isPasswordValid = false;
        document.getElementById("passwordvalidation").innerHTML = "Please Enter Your Password"
        document.getElementById("passwordvalidation").style.color = "red"
    } else {
        if (isPasswordValid = true) {
            document.getElementById("passwordvalidation").style.display = "none"
        }
    }

    // Number Validation
    if (document.getElementById("number").value == "") {
        isNumberValid = false;
        document.getElementById("numbervalidation").innerHTML = "Please Enter Your Number"
        document.getElementById("numbervalidation").style.color = "red"
    } else {
        if (/^\d{10}$/.test(document.getElementById("numbervalidation").value) == false) {
            isNumberValid = false;
            document.getElementById("numbervalidation").innerHTML = "Please Enter Valid Number"
            document.getElementById("numbervalidation").style.color = "red"
        } else {
            if (isNumberValid = true) {
                document.getElementById("numbervalidation").style.display = "none"
            }
        }
    }

    // // Gender Validation
    if (document.getElementById("male").checked != true && document.getElementById("female").checked != true && document.getElementById("other").checked != true) {
        isGenderValid = false;
        document.getElementById("gendervalidation").innerHTML = "Please Select Your Gender"
        document.getElementById("gendervalidation").style.color = "red"
    } else {
        if (isGenderValid = true) {
            document.getElementById("gendervalidation").style.display = "none"
        }
    }

    // Language Validation
    if (document.getElementById("language").value == "") {
        isLanguageValid = false;
        document.getElementById("languagevalidation").innerHTML = "Please Select Your Language"
        document.getElementById("languagevalidation").style.color = "red"
    } else {
        if (isLanguageValid = true) {
            document.getElementById("languagevalidation").style.display = "none"
        }
    }

    // zip Validation
    if (document.getElementById("zip").value == "") {
        isZipValid = false;
        document.getElementById("zipvalidation").innerHTML = "Please Enter Your Zip Code"
        document.getElementById("zipvalidation").style.color = "red"
    } else {
        if (isZipValid = true){
            document.getElementById("zipvalidation").style.display = "none"
        }
    }

    // about Validation
    if (document.getElementById("about").value == "") {
        isAboutValid = false;
        document.getElementById("aboutvalidation").innerHTML = "Please Enter About Yourself"
        document.getElementById("aboutvalidation").style.color = "red"
    } else {
        if (isAboutValid = true){
            document.getElementById("aboutvalidation").style.display = "none"
        }
    }

    if (isNameValid == false || isEmailValid == false || isPasswordValid == false || isNumberValid == false || isGenderValid == false || isLanguageValid == false || isZipValid == false || isAboutValid == false) {
        return false
    } else {
        return true
    }

}
