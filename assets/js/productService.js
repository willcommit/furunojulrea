
var grid = document.getElementById('grid')

const url = 'http://207.154.248.109/furuno_new_cms/items/produkter?fields=*.*.*'

var Products = []

fetch(url)
  .then(response => response.json())
  .then(data => {
    
    data.data.forEach(element => {
      const Product = {}
      Product.name = element.name
      Product.text = element.text
      Product.inStock = element.in_stock
      Product.showCustomLabel = element.show_custom_label
      Product.customLabelText = element.custom_label
      Product.price = element.price
      Product.salesPrice = element.sales_price
      Product.image = element.image.data.full_url
      Products.push(Product)
    });

    Products.forEach(product => {
      const productCard = document.createElement('div');
      var productCardContent = `
                <div class="ribbon-display ribbon ribbon-top-right"><span>SÅLD</span></div>
                <div class="ribbon-display ribbon ribbon-top-right"><span>${product.customLabelText}</span></div>
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
                  <form action="./aterforsaljare.html" target="_blank">
                      <input class="buy-btn" type="submit" value="Beställ" />
                  </form>
                </div>
            `
      productCard.classList.add("product-card")

      productCard.innerHTML = productCardContent

      if (product.showCustomLabel && product.inStock) {
        productCard.children[1].classList.remove("ribbon-display")        
      }

      if (!product.inStock) {
        productCard.children[0].classList.remove("ribbon-display")
        productCard.children[3].children[1].children[0].disabled = true
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
