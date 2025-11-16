function add(a ,b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}   

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function operate(a, b, op) {
    switch(op) {
        case "+" : return add(a,b);
        case "-" : return subtract(a, b);
        case "x" : return multiply(a, b);
        case "/" : return divide(a, b);
        default : throw new Error("Invalid operator");
    }
}

let Buttons = {
    screen : document.querySelector(".screen"),

    neuf : document.querySelector("#nine"),
    eight : document.querySelector("#eight"),
    seven : document.querySelector("#seven"),
    six : document.querySelector("#six"),
    five : document.querySelector("#five"),
    four : document.querySelector("#four"),
    three : document.querySelector("#three"),
    two : document.querySelector("#two"),
    one : document.querySelector("#one"),
    zero : document.querySelector("#zero"),

    neg : document.querySelector("#neg"),

}

function display(Buttons) {
    let screen_text = Buttons.screen.innerHTML;
}