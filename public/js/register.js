

const eyeIcon = document.querySelector('#password-icon');

const passwordContainer = document.querySelector('#password-container');

const eyeIconRepeat = document.querySelector('#password-repeat-icon');

const passwordRepeatContainer = document.querySelector('#password-repeat-container');

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


const userCreateform = document.querySelector('#register-form');
const userNameField = document.querySelector('input[name = name]');
const userEmailField = document.querySelector('input[name = email]');


//Validacion de campos nombre e email
const validateField = (e) => {
    const field = e.target;
    const spanTagError = field.nextElementSibling;

    if (field.value.trim() === '') {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo ${field.name} es obligatorio`;
    } else if (field.value.length < 2) {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo ${field.name} debe tener al menos 2 carácteres`;
    } else {
        field.style.border ='none';
        spanTagError.classList.remove('text-danger');
        spanTagError.innerText = '';
    };
};

const validateEmail = (e) => {
    const field = e.target;
    const spanTagError = field.nextElementSibling;
    const emailFormat = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@([a-zA-Z0-9-])+(.[a-z])+(?:\.[a-zA-Z0-9-]+)*$/

    if (field.value.trim() === '') {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo ${field.name} es obligatorio`;
    } else if (!field.value.match(emailFormat)) {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo ${field.name} debe tener un formato de email`;
    } else {
        field.style.border ='none';
        spanTagError.classList.remove('text-danger');
        spanTagError.innerText = '';
    };
};

//Validación de contraseña
const validatePassword = (e) => {

    const field = e.target;
    const spanTagError = field.nextElementSibling;
    
    if (field.value.trim() === '') {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo ${field.name} es obligatorio`;
    } else if (field.value.length < 8) {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo ${field.name} debe contener al menos 8 carácteres`;
    } else {
        field.style.border ='none';
        spanTagError.classList.remove('text-danger');
        spanTagError.innerText = '';
    }
};

//Validación de repetición de contraseña

const validateRepeatedPassword = (e) => {
    const field = e.target;
    const spanTagError = field.nextElementSibling;

    if (field.value.trim() === '') {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo ${field.name} es obligatorio`;
    } else if (field.value !== passwordContainer.value) {
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo ${field.name} no coincide con la contraseña`;
    } else {
        field.style.border ='none';
        spanTagError.classList.remove('text-danger');
        spanTagError.innerText = '';
    }
};

userNameField.addEventListener('blur', validateField);
userEmailField.addEventListener('blur', validateEmail);
passwordContainer.addEventListener('blur', validatePassword);
passwordRepeatContainer.addEventListener('blur', validateRepeatedPassword);


//Validar que no se envíe el formulario con errores
/*
userCreateform.addEventListener('submit', function(e) {
    let errorsCount = 0;

    const formFields = [...userCreateform.elements]
    formFields.pop();

    formFields.forEach(oneField => {
        //const spanTagError = field.nextElementSibiling;
        if (oneField.value.trim() === '') {
            //field.classList.add('is-invalid');
            field.style.border ='red 1px solid'
            spanTagError.innerText = `El campo ${oneField.name} es obligatorio`;
        
            errorsCount++;
        } else {
            //field.classList.remove('is-invalid');
            oneField.style.border ='none'
            spanTagError.innerText = `El campo ${oneField.name} es obligatorio`;
        }
    });

    if (errorsCount > 0 {
        e.preventDefault();
    })
});
*/