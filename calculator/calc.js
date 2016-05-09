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
    if (lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*") {
        field.value = fieldValue.slice(0, fieldValue.length - 1);
    }
    if (fieldLength == -1) {
        field.value = 0;
    } else {
        field.value = eval(field.value);
    }
}

