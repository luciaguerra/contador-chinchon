let puntajeUno = 0;
let puntajeDos = 0;

let resultadoUno = document.getElementById("puntaje-1");
let resultadoDos = document.getElementById("puntaje-2");

function add1Point_1() {
    puntajeUno += 1;
    resultadoUno.textContent = puntajeUno;
}

function add5Points_1() {
    puntajeUno += 5;
    resultadoUno.textContent = puntajeUno;
}

function add10Points_1() {
    puntajeUno += 10;
    resultadoUno.textContent = puntajeUno;
}

function subtract10Points_1() {
    puntajeUno -= 10;
    resultadoUno.textContent = puntajeUno;
}

function add1Point_2() {
    puntajeDos += 1;
    resultadoDos.textContent = puntajeDos;
}

function add5Points_2() {
    puntajeDos += 5;
    resultadoDos.textContent = puntajeDos;
}

function add10Points_2() {
    puntajeDos += 10;
    resultadoDos.textContent = puntajeDos;
}

function subtract10Points_2() {
    puntajeDos -= 10;
    resultadoDos.textContent = puntajeDos;
}