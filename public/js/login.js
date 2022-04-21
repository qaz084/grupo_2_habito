const eyeIcon = document.querySelector('#password-icon');

const passwordForm = document.querySelector('#password-container');




eyeIcon.addEventListener('click',()=>{   

   if(passwordForm.type=='password'){
    

       passwordForm.type='text';
       eyeIcon.innerHTML='visibility_off';

    }else{
        passwordForm.type='password';
        eyeIcon.innerHTML='visibility';
    }

})



const emailField = document.querySelector('input[name = email]');
const userLoginForm = document.querySelector('#login-form');

const validateEmail = (e) => {
    const field = e.target;
    const spanError = field.nextElementSibling;
    const emailFormat = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@([a-zA-Z0-9-])+(.[a-z])+(?:\.[a-zA-Z0-9-]+)*$/
    

    if (field.value.trim() === '') {
        spanError.classList.add('text-danger');
        field.style.border ='red 2px solid';
        spanError.innerText = `El campo 'Email' es obligatorio`;
    
    }else if (!field.value.match(emailFormat)) {
        spanError.classList.add('text-danger');
        field.style.border ='red 2px solid';
        spanError.innerText = `El campo 'Email' debe tener un formato de correo`;
        
        
    }else {
        field.style.border ='green 2px solid';
        spanError.innerText = '';
        spanError.classList.remove('text-danger');
        
    };


};

const validatePassword = (e) => {

    const field = e.target;
    const spanError = field.nextElementSibling;
    
    
    if (field.value.trim() === '') {
        spanError.classList.add('text-danger');
        field.style.border ='red 2px solid';
        spanError.innerText = `El campo 'Contraseña' es obligatorio`;
    
    } else if (field.value.length < 8) {
        spanError.classList.add('text-danger');
        field.style.border ='red 2px solid';
        spanError.innerText = `El campo 'Contraseña' debe contener al menos 8 carácteres`;
    } else {
        field.style.border ='green 2px solid';
        spanError.classList.remove('text-danger');
        spanError.innerText = '';
    }
};


emailField.addEventListener('blur', validateEmail);
passwordForm.addEventListener('blur', validatePassword);

userLoginForm.addEventListener('submit', function(e) {
    const errorsForm = 0;
    const formFields = [...userLoginForm.elements];
    
    formFields.forEach(oneField => {
        const spanError = oneField.nextElementSibling;

        if (oneField.value.trim() === '') {
            spanError.classList.add('text-danger');
            oneField.style.border ='red 2px solid';
            spanError.innerText = `El campo es obligatorio`;
            errorsForm++;
        } else {
            oneField.style.border ='none';
            spanError.classList.remove('text-danger');
            spanError.innerText = '';
        }

    })

    if(errorsForm > 0) {
        e.preventDefault();
    }
});