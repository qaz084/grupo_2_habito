console.log("hello worldxxxxx");
let inputsCheckbox = document.querySelectorAll(".colorContainer input")
let styleInputs = document.querySelectorAll(".red");


for (let i = 0; i<inputsCheckbox.length; i++){
    styleInputs[i].style.backgroundColor = inputsCheckbox[i].id
}