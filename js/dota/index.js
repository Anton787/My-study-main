function see(i) {
    const div_www = document.querySelector(".www")
    if (div_www != null){
        div_www.classList.remove("www")
    }
    discrip[i].classList.add("www")
}

const div = document.querySelectorAll(".place");
const discrip = document.querySelectorAll(".description")


for (let i = 0; i<div.length; i++){
    div[i].addEventListener("click", ()=>{see(i)})
};