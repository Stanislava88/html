/**
 * Created by Stanislava on 06.06.16.
 */
function isFraction(fieldId) {
    var fraction = document.getElementById(fieldId).value;

    var pattern = new RegExp("^\[0-9]{1,10}([,.][0-9]{1,5})$");
    if (!pattern.test(fraction)) {
        document.getElementById("message").className = "invalid";
    } else {
        document.getElementById("message").className = "valid";
    }
}