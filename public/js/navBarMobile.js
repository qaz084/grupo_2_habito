 console.log('funciona navbar');

 const burgerButton=document.querySelector('.burger-button');

 const burgerNavBarContainer=document.querySelector('.burger-navBar-container-off');



 burgerButton.addEventListener('click',()=>{

    burgerNavBarContainer.classList.toggle('burger-navBar-container-on')
    console.log('click');
 })