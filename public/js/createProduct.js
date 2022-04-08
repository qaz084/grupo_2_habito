
let createProductForm = document.querySelector("#form");

let errorSpanTag= document.querySelector('.signo-precio');
let nameField = document.querySelector("[name=productName]");
let priceField = document.querySelector("[name=productPrice]");
let errorPrice = document.querySelector("#errorPrice");
let descriptionField = document.querySelector(".input-description");
let sizeField = document.querySelector("[name = size]");
let errorSize = document.querySelector("#errorSize");
let categoryField = document.querySelector("[name = category]");
let errorCategory = document.querySelector("#errorCategory");
let errorColor = document.querySelector("#errorColors")
let colors = document.querySelectorAll(".checkbox")




lengthValidation = (e) =>{
    let field = nameField;
    let errorMessage = field.nextElementSibling
    if(field.value.trim().length < 4){
        field.classList.add("input-data-wrong")
        errorMessage.classList.add("text-danger")
        fieldName = "El nombre debe contener al menos 4 caracteres"
        errorMessage.innerHTML = fieldName
    }else{
        field.classList.remove("input-data-wrong")
        errorMessage.classList.remove("text-danger")
        fieldName = ""
        errorMessage.innerHTML = fieldName
    }
};
lengthValidation2 = (e) =>{
    let field = nameField;
    let errorMessage = field.nextElementSibling
    if(field.value.trim().length < 4){
        field.classList.add("input-data-wrong")
        errorMessage.classList.add("text-danger")
        fieldName = "El nombre debe contener al menos 4 caracteres"
        errorMessage.innerHTML = fieldName
        error = error +1
    }else{
        field.classList.remove("input-data-wrong")
        errorMessage.classList.remove("text-danger")
        fieldName = ""
        errorMessage.innerHTML = fieldName
    }
};

priceValidation = (e) =>{
    let field = priceField;
    if(field.value.trim().length <2 || field.value.trim() == 0){
        field.classList.add("input-data-wrong")
        errorPrice.classList.add("text-danger")
        errorSpanTag.classList.add('signo-precio-wrong');
        fieldName = "El precio debe contener al menos 2 dígitos"
        errorPrice.innerHTML = fieldName
    }else{
        field.classList.remove("input-data-wrong");
        errorPrice.classList.remove("text-danger");
        errorSpanTag.classList.remove('signo-precio-wrong');
        fieldName = "";
        errorPrice.innerHTML = fieldName;
    }
};

priceValidation2 = (e) =>{
    let field = priceField;
    let price= field.value;
    if(field.value.trim().length <2 || field.value.trim() == 0){
        field.classList.add("input-data-wrong")
        errorPrice.classList.add("text-danger")
        fieldName = "El precio debe contener al menos 2 dígitos"
        errorSpanTag.classList.add('signo-precio-wrong');
        errorPrice.innerHTML = fieldName
        error = error +1
    }else if(isNaN(price)){

        field.classList.add('input-data-wrong');
        spanMsgError.innerText='Debes ingresar sólo números';
        errorSpanTag.classList.add('signo-precio-wrong');
        error = error +1;
    }
    else{
        field.classList.remove("input-data-wrong");
        errorPrice.classList.remove("text-danger");
        errorSpanTag.classList.remove('signo-precio-wrong');
        fieldName = "";
        errorPrice.innerHTML = fieldName;
    }
};

descriptionValidation = (e) =>{
    let field = descriptionField;
    let errorMessage = field.nextElementSibling
    let caractersNumber= 20;

    if(field.value.trim().length < caractersNumber){

        field.classList.add("input-data-wrong")
        errorMessage.classList.add("text-danger")
        fieldName = `La descripción debe contener al menos ${caractersNumber} caracteres`
        errorMessage.innerHTML = fieldName
        field.style.border ='red 1px solid';
    }else{
        field.classList.remove("input-data-wrong");
        errorMessage.classList.remove("text-danger");
        fieldName = "";
        errorMessage.innerHTML = fieldName;
        field.style.border ='none';
    }
};

