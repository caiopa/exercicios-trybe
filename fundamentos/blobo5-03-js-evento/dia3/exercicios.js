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

// Escreva seu código abaixo.
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


function criandoBotao(nameButton){
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.id = 'btn-holiday'

  newButton.innerHTML = nameButton

  buttonContainer.appendChild(newButton)
}

criandoBotao('Feriados')