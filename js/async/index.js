const xml = new XMLHttpRequest();
const input = document.getElementById("number");
const guess = document.getElementById("guess");
const new_round = document.getElementById("new");
const p = document.querySelector("p");
const game = document.querySelector(".game.hide");
let random_number;
let remained = 10;

const getRandom = new Promise((resolve, reject) => {
  xml.open("GET", 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new');

  xml.send();
  // resolve onload
  xml.addEventListener('load', () => {
    if (xml.status === 200) {
      resolve(xml.response);
    } else {
      reject(xml.status);
    }
  });
});

getRandom.then((response) => {
  random_number = Number(response);
  game.classList.remove("hide");
  console.log(random_number);
}).catch((status) => {
  console.log(status);
});

function try_guess(){
  let number = input.value;
  if (number < random_number){
      input.value = "";
      input.placeholder = "Введите число больше";
      remained -= 1
      p.innerText = "Осталось " + remained + " попыток";
  } 
  else if (number > random_number) {
      input.value = "";
      input.placeholder = "Введите число меньше";
      remained -= 1
      p.innerText = "Осталось " + remained + " попыток";
  }
  else{
      alert("Вы победили \n" + "Начинайте новую игру!");
      input.value = "";
      input.placeholder = "Введите число";
      random_number = getRandomInRange(1,100);
      remained = 10
      p.innerText = "Осталось " + remained + " попыток";
  }
  if (remained == 0) {
      alert("Фу, лузер \nТы проиграл, ахахахахахах")
      input.innerText = "";
      input.placeholder = "Введите число";
      random_number = getRandomInRange(1,100);
      remained = 10
      p.innerText = "Осталось " + remained + " попыток";
  }
}

function new_number() {
  input.innerText = "";
  input.placeholder = "Введите число";
  random_number = getRandomInRange(1,100);
  remained = 10
  p.innerText = "Осталось " + remained + " попыток";
}

p.innerText = "Осталось " + remained + " попыток";

console.log(random_number);

guess.addEventListener("click", try_guess);
new_round.addEventListener("click", new_number);
