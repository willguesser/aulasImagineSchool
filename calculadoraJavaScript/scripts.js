let formulario = document.getElementById("calculadora");
let campo1 = document.getElementById("campo1");
let campo2 = document.getElementById("campo2");
let calculo = formulario.elements["calculo"];
let botao = document.getElementById("botao");
let feedback = document.getElementById("resultado");

botao.onclick = function () {
    let num1 = Number(campo1.value);
    let num2 = Number(campo2.value);
    let tipo = calculo.value;
    let resultado = calcular(tipo, num1, num2);

    feedback.textContent = resultado;
}

function calcular(tipo, num1, num2) {
    if (tipo == "soma") {
        return num1 + num2;
    }

    if (tipo == "subtracao") {
        return num1 - num2;
    }

    if (tipo == "multiplicacao") {
        return num1 * num2;
    }

    if (tipo == "divisao") {
        return num1 / num2;
    }
}
