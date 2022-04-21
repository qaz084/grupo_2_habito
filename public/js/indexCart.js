


localStorage.clear();

const cartText= document.querySelector('.cartText');
var cartTextContainer= document.querySelector('.cartTextContainer');


carrito= localStorage.getItem('carrito');
cartText.innerHTML = `Carrito (${carrito})`;


    if(localStorage.carrito>0){
     
       
        console.log('BLOCK');
        // cartText.style.display='block';
        cartTextContainer.style.display='block';
    
     }else{

        console.log('entro al if');
        // cartText.style.display='none';
        cartTextContainer.style.display='none';
     }
