console.log('FUNCA CART');
 //localStorage.clear();

 let productsArray=[];

let article= document.querySelectorAll('.add-To-Cart-Container');
let articleDetail= document.querySelector('.add-To-Cart-Container');

let cartText= document.querySelector('.cartText');
// const cartTextContainer= document.querySelector('.cartTextContainer');
let cartTextContainer= document.querySelectorAll('.cartTextContainer');

let carrito;
console.log('carrito',localStorage.carrito);
console.log('ARRAY',productsArray);

if(localStorage.carrito>0){

    console.log('con carrito');
    console.log(localStorage.productos);
    productsArray= JSON.parse(localStorage.getItem('productos')) ;
    cartText= document.querySelector('.cartText');
    cartTextContainer= document.querySelector('.cartTextContainer');
    
    
    console.log('ARRAY DENTRO',productsArray);
    cartTextContainer.forEach(element=>{

        element.style.display = "block";
      })
    //   cartTextContainer.style.display='block';
    // cartText.style.display='block';
    carrito= localStorage.getItem('carrito');
    cartText.innerHTML = `Carrito (${carrito})`;

}else{
    console.log('sin carrito');
    // cartText.style.display='none';
    cartTextContainer.forEach(element=>{

        element.style.display = "none";
      })
    // cartTextContainer.style.display='none';
    carrito=0;
    localStorage.setItem('carrito',carrito)
    var carTextNumber = localStorage.getItem('carrito');
}

// JSON.stringify(carrito);

// carTextNumber = localStorage.getItem('carrito');
// cartText.innerHTML = `Carrito (${carTextNumber})`;


//39


article.forEach((element) => {
  element.addEventListener("click", addToCartClicked);
  console.log('CLIQUEADO');
});

articleDetail.forEach((element) => {
     
 element.addEventListener('click',addToCartClicked)
            
    })
    
    
 function addToCartClicked(e){
    console.log('cliqueado')
    const productClicked= e.target;
    cartTextContainer.forEach((element) => {
     
        element.style.display='block';
                   
           })
    
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

