// const toogleForm = document.getElementById('toggleForm');
// const loginForm = document.getElementById('login-form')
// toogleForm.addEventListener('click', function () {
//     // loginForm.classList.toogle('open');
//     if (loginForm.style.display == 'none') {
//         loginForm.style.display = 'block';

//     }
//     else {
//         loginForm.style.display = 'none'
//     }


// })
// console.log('work');


// const cards = document.querySelector(".cards")

// function displayProducts(products) {
//     let str = '';
//     products.forEach((product) => {

//         str += `
//             <div class = "cards">
//                 <div class="card" data-id="${product.id}">
//                    <img src=${product.images[0]} alt="" />
//                    <div class="card-content">
//                    <h2>${product.name}</h2>
//                    <h3>${product.category}</h3>
//                    <p class="price">Price: ${product.price}$</p>
//                     <p class="description">${product.description}</p>
//                     <p  class="rating">rating  :<span>${product.rating}/5 </span></p>
//                    <button class="add_to_cart btn">Add to Cart</button>
//                    <a href="./product.html">
//             <button class="btn-local  btn btn-sm btn-outline-dark" onclick="goDetails(${product.id})">Details</button>
//           </a>
//                    </div>
//                 </div>
//             </div> `;



//     })
//     cards.innerHTML = str
// }

// displayProducts(products);



const productDetailsCard = document.querySelector('.product-details');
const product = JSON.parse(localStorage.getItem('productInCart'));

productDetailsCard.innerHTML = `
    <div class>
    <img src="${product.images[0]}" alt="${product.name}" />
    <div class="card-content">
      <h3>${product.name}</h3>
      <h3>${product.price}$</h3>
      <button class=" btn btn-sm btn-outline-dark" onclick="addToCart(${product.id})">Add to cart</button>
    </div>
    
    </div>
`;

function addToCart(productId) {
  const product = products.find((pr) => pr.id === productId);
  const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
  const hasProduct = cartProducts.find((pr) => pr.id === productId);
  let newProducts = [];
  if (!hasProduct) {
    newProducts = [
      ...cartProducts,
      {
        ...product,
        numOfProduct: 1,
      },
    ];
  }
  localStorage.setItem('cartProducts', JSON.stringify(newProducts));
}
