const serverUrl = 'http://localhost:3001/';

const itemsPath= 'api/products';
const imagesPath='img/';

window.onload=getData();

const items=document.querySelector('.productsInCart');
function getData() {

    fetch(`${serverUrl}${itemsPath}`)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    // .then((data)=>printData(data));
}

function printData(data){

    const itemContainer =document.createElement('section');
    itemContainer.className='productsInCart';

    data.forEach(item=>{
        itemContainer.innerHTML+=createDomElement(item);
        items.append(itemContainer);
    })
}

function createDomElement(item){

    const itemHtml=`
    <div class="productImage">
    <img src="/uploads/products/${item.image1}" alt="">
    <!-- <h1>test</h1> -->
</div>
<div class="productDetail">
    <div class="leftDetail">
        
<!---------------------- PRODUCT NAME ------------------------->
        <span class="productName">
        ${item.name}
        </span>


<!---------------------- PRODUCT SIZE ------------------------->
        <% if (productDetail.size.length > 0) {  %>
<% productDetail.size.forEach(oneSize => { %>

        <span class="productSize">
            Talle:  ${item.size}
        </span>

        <% }); %>
        <% }; %>

<!---------------------- PRODUCT PRICE------------------------->
  <div class="rightDetail">
    <span class="productPrice">
    ${item.price}
    </span>
<!---------------------- PRODUCT DELETE ------------------------->
    <span class="productCartDelete">
        Quitar
    </span>
    <span>
    </span>
</div>`;
}