import { getImagePath } from './common'

window.onload = function load() {
  populateProducts();
}

const testProducts = [
  {
    name: "Wire Tap",
    description: "",
    stock: 2,
  }
]

async function populateProducts() {
  const galleryRef = document.getElementById("products");

  // IMPORTANT
  const resp = await fetch("http://localhost:3000/");
  const products = await resp.json();

  products.forEach((product) => {
    const newProductRef = document.createElement("div");
    newProductRef.className = "product";

    // Create and append the image
    const productImage = document.createElement("img");
    productImage.src = getImagePath(product.name);
    productImage.className = "product-image";
    newProductRef.appendChild(productImage);

    // Create and append the name
    const productName = document.createElement("h3");
    productName.innerHTML = product.name;
    newProductRef.appendChild(productName);

    galleryRef.appendChild(newProductRef);
  });
}

