const fname = document.querySelector("#name")
const mobile = document.querySelector("#mobile")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const dob = document.querySelector("#DOB")
let passfalg = false

const fnameError = document.querySelector("#name-error")
const mobileError = document.querySelector("#mobile-error")
const emailError = document.querySelector("#email-error")
const passwordError = document.querySelector("#password-error")
const dobError = document.querySelector("#DOB-error")

const fnameErrorIcon = document.querySelector("#name-error-icon")
const mobileErrorIcon = document.querySelector("#mobile-error-icon")
const emailErrorIcon = document.querySelector("#email-error-icon")
const passwordErrorIcon = document.querySelector("#password-error-icon")
const dobErrorIcon = document.querySelector("#DOB-error-icon")


const validate = () => {
    valName()
    valEmail()
    valMobile()
    valDOB()
    valPassword()
}

const valName = () => {
    if (fname.value == "") {
        // fname.value = ""
        // console.log("name dal")
        fnameError.classList.add("show-error")
        fnameErrorIcon.classList.add("show-error")
    }
    else {
        fnameError.classList.remove("show-error")
        fnameErrorIcon.classList.remove("show-error")
    }
}

const valMobile = () => {
    if (mobile.value.length != 10) {
        // console.log("mobile dal")
        mobileErrorIcon.classList.add("show-error")
        mobileError.classList.add("show-error")
        // mobile.value = ""
    }
    else {
        // console.log("thik hai")
        mobileErrorIcon.classList.remove("show-error")
        mobileError.classList.remove("show-error")
    }
}

const valEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailError.classList.remove("show-error")
        emailErrorIcon.classList.remove("show-error")
    }
    else {
        emailError.classList.add("show-error")
        emailErrorIcon.classList.add("show-error")
    }
}

const valPassword = () => {
    if (password.value.length >= 8 && password.value.length <= 20) {
        for (i = 0; i < password.value.length; i++) {
            if (password.value.charCodeAt(i) >= 33 && password.value.charCodeAt(i) <= 122) {
                passfalg = true
            }
        }
    }

    if (passfalg === false) {
        passwordError.classList.add("show-error")
        passwordErrorIcon.classList.add("show-error")
    }
    else {
        passwordError.classList.remove("show-error")
        passwordErrorIcon.classList.remove("show-error")
    }
}

const valDOB = () => {
    var dategiven = new Date(dob.value);

    // if(dob.valDOB == null || dob.value == '') {  
    //     dobError.classList.add("show-error")
    //     dobErrorIcon.classList.add("show-error")   
    // } 
    // else {        
    var month_diff = Date.now() - dategiven.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    if (age >= 18) {
        dobError.classList.remove("show-error")
        dobErrorIcon.classList.remove("show-error")
    }
    else {
        dobError.classList.add("show-error")
        dobErrorIcon.classList.add("show-error")
    }
    // }   
}

const resetError = () => {
    dobError.classList.remove("show-error")
    dobErrorIcon.classList.remove("show-error")
    passwordError.classList.remove("show-error")
    passwordErrorIcon.classList.remove("show-error")
    emailError.classList.remove("show-error")
    emailErrorIcon.classList.remove("show-error")
    mobileErrorIcon.classList.remove("show-error")
    mobileError.classList.remove("show-error")
    fnameError.classList.remove("show-error")
    fnameErrorIcon.classList.remove("show-error")
}