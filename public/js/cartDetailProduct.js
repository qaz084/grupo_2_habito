console.log('FUNCA CART');
 //localStorage.clear();



let article= document.querySelector('.btn-buy');
let cartText= document.querySelector('.cartText');
let cartTextContainer= document.querySelector('.cartTextContainer');

let productsArray;
let carrito;


if(localStorage.carrito>0){

    console.log('con carrito');
    productsArray= JSON.parse(localStorage.getItem('productos')) ;
   
    console.log('ARRAY DENTRO',productsArray);
    cartText.style.display='block';
    cartTextContainer.style.display='block';
    carrito= localStorage.getItem('carrito');
    cartText.innerHTML = `Carrito (${carrito})`;
    localStorage.setItem('carrito',carrito)

}else{
    console.log('sin carrito');
    productsArray=[];
    cartText.style.display='none';
    cartTextContainer.style.display='none';
    carrito=0;
    localStorage.setItem('carrito',carrito)
    // var carTextNumber = localStorage.getItem('carrito');
}


article.addEventListener("click", addToCartClicked);
console.log('ARTICULO',article);

    
function addToCartClicked(e){
    // e.preventDefault();
    console.log('cliqueado')
    cartTextContainer.style.display='block';
    cartText.style.display='block';
    let productClicked= e.target;
    carrito= localStorage.getItem('carrito');
    carrito++;
    localStorage.setItem('carrito',carrito)
    cartText.innerHTML = `Carrito (${carrito})`;
   


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
    localStorage.setItem('productos', JSON.stringify(productsArray));
    console.log('PRODUCTOS AGREGADOS',localStorage.productos);
   
} 

