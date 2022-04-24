console.log('ENTRO A BUY BUTTON');

let button=document.querySelectorAll('.add-To-Cart-Container');


button.forEach(buttonPressed=>{

buttonPressed.addEventListener('click',productAdded)
});

function productAdded(e) {
  target = e.target;
  console.log(target);
  target.style.backgroundColor = "#79CFB8";
  let icon = target.querySelector(".material-icons");
  icon.innerText = "done";
  console.log("ICONO", icon);
  setTimeout(() => {
    icon.innerText = "shopping_cart";
    icon.style.color = "white";
    // target.removeAttribute('style');
    target.style.backgroundColor = "#3d3d3d";
  }, 1000);
}