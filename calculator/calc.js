/**
 * @author KrasimirRaikov(raikov.krasimir@gmail.com)
 */


function symbol(symbol) {
    var field = document.getElementById("calculatorField");
    field.value += symbol.toString();
}

function deleteSymbol(numberOfSymbols) {
    var field = document.getElementById("calculatorField");
    var length = field.value.length;
    if (numberOfSymbols == 0) {
        field.value = "";
    } else {
        field.value = field.value.slice(0, length - 1);
    }
}

function calculate() {
    var field = document.getElementById("calculatorField");
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