


 //localStorage.clear();

const cartText= document.querySelector('.cartText');

const logOutText= document.querySelector('.logOutText');

if(logOutText){
   logOutText.addEventListener('click', () => localStorage.clear());
}



var cartTextContainer= document.querySelector('.cartTextContainer');


carrito= localStorage.getItem('carrito');
cartText.innerHTML = `Carrito (${carrito})`;


if (localStorage.carrito > 0) {
   
  console.log("TRAE CARRITO");
  // cartText.style.display='block';
  cartTextContainer.style.display = "block";
} else {
  console.log("entro al if");
  // cartText.style.display='none';
  cartTextContainer.style.display = "none";
  cartText.style.display = "none";

}

