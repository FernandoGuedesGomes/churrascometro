// Carne - 400gr por pessoa + de 6 horas - 650gr
// Cerveja - 1200ml por pessoa + 6 horas - 1500ml
// Refrigerante/Suco/Agua - 1000ml por pessoa + 6 horas - 1500ml
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);

    let qdTotalCarne = carne * adultos + (carne / 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalBebidas = bebidas * adultos + (bebidas / 2 * criancas);

    resultado.innerHTML = `<p>${qdTotalCarne / 1000}kg de Carne.</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja / 1000}Lt de cervejas.</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas / 1000}Lt de bebidas.</p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000;
    }
}
