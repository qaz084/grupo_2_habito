console.log('anda banner');
let isSearch = new URLSearchParams(location.search);
const bannerContainer=document.querySelector('.banner-container ');
const productsContainer=document.querySelector('.products-container ');


let url =[location.href];


console.log(url[0].includes('list'));



if(isSearch.has('search')){


    bannerContainer.style.display='none';
    productsContainer.style.marginTop='250px';

}else{

    bannerContainer.removeAttribute('display');
    productsContainer.removeAttribute('marginTop');
}



if(url[0].includes('list')){


    bannerContainer.style.display='none';
    productsContainer.style.marginTop='250px';

}else{

    bannerContainer.removeAttribute('display');
    productsContainer.removeAttribute('marginTop');
}
