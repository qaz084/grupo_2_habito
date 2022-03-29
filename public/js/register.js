const eyeIcon =document.querySelector('#password-icon');

const passwordContainer=document.querySelector('#password-container');

const eyeIconRepeat =document.querySelector('#password-repeat-icon');

const passwordRepeatContainer=document.querySelector('#password-repeat-container');


eyeIcon.addEventListener('click',()=>{

   
//    console.log(passwordContainer.type); 
   if(passwordContainer.type=='password'){
    console.log('funca'); 

       passwordContainer.type='text';
       console.log(passwordContainer); 
       eyeIcon.innerHTML='visibility_off';

    }else{
        passwordContainer.type='password';
        console.log(passwordContainer); 
        eyeIcon.innerHTML='visibility';
    }

})
eyeIconRepeat.addEventListener('click',()=>{

   
//    console.log(passwordContainer.type); 
   if(passwordRepeatContainer.type=='password'){
    console.log('funca'); 

       passwordRepeatContainer.type='text';
       console.log(passwordRepeatContainer); 
       eyeIconRepeat.innerHTML='visibility_off';

    }else{
        passwordRepeatContainer.type='password';
        console.log(passwordRepeatContainer); 
        eyeIconRepeat.innerHTML='visibility';
    }

})