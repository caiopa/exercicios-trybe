/* 1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; */
const elementoBody = document.querySelector("body")

const criandoTitulo = document.createElement("h1")
criandoTitulo.innerText = "Exercicio 5.2 - JS DOM"

elementoBody.appendChild(criandoTitulo)


/*2 Adicione a tag main com a classe main-content como filho da tag body ; */

const tagMainMainContent = document.createElement('main')
tagMainMainContent.classList = "main-content"

elementoBody.appendChild(tagMainMainContent)

/*3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; */
const elementoMain = document.querySelector('.main-content')

const criandoSection = document.createElement('section')
criandoSection.classList = "center-content"

elementoMain.appendChild(criandoSection)

/*4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;*/
const secCenterContent = document.querySelector('.center-content');

const criandoP = document.createElement('p')
criandoP.innerText = "Caio Pereira Antunes"

secCenterContent.appendChild(criandoP)

/*5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; */

let secLeftCont = document.createElement('section')
secLeftCont.classList = "left-content"


elementoMain.appendChild(secLeftCont)


/*6
Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;*/

const secFilhoMain = document.createElement('section')
secFilhoMain.classList = "right-content"

tagMainMainContent.appendChild(secFilhoMain)

/*7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
*/
//filho de left content
const leftCont = document.querySelector('.left-content');

const filhoSecRigthCon = document.createElement('img');
filhoSecRigthCon.src = 'https://picsum.photos/200';
filhoSecRigthCon.classList = "small-image";

leftCont.appendChild(filhoSecRigthCon)


/*8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;*/

let lista = [
    "1",
    "2",
    "3",
    "5",
    "6",
    "7",
    "8",
    "9",
]

let listaFilhoRigthCont = document.createElement('ul')
secFilhoMain.appendChild(listaFilhoRigthCont)

 
for (let num in lista) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = lista[num];
    listaFilhoRigthCont.appendChild(elementLi);
  }




/*9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2. */

for (let index = 1; index <= 3; index += 1) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'Show ' + index;
    tagMainMainContent.appendChild(elementH3);
  }


 // Segunda Parte

      // 1.Adicione a classe title na tag h1 criada;
      const title = document.querySelector('h1');
      title.className = 'title';

      // 2.Adicione a classe description nas 3 tags h3 criadas;
      const elementsH3 = document.getElementsByTagName('h3');
      for (let index = 0; index < 3; index += 1) {
        elementsH3[index].className = 'description';
      }

      // 3. Remova a `section` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
      const sectionLeftContent = document.getElementsByClassName('left-content')[0];
      tagMainMainContent.removeChild(sectionLeftContent);

      // 4. Centralize a `section` criado no passo 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` da `section`;
      const sectionRightContent = document.getElementsByClassName('right-content')[0];
      sectionRightContent.style.marginRight='auto';

      // 5. Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
      const sectionCenterContent = document.getElementsByClassName('center-content')[0];
      sectionCenterContent.parentNode.style.backgroundColor = 'green';

      // 6.Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
      ul.lastChild.remove();
      ul.lastChild.remove();