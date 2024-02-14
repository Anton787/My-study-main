// function plus_one(){
//     if (n == 10 || n == 20 || n == 30){
//         alert("Вы достигли порога!")
//     };
//     if (n == 30) plus.setAttribute.disable("true");
//     n += 1;
//     p.innerText = n;
// }

// function clearn(){
//     n = 0;
//     p.innerText = "Не запущен";
//     plus.setAttribute.disable("false");
// }

// let n = 0;
// const plus = document.getElementById("plus");
// const clear = document.getElementById("clear");
// const p = document.querySelector("p");
// p.innerText = "Не запущен";

// plus.addEventListener("click", plus_one);
// clear.addEventListener("click", clearn);

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
let random_number = getRandomInRange(1, 100);
console.log(random_number);

guess.addEventListener("click", try_guess);
new_round.addEventListener("click", new_number);