class Singltone {
  PAGES = {
    "home": 0,
    "about": 0,
  }

  constructor() {
    if(typeof Singltone.instance === 'object'){
      return Singltone.instance
    }

    Singleton.instance = this;
    return Singleton.instance;
  }

  getInfo() {
    return this.PAGES;
  }

  incSingltone(page) {
    this.PAGES[page] += 1;
  }
}

const pages = new Singleton();
Object.freeze(pages);

class Basket {
  info = {
    "count": 0,
    "product": {}
  }

  getInfo(){
    return this.info
  }

  addProduct(product){
    product.
  }
}

class AdvProduct {
  constructor(name, price, descript){
    this.card = `<div class="adv"><h3>${name}</h3> <p>${descript}</p> <span>${price}</span> <button id="add">Добавить торвар</button></div>`
  }
}

class BaseProduct{
  constructor(name, price, descript){
    this.card = `<div class="base"><h3>${name}</h3> <p>${descript}</p> <span>${price}</span></div>`
  }
}

const addButton = document.querySelectorAll('#add')

for(i=0; i < length.addButton; i++){
  addButton[i].addEventListener('click', () =>{

  })
}