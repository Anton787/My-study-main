function see(i,x) {
    if (x[0] == 0){console.log(x)
        div_content.classList.add("to-left")
        discrip[i].classList.add("www")
        x[0] = 1
        console.log('выполнил 1yui ' + x + ' ' + i)
    }
    else{
        const div_www = document.querySelector(".www")
        if (div_www != null){
            div_www.classList.remove("www")
        }
        const div_ww = document.querySelector(".ww")
        if (div_ww != null){
            div_ww.classList.remove("ww")
        }
        discrip[i].classList.add("ww")
        console.log('выполнил 2')
    }
}

var x = [0]
const div_content = document.getElementById("1")
const div = document.querySelectorAll(".place");
const discrip = document.querySelectorAll(".description")


for (let i = 0; i<div.length; i++){
    div[i].addEventListener("click", ()=>{see(i,x)})
};