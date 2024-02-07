const toogleForm = document.getElementById('toggleForm');
const loginForm = document.getElementById('login-form')
toogleForm.addEventListener('click', function () {
    // loginForm.classList.toogle('open');
    if (loginForm.style.display == 'none') {
        loginForm.style.display = 'block';

    }
    else {
        loginForm.style.display = 'none'
    }


})
// console.log('work');


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
                   </div>
                </div>
            </div> `;



    })
    cards.innerHTML = str
}

displayProducts(products)