const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");

function renderProducts(filteredProducts = products) {
  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
    <a href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}">
    </a>
      <h3>${product.name}</h3>
      <p>Rp ${product.price.toLocaleString("id-ID")}</p>
      <a href="product.html?id=${product.id}"><button>Check Detail</button></a>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} ditambahkan ke keranjang!`);
}

function applyFilters() {
  const searchText = searchInput.value.toLowerCase();
  const selectedBrand = brandFilter.value;

  const filtered = products.filter((p) => {
    const matchesName = p.name.toLowerCase().includes(searchText);
    const matchesBrand = selectedBrand ? p.brand === selectedBrand : true;
    return matchesName && matchesBrand;
  });

  renderProducts(filtered);
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // jika scroll lebih dari 50px
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

searchInput.addEventListener("input", applyFilters);
brandFilter.addEventListener("change", applyFilters);

renderProducts();
