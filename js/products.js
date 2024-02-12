
            // // Ma'lumotlar tugmachlari o'zgartirilishi kerak bo'lgan ma'lumotlar ro'yxati
            // const productss = products;

            // // Mahsulot qidirish funktsiyasi
            // function searchProduct() {
            //     var productName = document.getElementById('searchInput').value;
            //     var resultsContainer = document.getElementById('results');
            //     resultsContainer.innerHTML = ''; // avvalgi qidirish natijalarini tozalash

            //     var foundProducts = products.filter(function (product) {
            //         return product.name.toLowerCase().includes(productName.toLowerCase());
            //     });

            //     foundProducts.forEach(function (product) {
            //         var li = document.createElement('li');
            //         li.textContent = product.name + ' - $' + product.price;
            //         resultsContainer.appendChild(li);
            //     });
            // }

const toogleForm = document.getElementById('toggleForm');
const loginForm = document.getElementById('login-form');

console.log(toogleForm);
toogleForm.addEventListener('click', function () {
    // loginForm.classList.toogle('open');
    if (loginForm.style.display == 'none') {
        loginForm.style.display = 'block';

    }
    else {
        loginForm.style.display = 'none'
    }


})
console.log('work');


const cards = document.querySelector(".cards")

function displayProducts(products) {
    let str = '';
    products.forEach((product) => {

        str += `
            <div class = "cards">
                <div class="card" data-id="${product.id}">
                   <img src=${product.images[0]} alt="" />
                   <div class="card-content">
                   <h2>${product.name}</h2>
                   <h3>${product.category}</h3>
                   <p class="price">Price: ${product.price}$</p>
                    <p class="description">${product.description}</p>
                    <p  class="rating">rating  :<span>${product.rating}/5 </span></p>
                   <button class="add_to_cart btn">Add to Cart</button>
                   <a href="./product.html">
            <button class="btn-local  btn btn-sm btn-outline-dark" onclick="goDetails(${product.id})">Details</button>
          </a>
                   </div>
                </div>
            </div> `;



    })
    cards.innerHTML = str
}

displayProducts(products);





         function goDetails(productId) {
  const product = products.find((pr) => pr.id === productId);
  localStorage.setItem('productInCart', JSON.stringify(product));
}