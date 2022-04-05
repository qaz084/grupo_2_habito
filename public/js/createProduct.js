
let createProductForm = document.querySelector("#form");

let nameField = document.querySelector(".input-product-name");
let priceField = document.querySelector(".input-product-price");
let errorPrice = document.querySelector("#errorPrice");
let descriptionField = document.querySelector(".input-description");
let sizeField = document.querySelector("[name = size]");
let errorSize = document.querySelector("#errorSize");
let categoryField = document.querySelector("[name = category]");
let errorCategory = document.querySelector("#errorCategory");
let errorColor = document.querySelector("#errorColors")
let colors = document.querySelectorAll(".checkbox")


colorsCheck =()=>{
    let colorsChecked=0
    colors.forEach(color =>{
    if(color.checked==true){
        colorsChecked = colorsChecked +1
    }
    })
    if(colorsChecked == 0){
        errorColor.classList.add("text-danger") 
        errorColor.innerHTML = "* Debe seleccionar al menos un color"
        error = error +1
    }else{
        errorColor.classList.remove("text-danger")
        errorColor.innerHTML = ""
    }
}

lengthValidation = (e) =>{
    let field = nameField;
    let errorMessage = field.nextElementSibling
    if(field.value.trim().length < 4){
        field.classList.add("input-data-wrong")
        errorMessage.classList.add("text-danger")
        fieldName = "* Como minimo 4 caracteres"
        errorMessage.innerHTML = fieldName
    }else{
        field.classList.remove("input-data-wrong")
        errorMessage.classList.remove("text-danger")
        fieldName = ""
        errorMessage.innerHTML = fieldName
    }
};

priceValidation = (e) =>{
    let field = priceField;
    if(field.value.trim().length == 0 || field.value.trim() == 0){
        field.classList.add("input-data-wrong")
        errorPrice.classList.add("text-danger")
        fieldName = "* Seleccionar un precio valido"
        errorPrice.innerHTML = fieldName
    }else{
        field.classList.remove("input-data-wrong")
        errorPrice.classList.remove("text-danger")
        fieldName = ""
        errorPrice.innerHTML = fieldName
    }
};

descriptionValidation = (e) =>{
    let field = descriptionField;
    let errorMessage = field.nextElementSibling
    if(field.value.trim().length < 4){
        field.classList.add("input-data-wrong")
        errorMessage.classList.add("text-danger")
        fieldName = "* Como minimo 4 caracteres"
        errorMessage.innerHTML = fieldName
    }else{
        field.classList.remove("input-data-wrong")
        errorMessage.classList.remove("text-danger")
        fieldName = ""
        errorMessage.innerHTML = fieldName
    }
};

sizeValidation=(e)=>{
    let field = sizeField;
    console.log(field.value)
    if(field.value ==""){
        field.classList.add("input-data-wrong")
        errorSize.classList.add("text-danger")
        fieldName = "* Debe seleccionar un talle"
        errorSize.innerHTML = fieldName
        error = error +1
    }else{
        field.classList.remove("input-data-wrong")
        errorSize.classList.remove("text-danger")
        fieldName = ""
        errorSize.innerHTML = fieldName
    }
}

categoryValidation=(e)=>{
    let field = categoryField;
    if(field.value == ""){
        field.classList.add("input-data-wrong")
        errorCategory.classList.add("text-danger")
        fieldName = "* Debe seleccionar una categoria"
        errorCategory.innerHTML = fieldName
        error = error +1
    }else{
        field.classList.remove("input-data-wrong")
        errorCategory.classList.remove("text-danger")
        fieldName = ""
        errorCategory.innerHTML = fieldName
    }
    
}

nameField.addEventListener("blur",lengthValidation);
priceField.addEventListener("blur", priceValidation);
descriptionField.addEventListener("blur",descriptionValidation);

lengthValidation2 = (e) =>{
    let field = nameField;
    let errorMessage = field.nextElementSibling
    if(field.value.trim().length < 4){
        field.classList.add("input-data-wrong")
        errorMessage.classList.add("text-danger")
        fieldName = "* Como minimo 4 caracteres"
        errorMessage.innerHTML = fieldName
        error = error +1
    }else{
        field.classList.remove("input-data-wrong")
        errorMessage.classList.remove("text-danger")
        fieldName = ""
        errorMessage.innerHTML = fieldName
    }
};

priceValidation2 = (e) =>{
    let field = priceField;
    if(field.value.trim().length == 0 || field.value.trim() == 0){
        field.classList.add("input-data-wrong")
        errorPrice.classList.add("text-danger")
        fieldName = "* Seleccionar un precio valido"
        errorPrice.innerHTML = fieldName
        error = error +1
    }else{
        field.classList.remove("input-data-wrong")
        errorPrice.classList.remove("text-danger")
        fieldName = ""
        errorPrice.innerHTML = fieldName
    }
};

descriptionValidation2 = (e) =>{
    let field = descriptionField;
    let errorMessage = field.nextElementSibling
    if(field.value.trim().length < 4){
        field.classList.add("input-data-wrong")
        errorMessage.classList.add("text-danger")
        fieldName = "* Como minimo 4 caracteres"
        errorMessage.innerHTML = fieldName
        error = error +1
    }else{
        field.classList.remove("input-data-wrong")
        errorMessage.classList.remove("text-danger")
        fieldName = ""
        errorMessage.innerHTML = fieldName
    }
};


let error=0
createProductForm.addEventListener("submit",(e)=>{
    error=0
    lengthValidation2();
    priceValidation2();
    descriptionValidation2();
    sizeValidation();
    categoryValidation();
    colorsCheck();
    if(error>0){
        e.preventDefault();
    }
})