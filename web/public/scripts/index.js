const testProducts = [
  {
    name: "Fishing Rod", 
    imagePath: "fishing-rod.jpeg"
  },
  {
    name: "Cooler Fishing Rod", 
    imagePath: "cooler-fishing-rod.jpeg"
  },
  {
    name: "Best Fishing Rod",
    imagePath: "best-fishing-rod.jpeg"
  }
]

window.onload = function load() {
  populateProducts();
}

function populateProducts() {
  const galleryRef = document.getElementById("product-gallery");
  testProducts.forEach((product) => {
    const newProductRef = document.createElement("div");
    newProductRef.className = "product-gallery-item";

    // Create and append the image
    const productImage = document.createElement("img");
    productImage.src = `images/products/${product.imagePath}`;
    productImage.className = "product-gallery-item-image";
    newProductRef.appendChild(productImage);

    // Create and append the name
    const productName = document.createElement("h3");
    productName.innerHTML = product.name;
    newProductRef.appendChild(productName);

    galleryRef.appendChild(newProductRef);
  });
}