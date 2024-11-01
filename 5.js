function inverterString(input) {
    let resultado = ""

    for (let i = 0; i < input.length; i++) {
        resultado += input[input.length - 1 - i]
    }

    return resultado
}

console.log(inverterString("Hello World!")) // mudar para a string que deseja inverter