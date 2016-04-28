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
        field.value = field.value.slice(0, length-1);
    }
}

function calculate(){
    var field = document.getElementById("calculatorField");
    if(field.value.length==0){
        field.value=0;
    }else {
        field.value = eval(field.value);
    }
}