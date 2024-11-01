const dados =
[
    {
        "estado": "SP",
        "valor": 67836.43
    },
    {
        "estado": "RJ",
        "valor": 36678.66
    },
    {
        "estado": "MG",
        "valor": 29229.88
    },
    {
        "estado": "ES",
        "valor": 27165.48
    },
    {
        "estado": "Outros",
        "valor": 19849.53
    }
]

function calcularRepresentacaoPorEstado(dados) {
    let valorTotal = 0

    for (let i = 0; i < dados.length; i++) {
        valorTotal += dados[i].valor
    }

    for (let i = 0; i < dados.length; i++) {
        let estado = dados[i].estado
        let representacao = dados[i].valor * 100 / valorTotal
        console.log(`${estado} - ${representacao.toFixed(2)}%`)
    }
}

calcularRepresentacaoPorEstado(dados)