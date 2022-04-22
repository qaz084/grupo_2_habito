//validaciones del front para el edit Product

console.log('Funciona script');

//SELECTORES

let editProductForm= document.querySelector('#form-edit-product');
let contenedorPrecio= document.querySelector('.contenedor-precio');
let namespanMsgError= document.querySelector('#namespanMsgError');


let errorSpanTag= document.querySelector('.signo-precio');

const mainProductImage= document.querySelector('[name=image1]');


const productName= document.querySelector('[name=productName]');

const productPrice= document.querySelector('[name=productPrice]');

const productDiscount= document.querySelector('[name=productDiscount]');

const productDescription= document.querySelector('[name=productDescription]');

const productSize= document.querySelector('[name=size]');

let productColor = document.querySelectorAll(".checkbox");
// console.log(productColor);

let productCategory = document.querySelector('[name=category]');

let errorColor =document.querySelector('#colorMsgError');

let errorCount=0;

//FUNCIONES DE VALIDACION

const nameValidator=(e)=>{
    // const productName =productName;
    const field =contenedorPrecio;
     const spanMsgError=document.querySelector('#name').nextElementSibling;
   
    if(productName.value.trim().length <4 ){
        productName.style.border='none';
        field.style.border='none';
        field.classList.add('input-data-wrong');
        spanMsgError.innerText='El nombre debe contener al menos 4 caracteres';
        console.log(spanMsgError.innerHTML);
        errorCount++;
       

    }else{
       
        field.classList.remove('input-data-wrong');
        spanMsgError.innerText='';
        // field.style.borderBottom ='1px solid #3D3D3D';  
        field.style.borderBottom= '1px solid #3D3D3D';
        if(errorCount>0){
            errorCount--;
         
        }
    }

}

const priceTypeValidator=(e)=>{
    const field =contenedorPrecio;
    const price = productPrice.value;
    const spanMsgError=document.querySelector('#price').nextElementSibling;
   
    if((isNaN(price))||(isNaN(price.trim().length <2)) ){
        field.style.border='none';
        field.classList.add('input-data-wrong');
        spanMsgError.innerText='Debes ingresar sólo números';
        // errorSpanTag.classList.add('signo-precio-wrong');
        errorCount++;

    }else if( (price.value.trim().length <2) ) {
        field.style.border='none';
        field.classList.add('input-data-wrong');
        spanMsgError.innerText='El precio debe contener al menos 2 dígitos';
        // errorSpanTag.classList.add('signo-precio-wrong');
        errorCount++;
        // field.style.borderBottom ='1px solid #3D3D3D';  
    
   }
    

}
const priceValidator=(e)=>{
    const field =document.querySelector('#price');
    const spanMsgError=document.querySelector('#price').nextElementSibling;
    const price = productPrice.value;
    if(price.trim().length <2 ){
        field.style.border='none';
        field.classList.add('input-data-wrong');
        spanMsgError.innerText='El precio debe contener al menos 2 dígitos';
        // errorSpanTag.classList.add('signo-precio-wrong');
        errorCount++;
    console.log('entro');

    }else if(isNaN(price)){

        field.classList.add('input-data-wrong');
        spanMsgError.innerText='Debes ingresar sólo números';
        // errorSpanTag.classList.add('signo-precio-wrong');
        errorCount++;
    
    }else{

        field.classList.remove('input-data-wrong');
        spanMsgError.innerText='';
        // errorSpanTag.classList.remove('signo-precio-wrong');
        if(errorCount>0){
            errorCount--;
           
        }
        field.style.borderBottom ='1px solid #3D3D3D';  
    }

}



