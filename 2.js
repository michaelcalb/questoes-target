function checarNumero(input) {
    for(let n1 = 0, n2 = 1, temp = n2; n1 <= input; temp = n2, n2 += n1, n1 = temp) {
        if (n1 == input) {
            return console.log(`O número ${input} pertence a sequência de Fibonacci!`)
        }
        
    }
    return console.log(`O número ${input} NÃO pertence a sequência de Fibonacci!`)
}

checarNumero(0) // mudar para o número que deseja testar se existe ou não dentro da sequência de fibonacci