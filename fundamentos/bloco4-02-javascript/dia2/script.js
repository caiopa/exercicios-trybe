/* exercicio 04-02 ---------parte  1 e 2 ------- */
/* 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    console.log('numbers') */

/* var soma = 0;

for( let i = 0; i < numbers.length; i++){
    soma += numbers[i]
    console.log(soma)
}
 */

/*  parte 3 ----media do array------ */

/* if(soma > 0) {
    media = soma/numbers.length
}
console.log(media) */

/*  parte 4 ---  */

/* if (media > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
} */
/* parte 5 --Utilizando for , descubra qual o maior valor contido no array e imprima-o;-- */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let maior = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maior) {
            maior = numbers[i];
        }
    }
    console.log(maior); */

/* parte6  quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/


/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i<numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        console.log(numbers[i])                             
    } else {
        console.log('Esse valor nao é impar')
    }
} */

/*  ex07 -Utilizando for , descubra qual o menor valor contido no array e imprima-o;--  */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for(let i = 0 ; i < numbers.length; i++) {
    if(numbers[i] < menorNumero) {
        menorNumero = numbers[i];
    }
}
console.log(menorNumero); */

/* parte 8 -----Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;-----  */

/* let numeros = []

    for(let i = 1; i <= 25; i++) {
        numeros.push(i)
    }
    console.log(numeros) */

/* parte 9 ---- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2  */

/*  for (let i = 0; i < numeros.length; i++) {
     console.log(numeros[i] /2);
 } */

/*  bonuss -------------------------- */

/*  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

     numbers.sort((a, b) => a - b)

     console.log(numbers) */

/* bonus 1 modo professor */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers); */

/* bonus 02 -Ordene o array numbers em ordem decrescente e imprima seus valores; */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

     numbers.sort((a, b) => b - a)

     console.log(numbers) */

     /* modo professo bonus 2 */
/* 
     let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    for (let index = 1; index < numbers.length; index += 1) {
        for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
            if (numbers[index] > numbers[secondIndex]) {
             let position = numbers[index];
             numbers[index] = numbers[secondIndex];
             numbers[secondIndex] = position;
    }
  }
}
console.log(numbers); */

/* bonus 3 ---Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .----- */


/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for(let i = 0; i < numbers.length; i += 1){
    if (i + 1 < numbers.length) {
        newArray.push(numbers[i] * numbers[i + 1]);
      } else {
        newArray.push(numbers[i] * 2);
      }
    }
    
    console.log(newArray); */