const descriptionValidator=(e)=>{
    const field =productDescription;
    const spanMsgError=field.nextElementSibling;
   
    if(field.value.trim().length <20){

        field.classList.add('input-data-wrong');
        spanMsgError.innerText='La descripción debe contener al menos 20 caracteres';
        errorSpanTag.classList.add('signo-precio-wrong');
        field.style.border ='red 1px solid';
        errorCount++;

    }else{
        field.classList.remove('input-data-wrong');
        spanMsgError.innerText='';
        errorSpanTag.classList.remove('signo-precio-wrong');
        field.style.border ='none';
        if(errorCount>0){
            errorCount--;
           
        }
    }

}
const sizeValidator=(e)=>{
    const field =productSize;
    const spanMsgError=field.nextElementSibling;

    if(field.value== ''){

        field.classList.add('input-data-wrong');
        spanMsgError.innerText='Debes seleccionar al menos 1 talle';
        errorSpanTag.classList.add('signo-precio-wrong');
        field.style.border ='red 1px solid';
        errorCount++;

    }else{
        field.classList.remove('input-data-wrong');
        spanMsgError.innerText='';
        errorSpanTag.classList.remove('signo-precio-wrong');
        field.style.border ='none';

        if(errorCount>0){
            errorCount--;
           
        }
    }

}


let colorsChecked=0;
const colorValidator= ()=>{
 
    
    productColor.forEach(color =>{
        if(color.checked==true){
            colorsChecked = colorsChecked +1;
        }
        })
        if(colorsChecked==0){
            
            // productColor[i].classList.add('input-data-wrong');
            errorColor.innerText='Debes seleccionar al menos 1 color';
            errorColor.classList.add('text-danger');
            // productColor.style.border ='red 1px solid';

           errorCount= errorCount +1;
      

        }else{
        
            // productColor.classList.remove('input-data-wrong');
            errorColor.innerText='';
            errorColor.classList.remove('text-danger');
            // productColor.style.border ='none';
          
        }

}

const categoryValidator=(e)=>{
    const field =productCategory;
    const spanMsgError=field.nextElementSibling;

    if(field.value== ''){

        field.classList.add('input-data-wrong');
        spanMsgError.innerText='Debes seleccionar al menos 1 categoría';
        errorSpanTag.classList.add('signo-precio-wrong');
        field.style.border ='red 1px solid';
        errorCount++;
     
    }else{
        field.classList.remove('input-data-wrong');
        spanMsgError.innerText='';
        errorSpanTag.classList.remove('signo-precio-wrong');
        field.style.border ='none';
        if(errorCount>0){
            errorCount--;
           
        }
    }

}


//EVENTO NOMBRE DEL PRODUCTO 

productName.addEventListener('blur',nameValidator);


//EVENTO PRECIO DEL PRODUCTO 

productPrice.addEventListener('input',priceTypeValidator);
productPrice.addEventListener('blur',priceValidator);

//EVENTO DESCRIPCION DEL PRODUCTO 

productDescription.addEventListener('blur',descriptionValidator);


//EVENTO SIZE DEL PRODUCTO 

productSize.addEventListener('blur',sizeValidator);
productSize.addEventListener('change',sizeValidator);


//EVENTO COLOR DEL PRODUCTO 


//EVENTO CATEGORY DEL PRODUCTO 

//productCategory.addEventListener('change',categoryValidator);



//EVENTO FORM

editProductForm.addEventListener('submit',(e)=>{
   
//  errorCount=0;
    // e.preventDefault();
    // console.log(errorCount);
    nameValidator();
    priceValidator();
     priceTypeValidator();
  descriptionValidator();
    sizeValidator();
    colorValidator();
  categoryValidator();
    // e.preventDefault();

    if(errorCount>0){
        e.preventDefault();
     
    
    }
    

});

//Evento que muestra preview imagen cuando se carga

let img1 = document.querySelector("[name = image1]");
let img2 = document.querySelector("[name = image2]");
let img3 = document.querySelector("[name = image3]");
let img4 = document.querySelector("[name = image4]");

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
        document.getElementById("a" + e.target.name).src=reader.result;
    };
};
img1.addEventListener("change",preview);
img2.addEventListener("change",preview);
img3.addEventListener("change",preview);
img4.addEventListener("change",preview);
