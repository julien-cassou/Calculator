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
        case "÷" : return divide(a, b);
        case "%" : return a % b;
        default : throw new Error("Invalid operator");
    }
}

let Buttons = {
    screen : document.querySelector(".screen"),

    digitButtons : document.querySelectorAll('[data-type="digit"]'),
    opButtons : document.querySelectorAll('[data-type="operator"]'),

    neg : document.querySelector("#neg"),

}

let Etat = {
    operand : null,
    currValue : null,
    waitingForSecondOp : false,
}

function clearEtat() {
    Etat = {
        operand : null,
        currValue : null,
        waitingForSecondOp : false,
    }
}

function write(digit) {
    if(Buttons.screen.innerHTML.length >= 14) {
        return;
    }
    else {
        Buttons.screen.innerHTML += digit;
    }
}

function display(Buttons) {
    // Gestion d'événement des boutons digits
    Buttons.digitButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const digit = e.target.textContent;
            write(digit);
        });
    })

    // Gestion d'événement des boutons operators
    Buttons.opButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const op = e.target.textContent;

            if (btn.id == "sqrt") {
                const num = Math.sqrt(parseFloat(Buttons.screen.innerHTML));
                if (isNaN(num)) Buttons.screen.innerHTML = "****Erreur*****";   
                else Buttons.screen.innerHTML = num.toFixed(8);    
            } 
            else {
                try {

                    if(Etat.waitingForSecondOp == true) {
                        if(Buttons.screen.innerHTML.length >= 1) {
                            Etat.currValue = operate(Etat.currValue, parseFloat(Buttons.screen.innerHTML), Etat.operand);
                            Etat.operand = op;
                            Buttons.screen.innerHTML = "";
                        }
                    }
                    else {
                        if(Buttons.screen.innerHTML.length >= 1) {
                            Etat.currValue = parseFloat(Buttons.screen.innerHTML);
                            Etat.operand = op;
                            Etat.waitingForSecondOp = true;
                            Buttons.screen.innerHTML = "";
                        }
                    }
                }
                catch(e) {
                    if(e == "Division by zero is not allowed.") {
                        Buttons.screen.innerHTML = "****Erreur*****";
                    }
                }
            }
        });
    });

    // Gestion bouton équal
    const equal = document.querySelector("#equal");
    equal.addEventListener("click", () => {
        if(Etat.operand != null && Buttons.screen.innerHTML.length >=1) {
            console.log("on est là");
            Buttons.screen.innerHTML = operate(Etat.currValue, parseFloat(Buttons.screen.innerHTML), Etat.operand);
            clearEtat();
        }
    });

    // Gestion bouton AC
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", () => {
        clearEtat();
        Buttons.screen.innerHTML = "";
    });


}

display(Buttons);