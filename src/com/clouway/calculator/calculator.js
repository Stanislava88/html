/**
 * Created by Stanislava on 01.06.16.
 */
function addValue(button) {
    var field = document.getElementById('display');

    if (isEmpty(field.value)) {
        if (isDigit(button) && button != 0) {
            field.value += button;
        }
    } else {
        field.value += button;
    }
    if (button == 'clear') {
        field.value = '';
    }
}


function calculate() {
    var result;
    var field = document.getElementById('display');
    var lastElement = field.value.charAt(field.value.length - 1);

    if (!isEmpty(field.value) && isDigit(lastElement)) {
        result = eval(field.value);
        
        if (result == Infinity) {
            field.value = "Can not divide by zero";
        } else {
            field.value = result;
        }
    } else {
        field.value = "Error";
    }
}

function clearLast() {
    var field = document.getElementById("display");
    var number = field.value;
    var length = number.length - 1;

    field.value = number.substring(0, length);
}

function isEmpty(field) {
    if (field == '') {
        return true;
    } else {
        return false;
    }
}
function isDigit(button) {
    if (button != '/' && button != '*' && button != '+' && button != '-') {
        return true;
    } else {
        return false;
    }
}