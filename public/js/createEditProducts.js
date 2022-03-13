console.log("Hola mundo")
let colorWhiteInput = document.querySelector(".white");
let colorRedInput = document.querySelector(".red");
let colorBlueInput = document.querySelector(".blue");
let colorGreenInput = document.querySelector(".green");
let colorYellowInput = document.querySelector(".yellow");

let colorSelected = ((e)=>{
    let input = e.target
    input.classList.toggle("colorSelected")
})

colorWhiteInput.addEventListener("click",colorSelected);
colorRedInput.addEventListener("click",colorSelected);
colorBlueInput.addEventListener("click",colorSelected);
colorGreenInput.addEventListener("click",colorSelected);
colorYellowInput.addEventListener("click",colorSelected);

let sizes = document.querySelectorAll(".check-product-size")

let sizeSelected = ((e)=>{
    let input = e.target
    input.classList.toggle("sizeSelected")
})
sizes.forEach((oneSize)=>{
    oneSize.addEventListener("click",sizeSelected);
})