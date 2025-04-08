const PEOPLE_LIST = [
  {
    name: "Иван",
    specialist: "Врач"
  },
  {
    name: "Владимир",
    specialist: "Преподаватель"
  },
  {
    name: "Виталий",
    specialist: "Студент"
  }
];

// class Foo {
//   f = 3;
//   constructor() {
//     this.h = 8;
//   }

//   m() {}
// }

// class Bar extends Foo {
//   m() {
//     super.m();
//   }
// }

const specialistColor = {
  'Врач': 'green',
  'Преподаватель': 'black',
  'Студент': 'grey'
}

class card {
  constructor(name, specialist) {
    this.name = name;
    this.specialist = specialist;
  }

  createCard (color) {
    let card = document.createElement('div');
    card.innerHTML = (`Карточка ${this.specialist}: ${this.name}`);
    card.style.border = '1px solid black'
    card.style.color = 'white'
    card.style.marginBottom = '5px'
    card.style.height = '50px'
    // card.style.textAlign = 'center'
    card.style.padding = '10px'
    card.style.backgroundColor = color[this.specialist]
    return card;
  }
}


// PEOPLE_LIST - for => p1 = new Foo() <= name: "Иван", specialist: "Врач"
// const body = document.querySelector('body');

for(let i = 0; i < PEOPLE_LIST.length; i++){
  let person = new card(PEOPLE_LIST[i].name, PEOPLE_LIST[i].specialist);
  person = person.createCard(specialistColor);
  document.body.appendChild(person);
}