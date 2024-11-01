const dados = require("./dados.json")

function calcularMenorValorEmUmDia(dados) {
    let menorValor = Infinity

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].valor != 0 && dados[i].valor < menorValor) {
            menorValor = dados[i].valor
        }
    }

    return menorValor
}

function calcularMaiorValorEmUmDia(dados) {
    let maiorValor = -Infinity

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].valor > maiorValor) {
            maiorValor = dados[i].valor
        }
    }

    return maiorValor
}

function calcularFaturamentosMaioresQueMedia(dados) {
    let dias = 0
    let soma = 0
    let faturamentosMaioresQueMedia = 0

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].valor != 0) {
            soma += dados[i].valor
            dias++
        }
    }

    let media = soma / dias

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].valor > media) {
            faturamentosMaioresQueMedia++
        }
    }

    return faturamentosMaioresQueMedia
}

console.log(`MENOR faturamento em um dia do mês: R$${calcularMenorValorEmUmDia(dados)}`)
console.log(`MAIOR faturamento em um dia do mês: R$${calcularMaiorValorEmUmDia(dados)}`)
console.log(`Dias em que faturamento > média mensal: ${calcularFaturamentosMaioresQueMedia(dados)}`)