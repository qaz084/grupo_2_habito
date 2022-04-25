console.log('ENTRO AL MOBILE BAR');
 //localStorage.clear();

let cartText2= document.querySelectorAll('.cartText');
var cartTextContainer2= document.querySelectorAll('.cartTextContainer');
let logOutText= document.querySelector('.logOutText');

// if(logOutText){
//    logOutText.addEventListener('click', () => localStorage.clear());
// }

// let carrito;

// carrito= localStorage.getItem('carrito');


if(localStorage.carrito>0){

  console.log('CART con carrito');
  cartTextContainer2.forEach(element=>{

    element.style.display = "block";
  })
  cartText2.forEach(element=>{

    element.style.display = "block";
    cartText2.innerHTML = `Carrito (${carrito})`;
  })
 
  carrito= localStorage.getItem('carrito');
  cartText.innerHTML = `Carrito (${carrito})`; 
  
}



// if(localStorage.carrito>0){

//   console.log('con carrito');
 
//   carrito= localStorage.getItem('carrito');

//   cartTextContainer2.forEach(element=>{

//     element.style.display = "block";
//   })

//   cartText2.forEach(element=>{

//     element.style.display = "block";
//     cartText2.innerHTML = `Carrito (${carrito})`;
//   })
 
//   localStorage.setItem('carrito',carrito)

// }else{
//   console.log('sin carrito');
  
//   cartTextContainer2.forEach(element=>{

//     element.style.display = "none";
//   })


//   cartText2.forEach(element=>{

//     element.style.display = "none";
//   })
 
// }

