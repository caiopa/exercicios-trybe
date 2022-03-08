
/* exercicio 1 java script */

/* let a = 10
let b = 1023

var soma = (a+b)
    console.log(soma)
var subtracao = (a-b) 
    console.log(subtracao)
var multiplicacao = (a*b)
    console.log(multiplicacao)
var divisao = (a/b)
    console.log(divisao)

var modulo = (b % a)   
    console.log(modulo) */


    /* exercicio 2 ----------- */
/* 
    var numero1 = 1
    var numero2 = 10

    if ( numero1 > numero2) {
        console.log(numero1)
    } else {
        console.log(numero2)
    }
 */
    /* exercicio 3 ------------- */

    /* const valor1 = 1
    const valor2 = 13
    const valor3 = 43

    if (valor1 > valor2 && valor1 > valor3) {
        console.log(valor1)
    } else if (valor2>valor1 && valor2 >valor3) {
        console.log (valor2)
    } else if (valor3>valor1 && valor3>valor2) {
        console.log(valor3)
    } else {
        console.log('erro')
    }
 */

    /* exercicio 4 ----------retona positeve -------- */


  /*   var valorX = 7;

    if (valorX > 0) {
        console.log("positivo")
    } else if (valorX === 0 ) {
        console.log('estamos no zero')
    } else {
        console.log('negativo')
    } */

    /* ex 05 -------------------definir 3 const com angulos internos ------------ */


    /* const angulo1 = 90;
    const angulo2 = 45;
    const angulo3 = 45;
    let soma = (angulo1 + angulo2 + angulo3);

    if (soma === 180) {
        console.log("true")
    } else if  (angulo1 < 0 || angulo2 < 0 || angulo3 < 0 ) {
        console.log("valor invalido (negativo)")
    } else {
        console.log("false")
    } */
   
    /* ex 06------Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz---------------------- */

   /*  let pecaDoXadrez = "Rainha";

    switch (pecaDoXadrez.toLowerCase()) {

        case "rei":
            console.log("Anda qualquer direçao, apenas 1 casa")
            break;
        case "rainha":
            console.log("Anda qualquer direçao e quantas casa quaiser")
            break;
        case "bispo":
            consle.log("Anda na diagonal quantas casa quiser")
            break;
        case "torre":
            console.log("anda em linha reta e para os lados quantas casa quiser")
            break;
        case "cavalo":
            console.log("anda em L - 3 casa + 1")
            break;
        case "peao":
            console.log("anda uma casa pra frente apenas")
            break;

        default:
            console.log('Erro, isso nao e um peça de xadrez')

    } */

    /* exercicio 7 escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.  */
/* 
    let nota = -1;

    if (nota > 100 || nota < 0) {
        console.log('error')
    }else if( nota >= 90) {
        console.log('Nota A')
    }else if(nota >= 80) {
        console.log('Nota B')
    }else if(nota >= 70) {
        console.log('Nota C')
    }else if(nota >= 60) {
        console.log('Nota D')
    }else if(nota >= 50) {
        console.log('Nota E')
    } else {
        console.log('Nota F')
    }
 */

    /* ex 08 -Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .-- */

/* var numero1 = 11;
var numero2 = 22;
var numero3 = 31;

let resultado = false;

    if(numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
        resultado = true 
    }
    console.log(resultado)
 */

    /* ex 09 ---Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .----DA para fazer igual ao de cima  porem o 0 vira  ===1----- */

/* const a = 1;
const b = 3;
const c = 5;

let isOdd = false;

    if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
        isOdd = true;
};
console.log(isOdd);  */

/* ex 10 */

/* const valorEntrada = 10;
const valorVenda = 20; */


/* if (valorEntrada >= 0 && valorVenda >= 0) {
    const valorProduto = valorEntrada*1.2
    const lucro = (valorVenda - valorProduto) * 1000
    console.log(lucro)

} else {
    console.log("error, valor invalido")
} */

        /* MANEIRA 2 de fazer o exercicio 10 */

/* if (valorEntrada < 0 || valorVenda < 0) {
    console.log("error, valor invalido")    

} else {
    const valorProduto = valorEntrada*1.2
    const lucro = (valorVenda - valorProduto) * 1000
    console.log(lucro)
} */

/* ex 11 -Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
-----  */

/* 
const salary = 3000;

let descontoINSS = 0;

let descontoIR = 0;

if(salary <= 1556.94) {
    descontoINSS = salary *0.08
    console.log(descontoINSS)

} else if(salary <= 2594.92){
    descontoINSS = salary * 0.09
    console.log(descontoINSS)

}else if (salary <= 5189.82){
    descontoINSS = salary * 0.11
    console.log(descontoINSS)

} else {
    console.log(570.88)
}

const salarioBase = (salary - descontoINSS)

if(salarioBase <= 1903.98) {
    descontoIR = salarioBase
    

} else if(salarioBase <= 2826.65){
    descontoIR = (salarioBase * 0.075) -142.80
    

}else if (salarioBase <= 3751.05){
    descontoIR = (salarioBase * 0.15) -354.80
   

} else if (salarioBase <= 4664.68){
    descontoIR = (salarioBase * 0.225) - 636.13
   
} else {
    descontoIR = (salarioBase * 0.275) - 869.36
    
}

console.log(salarioBase - descontoIR) */