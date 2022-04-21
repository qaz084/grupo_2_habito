console.log('FUNCA CART');
 //localStorage.clear();

 let productsArray=[];

const article= document.querySelectorAll('.add-To-Cart-Container');

const cartText= document.querySelector('.cartText');
const cartTextContainer= document.querySelector('.cartTextContainer');

let carrito;
console.log('carrito',localStorage.carrito);


if(localStorage.carrito>0){

    console.log('con carrito');
    // cartText.style.display='block';
    cartTextContainer.style.display='block';
    carrito= localStorage.getItem('carrito');
    cartText.innerHTML = `Carrito (${carrito})`;

}else{
    console.log('sin carrito');
    // cartText.style.display='none';
    cartTextContainer.style.display='none';
    carrito=0;
    localStorage.setItem('carrito',carrito)
    var carTextNumber = localStorage.getItem('carrito');
}

// JSON.stringify(carrito);

// carTextNumber = localStorage.getItem('carrito');
// cartText.innerHTML = `Carrito (${carTextNumber})`;


//39


 article.forEach((element) => {
     
     element.addEventListener('click',addToCartClicked)
            
    })
    
    
 function addToCartClicked(e){
    console.log('cliqueado')
    const productClicked= e.target;

    cartTextContainer.style.display='block';
    carrito++;
    localStorage.setItem('carrito',carrito)
    carrito= localStorage.getItem('carrito');
    cartText.innerHTML = `Carrito (${carrito})`;
    console.log(localStorage.length);
    
    //  cartText.innerHTML = `Carrito (${carTextNumber})`;

    // console.log(carTextNumber);
    // if(carTextNumber == 0){
    //     console.log('entro al if');
    //     cartText.style.display='none';
    //     cartTextContainer.style.display='none';
       
    
    //  }else{
    //     console.log('BLOCK');
    //     cartText.style.display='block';
    //     cartTextContainer.style.display='block';
    //  }
    

    // if(cartText.innerHTML==''){
    
    //     cartText.style.display='none';
    //     cartTextContainer.style.display='none';
    //     console.log('SE ESCONDIO');
    
    // }else{
    
    //     console.log('SE MUESTRA');
    //     cartText.removeAttribute('display');
    //     cartTextContainer.removeAttribute('display');
        
    // }

    const product=productClicked.closest('.product2');
   
   
    const productTitle= product.querySelector('.product-name').textContent.trim();

    const productPrice= product.querySelector('.product-price').textContent.trim();

    const productImage= product.querySelector('.img-container img').src.trim().slice(39,);



    productAdded={

        title:productTitle,
        price:productPrice,
        image:productImage
    }

    productsArray.push(productAdded);

// let stringProducAdded=[];

//     stringProducAdded= productsArray.forEach(product=>{

//          JSON.stringify(product);
      
        

//      })
    //  console.log(stringProducAdded);

    //  localStorage.setItem({'productos':`${product.title}`},stringProducAdded);
     localStorage.setItem('productos', JSON.stringify(productsArray));
     console.log(localStorage);
 

} 

