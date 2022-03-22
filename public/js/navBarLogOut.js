
console.log('FUNCA');

const navBarLogOut = document.querySelector('#logOutProfile');
const ulClass = document.querySelector('#ulClass');


navBarLogOut.addEventListener('click', function(e){
    
   e.preventDefault();
     ulClass.classList.remove("ul-header2");
    ulClass.classList.add('ul-header-short');

   location.href='http://localhost:3000/users/logout';
    
})