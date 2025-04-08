hero_list = [
  {
    race: 'Фронтендер',
    name: 'Иван',
    hp: 25,
    mp: 100,
    skils: [
      {
        name: 'Латте',
        damadge: 10
      },
      {
        name: 'Раф',
        damadge: 15,
      },
      {
        name: 'Эспрессо',
        damadge: 50
      }
    ],
    type: 'hero'
  },
  {
    race: 'Бекендер',
    name: 'Сергей',
    hp: 150,
    type: 'enemy'
  },
  {
    race: 'Фулстак',
    name: 'Олег',
    hp: 200,
    type: 'NPC'
  }
];

ROOT = document.querySelector('#app')

class Hero {
  constructor(race, name, hp, mp, skils){
    this.card = `<div class="hero">Герой: ${race}-${name} \n HP: ${hp} \n MP:${mp}</div>`
  }
}

class Enemy {
  constructor(race, name, hp) {
    this.card = `<div class="enemy">Враг: ${race}-${name} \n HP: ${hp}</div>`
  }
}

class NPC {
  constructor(race, name, hp) {
    this.card = `<div class="NPC">Непись: ${race}-${name} \n HP: ${hp}</div>`
  }
}

class Fabric {
  constructor(){
    this.types = {
      hero: Hero,
      enemy: Enemy,
      NPC: NPC
    }
  }
  create(card){
    if (card.type == 'hero'){
      var cardElem = new this.types[card.type](card.race, card.name, card.hp, card.mp)
    } else {
      var cardElem = new this.types[card.type](card.race, card.name, card.hp)
    }
    return cardElem.card
  }
}

hero_list.forEach(element => {
  ROOT.innerHTML += new Fabric().create(element);
});