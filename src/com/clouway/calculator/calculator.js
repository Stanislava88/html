/**
 * Created by Stanislava on 01.06.16.
 */

function addDigit(button) {
    var field = document.getElementById('display');

    if (isEmpty(field.value) && button == 0) {
        return;
    }
    field.value += button;
}

function addSign(button) {
    var sign = document.getElementById('display');
    var lastElement = sign.value.charAt(sign.value.length - 1);

    if (!isEmpty(sign.value) && isDigit(lastElement)) {
        sign.value += button;
    }
}

function calculate() {
    var result;
    var field = document.getElementById('display');
    var lastElement = field.value.charAt(field.value.length - 1);

    if (!isEmpty(field.value) && isDigit(lastElement)) {
        result = eval(field.value);

        if (!isFinite(result)) {
            field.value = "Can not divide by zero";
        } else {
            field.value = result;
        }
    } else {
        field.value = "Error";
    }
}

function clearAll() {
    var field = document.getElementById("display");

    field.value = "";
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
    var pattern = /[(/|*|+|\-)]/;

    if (!pattern.test(button)) {
        return true;
    } else {
        return false;
    }
}