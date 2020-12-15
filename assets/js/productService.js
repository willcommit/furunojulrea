
var grid = document.getElementById('grid')

const url = 'https://cms.furuno.se/furuno_new_cms/items/produkter?fields=*.*.*'

var Products = []

fetch(url)
  .then(response => response.json())
  .then(data => {
    
    data.data.forEach(element => {
      const Product = {}
      Product.name = element.name
      Product.text = element.text
      Product.inStock = element.in_stock
      Product.price = element.price
      Product.salesPrice = element.sales_price
      Product.image = element.image.data.full_url
      Products.push(Product)
    });

    Products.forEach(product => {
      const productCard = document.createElement('div');
      var productCardContent = `
                <div class="ribbon-display ribbon ribbon-top-right"><span>SÅLD</span></div>
                <img class="product-image" src="${product.image}" alt="">
                <div class="card-content">
                  <div class="text-container">
                    <div>
                        <p class="product-name">${product.name}</p>
                        <div class="product-text">${product.text}</div>
                    </div>
                    <div>
                      <p class="list-price">${product.price}sek</p>
                      <p class="sale-price">${product.salesPrice}sek</p>
                    </div>
                  </div>
                  <form action="http://www.furuno.se/aaterfoersaeljare/" target="_blank">
                      <input class="buy-btn" type="submit" value="Beställ" />
                  </form>
                </div>
            `
      productCard.classList.add("product-card")

      productCard.innerHTML = productCardContent

      if (!product.inStock) {
        productCard.children[0].classList.remove("ribbon-display")
      }

      grid.appendChild(productCard)
    })
  })


//MODAL Logic
var modal = document.getElementById("myModal");
var btn = document.getElementById("info-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}