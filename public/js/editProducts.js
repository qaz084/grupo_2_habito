//validaciones del front para el edit Product

console.log('Funciona script');

//SELECTORES

let editProductForm= document.querySelector('#form-edit-product');


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
    const field =productName;
    const spanMsgError=field.nextElementSibling;
   
    if(field.value.trim().length <4 ){

        field.classList.add('input-data-wrong');
        spanMsgError.innerHTML='El nombre debe contener al menos 4 caracteres';
        errorCount++;
       

    }else{
       
        field.classList.remove('input-data-wrong');
        spanMsgError.innerText='';
        if(errorCount>0){
            errorCount--;
         
        }
    }

}

const priceTypeValidator=(e)=>{
    const field =productPrice;
    const price = field.value;
    const spanMsgError=field.nextElementSibling;
   
    if((isNaN(price))||(isNaN(price.trim().length <2)) ){

        field.classList.add('input-data-wrong');
        spanMsgError.innerText='Debes ingresar sólo números';
        errorSpanTag.classList.add('signo-precio-wrong');
        errorCount++;

    }else if( (field.value.trim().length <2) ) {
       
        field.classList.add('input-data-wrong');
        spanMsgError.innerText='El precio debe contener al menos 2 dígitos';
        errorSpanTag.classList.add('signo-precio-wrong');
        errorCount++;
    
   }
    

}
const priceValidator=(e)=>{
    const field =productPrice;
    const spanMsgError=field.nextElementSibling;
    const price = field.value;
    if(field.value.trim().length <2 ){

        field.classList.add('input-data-wrong');
        spanMsgError.innerText='El precio debe contener al menos 2 dígitos';
        errorSpanTag.classList.add('signo-precio-wrong');
        errorCount++;

    }else if(isNaN(price)){

        field.classList.add('input-data-wrong');
        spanMsgError.innerText='Debes ingresar sólo números';
        errorSpanTag.classList.add('signo-precio-wrong');
        errorCount++;
    
    }else{

        field.classList.remove('input-data-wrong');
        spanMsgError.innerText='';
        errorSpanTag.classList.remove('signo-precio-wrong');
        if(errorCount>0){
            errorCount--;
           
        }
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
            errorSpanTag.classList.add('signo-precio-wrong');
            // productColor.style.border ='red 1px solid';

           errorCount= errorCount +1;
            console.log(errorCount);

        }else{
        
            // productColor.classList.remove('input-data-wrong');
            errorColor.innerText='';
            errorSpanTag.classList.remove('signo-precio-wrong');
            productColor.style.border ='none';
          
        }

}

const categoryValidator=(e)=>{
    const field =productCategory;
    const spanMsgError=field.nextElementSibling;
    console.log(field.value);
    if(field.value== ''){

        field.classList.add('input-data-wrong');
        spanMsgError.innerText='Debes seleccionar al menos 1 categoría';
        errorSpanTag.classList.add('signo-precio-wrong');
        field.style.border ='red 1px solid';
        errorCount++;
        console.log('atroden');
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


//EVENTO COLOR DEL PRODUCTO 


//EVENTO CATEGORY DEL PRODUCTO 

//productCategory.addEventListener('change',categoryValidator);



//EVENTO FORM

editProductForm.addEventListener('submit',(e)=>{
   
//  errorCount=0;
    
    nameValidator();
    priceValidator();
     priceTypeValidator();
  descriptionValidator();
    sizeValidator();
    colorValidator();
   //categoryValidator();
    // e.preventDefault();

    if(errorCount>0){
        e.preventDefault();
     
    
    }
    

});
