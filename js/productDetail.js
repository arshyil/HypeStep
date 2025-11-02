/* =========================================================
   productDetail.js – Load Product Details + Size Picker + Add To Cart
========================================================= */

const CART_KEY = "cart";

/* Ambil ID produk dari URL */
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

/* Cari produk berdasarkan ID */
const product = products.find((p) => p.id === id);

const img = document.getElementById("detailImage");
const name = document.getElementById("detailName");
const price = document.getElementById("detailPrice");
const desc = document.getElementById("detailDesc");
const addCartBtn = document.getElementById("addToCartBtn");
const relatedContainer = document.getElementById("relatedProducts");

/* ====== SHOW PRODUCT DATA ====== */
if (product) {
  img.src = product.image;
  name.textContent = product.name;
  price.textContent = "Rp " + product.price.toLocaleString("id-ID");
  desc.textContent = product.description || "No description available.";

  // tampilkan related product
  loadRelatedProducts(product.category, product.id);
}

/* =========================================================
   ✅ SIZE PICKER
========================================================= */
let selectedSize = null;

document.querySelectorAll(".size-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".size-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedSize = btn.innerText;
    console.log("Size selected:", selectedSize);
  });
});

/* =========================================================
   ✅ ADD TO CART
========================================================= */
addCartBtn.addEventListener("click", () => {
  if (!selectedSize) {
    alert("⚠️ Pilih size dulu sebelum memasukkan ke keranjang.");
    return;
  }

  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  const existing = cart.find((p) => p.id === id && p.size === selectedSize);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      qty: 1,
    });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  showPopup(
    `✅ ${product.name} (Size ${selectedSize}) ditambahkan ke keranjang!`
  );
});

/* =========================================================
   ✅ RELATED PRODUCTS SECTION
========================================================= */
function loadRelatedProducts(category, currentId) {
  const related = products
    .filter((p) => p.category === category && p.id !== currentId)
    .slice(0, 4);

  relatedContainer.innerHTML = "";

  related.forEach((p) => {
    relatedContainer.innerHTML += `
        <div class="product-card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p class="price">Rp ${p.price.toLocaleString("id-ID")}</p>
            <a href="product.html?id=${
              p.id
            }" class="btn-viewProduct">View Product</a>
        </div>`;
  });
}

/* =========================================================
   ✅ Popup Tengah Layar (Zoom + Fade)
========================================================= */
function showPopup(message) {
  const popup = document.getElementById("cartPopup");
  const text = document.getElementById("popupText");

  text.innerText = message;
  popup.classList.add("show");

  // hilang otomatis
  setTimeout(() => {
    popup.classList.add("fade-out");
  }, 1500);

  setTimeout(() => {
    popup.classList.remove("show", "fade-out");
  }, 2000);
}
