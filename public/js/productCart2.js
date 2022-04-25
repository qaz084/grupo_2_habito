console.log('FUNCA CART');
//localStorage.clear();


let article= document.querySelectorAll('.add-To-Cart-Container');
// let articleDetail= document.querySelector('#btn-buy');


let cartText= document.querySelector('.cartText');
let cartTextContainer= document.querySelector('.cartTextContainer');
// let cartTextContainer= document.querySelectorAll('.cartTextContainer');

// carrito= localStorage.getItem('carrito');


let productsArray;
let carrito;

if(localStorage.carrito>0){

    console.log('con carrito');
    productsArray= JSON.parse(localStorage.getItem('productos'));
    console.log('PRODUCTO ARRAY',productsArray);
    carrito= localStorage.getItem('carrito');
    cartTextContainer.style.display='block';
    cartText.style.display='block';
    cartText.innerHTML = `Carrito (${carrito})`;
    localStorage.setItem('carrito',carrito)

}else{
    console.log('sin carrito');
    productsArray=[];
    cartTextContainer.style.display='none';
    cartText.style.display='none';
    carrito=0;
    localStorage.setItem('carrito',carrito)
}



article.forEach((element) => {
  element.addEventListener("click", addToCartClicked);
  console.log('CLIQUEADO');
});

// if(articleDetail){
     
//     articleDetail.addEventListener('click',addToCartClicked)
//     console.log('CLIQUEADO');        
       
// }


    
function addToCartClicked(e){
    console.log('cliqueado')
    console.log('ENTRA  LOCALSTORAGEEE',localStorage);
    cartTextContainer.style.display='block';
    cartText.style.display='block';
    const productClicked= e.target;
    carrito= localStorage.getItem('carrito');
    carrito++;
    localStorage.setItem('carrito',carrito)
     
    console.log('cliqueado con carrito',carrito);
    cartText.innerHTML = `Carrito (${carrito})`;

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
    
   

     localStorage.setItem('productos', JSON.stringify(productsArray));
     console.log('PRODUCTOSS PRODUCTCART',localStorage.productos);


 
} 

