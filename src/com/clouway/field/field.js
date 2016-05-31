/**
 * Created by clouway on 30.05.16.
 */
function validate() {
    var field = document.getElementById("field").value;
    var error;
    if (field == null || field == "") {
        error = "Error! Field is empty!!!";
    }
    document.getElementById("demo").innerHTML = error;
}