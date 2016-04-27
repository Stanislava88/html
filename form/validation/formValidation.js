/**
 * @author KrasimirRaikov(raikov.krasimir@gmail.com)
 */
var formValid=false;
function validateForm() {
    var firstNameValid = validateField('firstName', /^([a-z]{1,15})$/i);
    var lastNameValid = validateField('lastName', /^([a-z]{1,15})$/i);
    var egnValid = validateField('egn', /^([0-9]{10})$/);
    var ageValid = validateField('age', /^([1-9][8-9]|[2-9][0-9]|[1][0-1][0-8])$/);
    var addressValid = validateField('address', /^(([a-z]|\s|[0-9]){1,100})$/i);
    var passwordValid = validateField('password', /^(([a-z]|[0-9]){6,18})$/i);
    var passwordMatch = matchPassword('password', 'confirmPassword');
    var passwordConfirmValid = validateField('confirmPassword', /^(([a-z]|[0-9]){6,18})$/i);
    
    formValid = firstNameValid && lastNameValid && egnValid && ageValid &&
        addressValid && passwordValid && passwordMatch && passwordConfirmValid;
    return formValid;
}

function validateField(fieldName, regex) {
    var fieldValue = document.getElementById(fieldName).value;
    var fieldGroup = document.getElementById(fieldName + "Group");
    var fieldHelp = document.getElementById(fieldName + "Help");
    if (regex.test(fieldValue)) {
        fieldGroup.setAttribute("class", "form-group has-feedback has-success");
        fieldHelp.setAttribute("style", "display: none;");
        return true;
    } else {
        fieldGroup.setAttribute("class", "form-group has-feedback has-error");
        fieldHelp.setAttribute("style", "display: inline;");
        return false;
    }
}

function matchPassword(passFieldName, confPassFieldName) {
    var passValue = document.getElementById(passFieldName).value;
    var confPassValue = document.getElementById(confPassFieldName).value;
    var confPassHelp = document.getElementById(confPassFieldName + "Help");
    var confPassGroup = document.getElementById(confPassFieldName + "Group");
    if (passValue == confPassValue) {
        confPassGroup.setAttribute("class", "form-group has-feedback has-success");
        confPassHelp.setAttribute("style", "display: none;");
        return true;
    } else {
        confPassGroup.setAttribute("class", "form-group has-feedback has-error");
        confPassHelp.setAttribute("style", "display: inline;");
        return false;
    }
}