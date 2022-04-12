 console.log('funciona navbar');

 const burgerButton=document.querySelector('.burger-button');

 const mainNavbar=document.querySelector('.main-navbar');
 const mainSearchBar=document.querySelector('.main-search-bar');

 const mobileNavbar=document.querySelector('.mobile-navbar');


 const burgerNavBarContainer=document.querySelector('.burger-button-container');


// window.addEventListener('change',()=>{

//    if(window.innerWidth<520) {
   
//       mainNavbar.style.display="none";
//       mainSearchBar.style.display="none";
   
   
//    }else{
//       mainNavbar.removeAttribute( 'style')
//       mainSearchBar.removeAttribute( 'style')
//       mobileNavbar.style.display="none";  
//    }

// })

 burgerNavBarContainer.classList.add('burger-button-container-off');

 burgerButton.addEventListener('click',()=>{

   burgerNavBarContainer.removeAttribute('display');

    burgerNavBarContainer.classList.toggle('burger-button-container-off')
   
 })
 
//  burgerButton.addEventListener('change',()=>{
    
//     if(! burgerNavBarContainer.classList=='burger-button-container-off'){
      
//           burgerNavBarContainer.classList.add('burger-button-container-off')


//    }
   
//  })