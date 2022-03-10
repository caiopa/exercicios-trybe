/*  exercicio 1 04-03 Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. */
/* var fatorial = 5;
var resultado = fatorial;

        for (var i = 1; i < fatorial; i++) {
        resultado *= i;
    }
console.log(resultado); */

/*  Neste script temos: (referencia https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript)

 Na linha 2, igualando o resultado com o fatorial porque a var resultado será utilizada como objeto multiplicador na operação de cálculo;

 Na linha 3, estamos efetuando um laço de repetição que se inicia em 1 (representado pela instância da var i) que terá sua instrução (conteúdo entre chaves) repetida enquanto i for menor que fatorial;

 Na linha 3 ainda, especificamos que para cada ciclo do laço de repetição, incrementaremos a variável i em 1 através de i++;

 Na linha 4, fazemos através do operador de atribuição de multiplicação (*=) a multiplicação do valor da variável resultado pelo valor da variável i, e atribuímos o resultado da multiplicação à própria variável resultado;

 Na linha 6, temos a apresentação do resultado da operação (120) através do console.log.


 Para quem não se recorda do funcionamento do operador de atribuição de multiplicação, podemos transcrever a linha 4 para: */

/*  exercicio 02 4-03  Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
       ajuda do site https://dev.to/franciscochaves/inverter-palavra-com-javascript-5com*/

/* 
 let word = 'tryber';
 let inversa = '';
 
    for(let i = word.length-1; i >= 0; i -= 1){
        inversa += word[i]
        
    }
      console.log(inversa);

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

   */


/* exercicio 3 --- 04-03 Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra */

/* let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord); */

/* ex 4 -- 04-03 Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50 */

/*  
let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber); */

/*  bonus 1 - 04-03*/

/* 
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
}; */

/* bonus 2 */
/* let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
}; */