descriptionValidation2 = (e) =>{
    let field = descriptionField;
    let errorMessage = field.nextElementSibling
    if(field.value.trim()== 0){
        field.classList.add("input-data-wrong");
        errorMessage.classList.add("text-danger");
        fieldName = "Este campo es obligatorio";
        errorMessage.innerHTML = fieldName;
        field.style.border ='red 1px solid';
        error = error +1;
    }else{
        field.classList.remove("input-data-wrong");
        errorMessage.classList.remove("text-danger");
        fieldName = "";
        errorMessage.innerHTML = fieldName;
        field.style.border ='none';
    }
};

sizeValidation=(e)=>{
    let field = sizeField;
    let errorMessage = field.nextElementSibling
    
    if(field.value ==""){
        field.classList.add("input-data-wrong");
        errorMessage.classList.add("text-danger");
        fieldName = "Debes seleccionar un talle";
        errorMessage.innerHTML = fieldName;
        field.style.border ='red 1.7px solid';
        error = error +1
    }else{
        field.classList.remove("input-data-wrong");
        errorMessage.classList.remove("text-danger");
        fieldName = "";
        field.style.border ='none';
        errorMessage.innerHTML = fieldName;
    }
}

categoryValidation=(e)=>{
    let field = categoryField;
    if(field.value == ""){
        field.classList.add("input-data-wrong")
        errorCategory.classList.add("text-danger")
        fieldName = "Debes seleccionar una categoria"
        errorCategory.innerHTML = fieldName;
        error = error +1;
        field.style.border ='red 1px solid';
    }else{
        field.classList.remove("input-data-wrong")
        errorCategory.classList.remove("text-danger")
        fieldName = ""
        errorCategory.innerHTML = fieldName
    }
    
}


colorsCheck =()=>{
    let colorsChecked=0
    colors.forEach(color =>{
    if(color.checked==true){
        colorsChecked = colorsChecked +1
    }
    })
    if(colorsChecked == 0){
        errorColor.classList.add("text-danger") 
        errorColor.innerHTML = "Debes seleccionar al menos un color"
        error = error +1
    }else{
        errorColor.classList.remove("text-danger")
        errorColor.innerHTML = ""
    }
}

nameField.addEventListener("blur",lengthValidation);
priceField.addEventListener("blur", priceValidation);
descriptionField.addEventListener("blur",descriptionValidation);
sizeField.addEventListener("blur",sizeValidation);
categoryField.addEventListener("blur",categoryValidation);


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

let img1 = document.querySelector("[name = image1]");
let previewimg1 = document.querySelector("#uploadPreview1")
let img2 = document.querySelector("[name = image2]");
let previewimg2 = document.querySelector("#uploadPreview2")
let img3 = document.querySelector("[name = image3]");
let previewimg3 = document.querySelector("#uploadPreview3")
let img4 = document.querySelector("[name = image4]");
let previewimg4 = document.querySelector("#uploadPreview4")
let spanWrongImage = document.querySelector("#wrongImage");

let imageValidation = (e)=>{
    let inputImage = e.currentTarget.files[0].type.split('/').pop();
    let allowedExtensions = ['jpg', 'png', 'jpeg']
    if(!(allowedExtensions.includes(inputImage))){
        spanWrongImage.innerHTML = "Solo imagenes en formato jpg png jpeg"
    }
};

img1.addEventListener("change",imageValidation);
img2.addEventListener("change",imageValidation);
img3.addEventListener("change",imageValidation);
img4.addEventListener("change",imageValidation);

img1.onchange=function(e){
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    console.log(e.target.files[0])
    reader.onload=function(){
    previewimg1.src=reader.result;
    
    }
}
img2.onchange=function(e){
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=function(){
    previewimg2.src=reader.result
    }
}
img3.onchange=function(e){
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=function(){
    previewimg3.src=reader.result
    }
}
img4.onchange=function(e){
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=function(){
    previewimg4.src=reader.result
    }
}
