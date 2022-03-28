console.log('FUNCA');


let productsArray=[];



let btnAddCart = document.querySelector('.btn-addCart');

btnAddCart.addEventListener('click',()=>{
    
    console.log('CATCHED');
    productsArray.push(btnAddCart);
    console.log(btnAddCart.innerHTML);
    console.log('CATCHED');
    sessionStorage.setItem(btnAddCart,'test');
    console.log(sessionStorage);

})

// locals.productCart=productsArray;

