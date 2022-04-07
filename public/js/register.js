
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


const userCreateForm = document.querySelector('#register-form');
const userNameField = document.querySelector('input[name = name]');
const userEmailField = document.querySelector('input[name = email]');
//const avatarFile = document.querySelector('input[name = avatar]');


//Validacion de campos nombre e email
const validateField = (e) => {
    const field = e.target;
    const spanTagError = field.nextElementSibling;

    if (field.value.trim() === '') {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo 'Usuario' es obligatorio`;
    } else if (field.value.length < 2) {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo 'Usuario' debe tener al menos 2 carácteres`;
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
        spanTagError.innerText = `El campo 'Email' es obligatorio`;
    } else if (!field.value.match(emailFormat)) {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo 'Email' debe tener un formato de correo`;
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
        spanTagError.innerText = `El campo 'Contraseña' es obligatorio`;
    } else if (field.value.length < 8) {
        spanTagError.classList.add('text-danger');
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo 'Contraseña' debe contener al menos 8 carácteres`;
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
        spanTagError.innerText = `El campo 'Repetir Contraseña' es obligatorio`;
    } else if (field.value !== passwordContainer.value) {
        field.style.border ='red 1px solid';
        spanTagError.innerText = `El campo 'Repetir Contraseña' no coincide con la contraseña`;
    } else {
        field.style.border ='none';
        spanTagError.classList.remove('text-danger');
        spanTagError.innerText = '';
    }
};


//Validacion de imagen
const avatarFile = document.querySelector('input[name = avatar]');
let avatarId = document.querySelector('#avatarErrorMessage')

const validateAvatar = (e) => {
    const extension = e.currentTarget.files[0].type.split('/').pop();
    const allowedExtensions = ['jpg', 'png', 'jpeg', 'gif'];
    if(!allowedExtensions.includes(extension)) {
        avatarErrorMessage.innerText = `El campo 'Imagen de perfil' solo acepta formatos jpg, jpeg, png y gif`;
    } else { console.log('file allowed')}
}

userNameField.addEventListener('blur', validateField);
userEmailField.addEventListener('blur', validateEmail);
passwordContainer.addEventListener('blur', validatePassword);
passwordRepeatContainer.addEventListener('blur', validateRepeatedPassword);
avatarFile.addEventListener('change', validateAvatar)

//Validar que no se envíe el formulario con errores

userCreateForm.addEventListener('submit', function(e) {
    let errorsCount = 0
    
    const formFields = [...userCreateForm.elements];
    formFields.splice(4, 3)
    console.log(formFields);
    formFields.forEach(oneField => {
        const spanTagError = oneField.nextElementSibling;

        if (oneField.value.trim() === '') {
            spanTagError.classList.add('text-danger');
            oneField.style.border ='red 1px solid';
            spanTagError.innerText = `El campo es obligatorio`;
            errorsCount++;
        } else {
            oneField.style.border ='none';
            spanTagError.classList.remove('text-danger');
            spanTagError.innerText = '';
        }

    })

    if(errorsCount > 0) {
        e.preventDefault();
    }
});