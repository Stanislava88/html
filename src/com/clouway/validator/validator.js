/**
 * @author Stanislava Kaukova(sisiivanovva@gmail.com)
 */

function validateMatching(fieldId, regex) {
    var value = document.getElementById(fieldId).value;
    notify(!regex.test(value), fieldId);
}

function inRange(fieldId, minValue, maxValue) {
    var value = document.getElementById(fieldId).value;
    notify(value < minValue || value > maxValue, fieldId);
}

function validateEquality(id1, id2) {
    notify(document.getElementById(id1).value != document.getElementById(id2).value, id1);
}

function notify(condition, fieldId) {
    if (condition) {
        return document.getElementById(fieldId + "Error").style.display = 'inline';
    } else {
        return document.getElementById(fieldId + "Error").style.display = 'none';
    }
}