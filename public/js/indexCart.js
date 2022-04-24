


 //localStorage.clear();

const cartText= document.querySelectorAll('.cartText');

const logOutText= document.querySelector('.logOutText');
var cartTextContainer= document.querySelectorAll('.cartTextContainer');

if(logOutText){
   logOutText.addEventListener('click', () => localStorage.clear());
}



carrito= localStorage.getItem('carrito');


cartText.forEach(element=>{

  element.innerHTML = `Carrito (${carrito})`;
})


if (localStorage.carrito > 0) {
   
  console.log("TRAE CARRITO");
  // cartText.style.display='block';
  // cartTextContainer.style.display = "block";

  cartTextContainer.forEach(element=>{

    element.style.display = "block";
  })

} else {
  console.log("entro al if");
  // cartText.style.display='none';
 
  cartTextContainer.forEach(element=>{

    element.style.display = "none";
  })


  cartText.forEach(element=>{

    element.style.display = "none";
  })

}

