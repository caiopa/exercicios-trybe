
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
                
        /* 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) */
        
        function mudarP(){
            let textP = document.getElementsByTagName('p')[1].innerText = "Formado e trabalhando na area"
        }
        mudarP()

        /* 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)). */

        function mudarCor() {
            let squareYellow = document.getElementsByClassName('main-content')[0];
            squareYellow.style.background = "rgb(76,164,109)";
          }
          mudarCor();
        
        /* 3. Crie uma função que mude a cor do quadrado vermelho para branco.*/

        function corQuadro(){
            let corAtual = document.getElementsByClassName('center-content')[0]
            corAtual.style.background = "white"
            
        }
        corQuadro()

        /* 4. Crie uma função que corrija o texto da tag <h1>.*/

        function mudarText() {
            let textoAtual = document.getElementsByTagName('h1')[0]

            textoAtual.innerText = "novo Texto"
        }
        mudarText()




        /*5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.*/

        function maiusculo(){
            let textoAtual = document.getElementsByTagName('p');
            for(let i = 0; i < textoAtual.length; i+=1){
            textoAtual[i].innerText = textoAtual[i].innerText.toUpperCase()
        }
        return textoAtual
    }
        maiusculo()

        /*6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

        function todasTag(){
            const tagsP = document.getElementsByTagName('p')
            for(let i =0; i < tagsP.length; i+=1){
                console.log(tagsP[i].innerHTML)
            }

        }
       /* a tagsP esta me retornando um array de todos os p */
        todasTag()