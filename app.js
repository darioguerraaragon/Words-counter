const d = document

// 

const num_l = d.querySelector("#num-l")
const num_w = d.querySelector("#num-w")
let text = d.querySelector("#text")
let textarea = d.querySelector("#textarea")
// 

let word = 0
let letter = 0

d.addEventListener("keyup" , e =>{

    if(e.code === "Space" && document.activeElement.type === "textarea"){
        word += 1
        num_w.textContent = word
    }else if (e.code === "Backspace"){
        letter -= 1
        num_l.textContent = letter
    }else if (document.activeElement.type != "textarea"){
        word = 0
        letter = 0
    }
    else{
        letter += 1 
        num_l.textContent = letter
    }
})