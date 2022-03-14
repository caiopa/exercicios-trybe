/* Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

/* function verificarPalavra(palavra) {
    if (palavra === palavra.split('').reverse().join('')){
        return true
    }else {
        return false
    }
} */
/* console.log(verificarPalavra('ovo')) */

/*  02 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.*/
/* function maiorValor(numeros){
    var indiceMaior = 0;
    for(index in numeros){
        if(numeros[indiceMaior] < numeros[index]) {
            indiceMaior = index
        }
    }
    return indiceMaior
}

console.log(maiorValor([2, 4, 6, 23, 22, 5, 2, 4, 21]));
 */ 

/* ex 3 Crie uma função que receba um array de inteiros e retorne o índice do menor valor.*/

/* function menorValor(numeros){
    var menorValor = 0;

    for (indice in numeros) {
        
        if( numeros[menorValor] > numeros[indice]){

            menorValor = indice
        }
    }
    return menorValor
}


console.log(menorValor([2, 1, -19, 6, 7,10, 22])) */


/*  4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
*/ 


/*
5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .



6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .





7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false */