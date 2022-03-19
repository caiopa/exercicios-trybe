function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo. 1
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function criarDiasDoMes() {
  const ulDays = document.querySelector('#days')

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let criandoLi = document.createElement('li');

    if ((day === 24) | (day === 31)) {
      criandoLi.className = 'day holiday';
      criandoLi.innerHTML = day;
      ulDays.appendChild(criandoLi);
    } else if (day === 4 | day === 11 | day === 18) {
      criandoLi.className = 'day friday';
      criandoLi.innerHTML = day;
      ulDays.appendChild(criandoLi);
    } else if (day === 25) {
      criandoLi.className = 'day holiday friday';
      criandoLi.innerHTML = day;
      ulDays.appendChild(criandoLi);
    } else {
      criandoLi.className = 'day';
      criandoLi.innerHTML = day;
      ulDays.appendChild(criandoLi);
    }
  };
};
criarDiasDoMes();

//2

function criandoBotao(nameButton){
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.id = 'btn-holiday'

  newButton.innerHTML = nameButton

  buttonContainer.appendChild(newButton)
}

criandoBotao('Feriados')

//3

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';


getHolidayButton.addEventListener('click', function() {
  for (let index = 0; index < getHolidays.length; index += 1) {
    if (getHolidays[index].style.backgroundColor === setNewColor) {
      getHolidays[index].style.backgroundColor = backgroundColor;
    } else {
      getHolidays[index].style.backgroundColor = setNewColor;
    }
  }
})
};
  
displayHolidays()

//4

function botaoSexta(nomeBotao){
  let buttonLocal = document.querySelector(".buttons-container");
  let novoBotao = document.createElement('button')
  novoBotao.id = "btn-friday"

  novoBotao.innerHTML = nomeBotao
  buttonLocal.appendChild(novoBotao)
}
botaoSexta('Sexta-feira')

//5 
function displayFriday(sextaArray){
  let buttonSexta = document.querySelector('#btn-friday');
  let pegarFridays = document.getElementsByClassName('friday');
  let novoEscrito = 'sextou'
  

  buttonSexta.addEventListener('click', function() {
    for(let i =0; i<pegarFridays.length; i+=1){
      if(pegarFridays[i].innerHTML !== novoEscrito){
        pegarFridays[i].innerHTML = novoEscrito
        
      }else {
        pegarFridays[i].innerHTML = sextaArray[i]
      }
    }
  })

}
let diasSexta = [ 4, 11, 18, 25 ];
displayFriday(diasSexta) 




function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};
function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver()
dayMouseOut();