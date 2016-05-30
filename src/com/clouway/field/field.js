/**
 * Created by clouway on 30.05.16.
 */
function validateField() {
    var x = document.getElementById("field").value;
    var message;
    if (x == null || x == "") {
        message = "Error! Field is empty!!!";
    }
    else {
        message = "";
    }
    document.getElementById("demo").innerHTML = message;
}