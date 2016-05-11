/**
 * @author KrasimirRaikov(raikov.krasimir@gmail.com)
 */


function digitPressed(symbol) {
    var field = document.getElementById("inputField");
    field.value += symbol.toString();
}

function operatorPressed(symbol) {
    calculate();
    var field = document.getElementById("inputField");
    field.value += symbol.toString();
}

function deleteNumberOfSymbols(numberOfSymbols) {
    var field = document.getElementById("inputField");
    var length = field.value.length;
    if (numberOfSymbols == 'all') {
        field.value = "0";
    } else if (numberOfSymbols == 'one') {
        field.value = field.value.slice(0, length - 1);
    }
}

function calculate() {
    var field = document.getElementById("inputField");
    var fieldValue = field.value;
    var fieldLength = fieldValue.length - 1;
    var lastChar = fieldValue.charAt(fieldLength);
    var firstCharZero = fieldValue.charAt(0) == '0';
    if (firstCharZero && fieldValue.charAt(1) != "/" && fieldValue.charAt(1) != "*" && fieldValue.charAt(1) != "+" && fieldValue.charAt(1) != "-") {
        while (fieldValue.charAt(0) == '0') {
            field.value = fieldValue.slice(1, fieldValue.length + 1);
            fieldValue = field.value;
        }
    }
    if (lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*") {
        field.value = fieldValue.slice(0, fieldValue.length - 1);
    }
    if (fieldLength == -1) {
        field.value = 0;
    } else {
        var fieldEval = eval(field.value);
        if (isFinite(fieldEval)) {
            field.value = isNaN(fieldEval) ? 0 : fieldEval;
        } else {
            field.value = 0;
        }
    }
}

