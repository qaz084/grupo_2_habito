const deleteUser = document.querySelector('.delete-account');
const form = document.querySelector('.delete-user')
const image = document.querySelector('.profile-picture')


function confirmDelete(e) {

    let result = confirm('¿Estás seguro de querer borrar tu cuenta?');
    if(result == true) {
        return true;
    } else {
        e.preventDefault();
    }
    
};

form.addEventListener('click', confirmDelete);

