
/* Acesse o elemento elementoOndeVoceEsta .
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
*/

/* const elementoOndeEstou = document.getElementById('elementoOndeVoceEsta')  */// elemento para acessar
/* console.log(elementoOndeEstou)

console.log(elementoOndeEstou.parentNode) //elemento pai

elementoOndeEstou.parentNode.style.background = "red"
elementoOndeEstou.parentNode.style.color = "yellow"


console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling) */  ///primeiro filho

/* elementoOndeEstou.previousElementSibling.innerText = "Nao sei o que por"


console.log(document.getElementById('primeiroFilho'))

console.log(document.getElementById('pai').firstElementChild)
 */
/*Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai . */
/* 
console.log(elementoOndeEstou.nextSibling)

console.log(elementoOndeEstou.nextSibling.nextSibling)


console.log(document.getElementById('pai'))

 */


/* Crie um irmão para elementoOndeVoceEsta .*/

const pai = document.getElementById('pai');
    const irmaoElementoOndeVoceEsta = document.createElement('section');

    irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';

    pai.appendChild(irmaoElementoOndeVoceEsta);

/*Crie um filho para elementoOndeVoceEsta .*/

const filho = document.querySelector('#elementoOndeVoceEsta')

    const filhoOndeEstou = document.createElement('section')

    filhoOndeEstou.id = "filhoOndeEstou";

    filho.appendChild(filhoOndeEstou)

   

  console.log(filhoOndeEstou)
  console.log(pai)

/*Crie um filho para primeiroFilhoDoFilho .*/

    const filhoDofilho = document.getElementById('primeiroFilhoDoFilho')

    const filhoDoPrimeiroFilho =document.createElement('section');

    filhoDoPrimeiroFilho.id = "filhoDofilhoDoFilho"

    filhoDofilho.appendChild(filhoDoPrimeiroFilho)


console.log(filhoDoPrimeiroFilho)
console.log(document.getElementsByTagName('section'))
/*A partir desse filho criado, acesse terceiroFilho .
 */

const terceiroFilho = filhoDoPrimeiroFilho.parentElement.parentElement.nextElementSibling;

console.log(terceiroFilho);