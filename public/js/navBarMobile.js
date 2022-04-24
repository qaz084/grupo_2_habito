 console.log('funciona navbar');

 const burgerButton=document.querySelector('.burger-button');

//  const longNavbar=document.querySelector('#longNavbar');
 const mainSearchBar=document.querySelector('.main-search-bar');

 const mobileNavbar=document.querySelector('.mobile-navbar');


 let burgerNavBarContainer=document.getElementById('mobile-navbar');



 

  // burgerNavBarContainer.classList.add('burger-button-container-off')
  burgerNavBarContainer.style.display='none';


 burgerButton.addEventListener('click',()=>{
   console.log('CLIC BURGER');
 
   if (burgerNavBarContainer.style.display === "none") {
    burgerNavBarContainer.style.display = "flex";
  } else {
    burgerNavBarContainer.style.display = "none";
  }
 
    // burgerNavBarContainer.removeAttribute('style');
    // burgerNavBarContainer.classList.toggle('burger-button-container-off');
  
  
 })
 
