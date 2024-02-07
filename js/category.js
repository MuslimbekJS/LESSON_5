const cars = document.querySelector('.cards');

function displayCategory(categories) {
    let str = "";
    categories.forEach(category => {
        str += `
            <div class="card"  data-id="${category.id}">
                <img src="${category.image} "alt="${category.name}" />
                <h2><a href="#">${category.name}</a></h2>
            </div>  
        `;
        cars.innerHTML = str

    });

}

displayCategory(categories)