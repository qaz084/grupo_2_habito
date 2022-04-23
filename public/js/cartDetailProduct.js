console.log('FUNCA CART');
 //localStorage.clear();

let productsArray=[];
console.log("🚀 ~ file: cartDetailProduct.js ~ line 5 ~ productsArray", productsArray)


const article= document.querySelector('#btn-buy');
// const article= document.querySelector('.add-To-Cart-Container');



const cartText= document.querySelector('.cartText');
const cartTextContainer= document.querySelector('.cartTextContainer');

let carrito;
console.log('carrito',localStorage.carrito);
console.log('ARRAY',productsArray);


if(localStorage.carrito>0){

    console.log('con carrito');
    
    productsArray= JSON.parse(localStorage.getItem('productos')) ;
   
    console.log('ARRAY DENTRO',productsArray);
    // cartText.style.display='block';
    cartTextContainer.style.display='block';
    carrito= localStorage.getItem('carrito');
    cartText.innerHTML = `Carrito (${carrito})`;

}else{
    productsArray=[];
    console.log('sin carrito');
    // cartText.style.display='none';
    cartTextContainer.style.display='none';
    carrito=0;
    localStorage.setItem('carrito',carrito)
    var carTextNumber = localStorage.getItem('carrito');
}


article.addEventListener("click", addToCartClicked);
console.log('ARTICULO',article);


// articleDetail.forEach((element) => {
//  element.addEventListener('click',addToCartClicked)
            
//     })
    
    
function addToCartClicked(e){
    console.log('cliqueado')
    const productClicked= e.target;
    console.log(productClicked);
    cartTextContainer.style.display='block';
    carrito++;
    localStorage.setItem('carrito',carrito)
    carrito= localStorage.getItem('carrito');
    cartText.innerHTML = `Carrito (${carrito})`;
    console.log(localStorage.length);


    const product=productClicked.closest('.menuContainer');
    const productImg=productClicked.closest('.menuContainer');

    const productTitle= product.querySelector('#id-product-name').textContent.trim();

    const productPrice= product.querySelector('#price').textContent.trim();

    const productImage= productImg.querySelector('.middle-img-container img').src.trim().slice(39,); 

    //GENERO UN OBJETO CON LAS PROPIEDADES QUE SON LOS ELEMENTOS SELECCIONADOS DEL DOM

    productAdded={

        title:productTitle,
        price:productPrice,
        image:productImage
    }

    productsArray.push( productAdded);

    console.log(productsArray);
    localStorage.setItem('productos', JSON.stringify(productsArray));
    console.log(localStorage.productos);
    

} 

