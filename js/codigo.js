let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");


function add() {
    let suma = num1 + num2;
    sumEl.textContent = "Sum: " + suma;
}

function substract() {
    let resta = num1 - num2;
    sumEl.textContent = "Sum: " + resta;
}

function divide(){
    let division = num1 / num2;
    sumEl.textContent = "Sum: " + division;
}

function multiply(){
    let multiplicacion = num1 * num2;
    sumEl.textContent = "Sum: " + multiplicacion;
}