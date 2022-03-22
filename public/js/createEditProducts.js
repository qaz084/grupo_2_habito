console.log("Hola mundo")
let inputsCheckbox = document.querySelectorAll(".colorContainer input")
let styleInputs = document.querySelectorAll(".red");

for (let i = 0; i<inputsCheckbox.length; i++){
    styleInputs[i].style.backgroundColor = "#" + inputsCheckbox[i].id
}

let colorSelected = ((e)=>{
    let input = e.target
    input.classList.toggle("colorSelectedd")
})
let blackException = ((e)=>{
    let input = e.target
    input.classList.toggle("blackException")
})

styleInputs.forEach((input)=>{
    if(input.style.backgroundColor == "rgb(20, 20, 20)"){
        input.addEventListener("click",blackException)
    }else{
        input.addEventListener("click",colorSelected)
    }
})


/* let sizes = document.querySelectorAll(".check-product-size")

let sizeSelected = ((e)=>{
    let input = e.target
    input.classList.toggle("sizeSelected")
})
sizes.forEach((oneSize)=>{
    oneSize.addEventListener("click",sizeSelected);
}) */