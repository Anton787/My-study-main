const xml = new XMLHttpRequest();
let random_number;

xml.open("GET", 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new');

xml.send();

xml.onload = function () {
  // const p = document.createElement("p")
  // p.innerHTML = xml.response;
  // document.querySelector("body").append(p);
  random_number = xml.response.slice(0, -1);
  console.log(xml.status, xml.response, random_number)
}

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
let remained = 10;
const p = document.querySelector("p");
p.innerText = "Осталось " + remained + " попыток";
const input = document.getElementById("number");
const guess = document.getElementById("guess");
const new_round = document.getElementById("new");
console.log(random_number);

guess.addEventListener("click", try_guess);
new_round.addEventListener("click", new_number);