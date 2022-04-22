
let createProductForm = document.querySelector("#form");

let contenedorPrecio= document.querySelector('.contenedor-precio');
let idcontenedorPrecio= document.querySelector('#price');
let namespanMsgError= document.querySelector('#namespanMsgError');
let inputCategory= document.querySelector('input-product-category');


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
let categoryContainer = document.querySelector(".categoryContainer select")
console.log(errorColor)

let error=0

lengthValidation = (e) =>{
    let field = contenedorPrecio;
    let errorMessage = document.querySelector('#name').nextElementSibling;
    if(nameField.value.trim().length < 4){
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
    let field = idcontenedorPrecio;
    let price= priceField.value;
    if(price.trim().length <2 || price.trim() == 0){
        field.classList.add("input-data-wrong")
        errorPrice.classList.add("text-danger")
        fieldName = "El precio debe contener al menos 2 dígitos"
        // errorSpanTag.classList.add('signo-precio-wrong');
        errorPrice.innerHTML = fieldName
        error = error +1
    }else if(isNaN(price)){

        field.classList.add('input-data-wrong');
        spanMsgError.innerText='Debes ingresar sólo números';
        // errorSpanTag.classList.add('signo-precio-wrong');
        error = error +1;
    }
    else{
        field.classList.remove("input-data-wrong");
        errorPrice.classList.remove("text-danger");
        // errorSpanTag.classList.remove('signo-precio-wrong');
        fieldName = "";
        errorPrice.innerHTML = fieldName;
    }
};



descriptionValidation = (e) =>{
    let field = descriptionField;
    console.log("🚀 ~ file: createProduct.js ~ line 75 ~ field", field)
    let errorMessage = field.nextElementSibling;
    
    if(field.value.trim().length<20){
        field.classList.add("input-data-wrong");
        errorMessage.classList.add("text-danger");
        fieldName = "Debe tener por lo menos 20 caracteres";
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
        field.style.borderBottom='none';
        field.style.outline='none';

        field.classList.add("input-data-wrong");
        errorMessage.classList.add("text-danger");
        fieldName = "Debes seleccionar un talle";
        errorMessage.innerHTML = fieldName;
        // field.style.border='5px green';
        field.style.backgroundColor='none';
        field.style.border ='red 1.7px solid';

        error = error +1
    }else{
        field.classList.remove("input-data-wrong");
        errorMessage.classList.remove("text-danger");
        fieldName = "";
        field.style.border ='none';
        errorMessage.innerHTML = fieldName;
        // field.style.borderBottom ='.5px solid #3D3D3D'; 
        field.style.backgroundColor='none';

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



createProductForm.addEventListener("submit",(e)=>{
    error=0
    lengthValidation();
    priceValidation();
    descriptionValidation();
    sizeValidation();
    categoryValidation();
    colorsCheck();
    if(error>0){
        e.preventDefault();
    }
});

let img1 = document.querySelector("[name = image1]");
let img2 = document.querySelector("[name = image2]");
let img3 = document.querySelector("[name = image3]");
let img4 = document.querySelector("[name = image4]");

let multiplicador = 1;

let imageValidation = (e)=>{
    let inputImage = e.currentTarget.files[0].type.split('/').pop();
    let allowedExtensions = ['jpg', 'png', 'jpeg',"PNG","JPG","JPEG"];
    if(!allowedExtensions.includes(inputImage)){
        document.getElementById(e.target.name + "Error").innerHTML = "Solo imagenes en formato jpg png jpeg ";
    }else{
        document.getElementById(e.target.name + "Error").innerHTML = "";
    };
};

img1.addEventListener("change",imageValidation);
img2.addEventListener("change",imageValidation);
img3.addEventListener("change",imageValidation);
img4.addEventListener("change",imageValidation);

let preview=(e)=>{
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    
    reader.onload=function(){
        document.getElementById(e.target.name).src=reader.result;
    };
};

img1.addEventListener("change",preview);
img2.addEventListener("change",preview);
img3.addEventListener("change",preview);
img4.addEventListener("change",preview);
