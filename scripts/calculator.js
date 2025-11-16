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

    Buttons.neuf.addEventListener("click", () => {
        Buttons.screen.innerHTML += "9";
    })
    Buttons.eight.addEventListener("click", () => {
        Buttons.screen.innerHTML += "8";
    })
    Buttons.seven.addEventListener("click", () => {
        Buttons.screen.innerHTML += "7";
    })
    Buttons.six.addEventListener("click", () => {
        Buttons.screen.innerHTML += "6";
    })
    Buttons.five.addEventListener("click", () => {
        Buttons.screen.innerHTML += "5";
    })
    Buttons.four.addEventListener("click", () => {
        Buttons.screen.innerHTML += "4";
    })
    Buttons.three.addEventListener("click", () => {
        Buttons.screen.innerHTML += "3";
    })
    Buttons.two.addEventListener("click", () => {
        Buttons.screen.innerHTML += "2";
    })
    Buttons.one.addEventListener("click", () => {
        Buttons.screen.innerHTML += "1";
    })
    Buttons.zero.addEventListener("click", () => {
        Buttons.screen.innerHTML += "0";
    })  
}

display(Buttons);