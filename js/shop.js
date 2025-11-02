/* =========================================================
   shop.js — Render Products + Search + Filter + Pagination
   + Click product to Product Detail Page
========================================================= */

const grid = document.getElementById("product-grid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const pagination = document.getElementById("pagination");

const CART_KEY = "cart";
let filteredProducts = [...products];
let currentPage = 1;
const itemsPerPage = 8;

/* Format ke IDR */
function formatRp(n) {
  return "Rp " + Number(n).toLocaleString("id-ID");
}

/* =========================================================
   ✅ RENDER PRODUCT + PAGINATION
========================================================= */
function renderProducts() {
  grid.innerHTML = "";

  if (!filteredProducts.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;opacity:.6;">
            Produk tidak ditemukan.
        </p>`;
    pagination.innerHTML = "";
    return;
  }

  // hitung produk berdasarkan halaman
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginated = filteredProducts.slice(start, end);

  paginated.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
            <img src="${p.image}" alt="${
      p.name
    }" class="product-click" data-id="${p.id}">
            <h3 class="product-click" data-id="${p.id}">${p.name}</h3>
            <p class="price">${formatRp(p.price)}</p>

            <button class="btn-secondary quick-view" data-id="${
              p.id
            }">Quick View</button>
        `;

    grid.appendChild(card);
  });

  attachProductClickEvents();
  attachQuickViewEvents();
  renderPagination();
}

/* =========================================================
   ✅ BUTTON PAGINATION RENDER
========================================================= */
function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (totalPages <= 1) return; // kalau hanya 1 halaman, hide pagination

  // tombol Prev
  if (currentPage > 1) {
    const prev = document.createElement("button");
    prev.innerText = "Prev";
    prev.onclick = () => {
      currentPage--;
      renderProducts();
    };
    pagination.appendChild(prev);
  }

  // nomor halaman
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.innerText = i;

    if (i === currentPage) pageBtn.classList.add("active");

    pageBtn.onclick = () => {
      currentPage = i;
      renderProducts();
    };

    pagination.appendChild(pageBtn);
  }

  // tombol Next
  if (currentPage < totalPages) {
    const next = document.createElement("button");
    next.innerText = "Next";
    next.onclick = () => {
      currentPage++;
      renderProducts();
    };
    pagination.appendChild(next);
  }
}

/* =========================================================
   ✅ PRODUK CLICK → PRODUCT DETAIL PAGE
========================================================= */
function attachProductClickEvents() {
  document.querySelectorAll(".product-click").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.dataset.id;
      window.location.href = `product.html?id=${id}`;
    });
  });
}

/* =========================================================
   ✅ QUICK VIEW MODAL
========================================================= */
const modal = document.getElementById("quickViewModal");
const closeModal = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalAdd = document.getElementById("modalAddToCart");

function attachQuickViewEvents() {
  document.querySelectorAll(".quick-view").forEach((btn) => {
    btn.addEventListener("click", () => {
      const p = products.find((item) => item.id === parseInt(btn.dataset.id));
      if (!p) return;

      modalImg.src = p.image;
      modalTitle.innerText = p.name;
      modalPrice.innerText = formatRp(p.price);
      modalAdd.dataset.id = p.id;

      modal.style.display = "flex";
    });
  });
}

/* Close modal jika klik tombol X */
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

/* Close modal jika klik di luar modal (overlay) */
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// close modal
modalAdd.addEventListener("click", () => {
  const productId = modalAdd.dataset.id;

  modal.style.display = "none"; // tutup modal
  window.location.href = `product.html?id=${productId}`;
});

/* =========================================================
   ✅ ADD TO CART
========================================================= */
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  const existed = cart.find((p) => p.id === id);
  existed ? existed.qty++ : cart.push({ ...product, qty: 1 });

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  alert(`✅ ${product.name} masuk ke keranjang`);
}

/* =========================================================
   ✅ FILTER + SEARCH + SORT
========================================================= */
function applyFilters() {
  const search = searchInput.value.toLowerCase();

  filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search) ||
      p.brand.toLowerCase().includes(search)
  );

  if (categoryFilter.value !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.brand === categoryFilter.value
    );
  }

  if (sortFilter.value === "price-low")
    filteredProducts.sort((a, b) => a.price - b.price);
  if (sortFilter.value === "price-high")
    filteredProducts.sort((a, b) => b.price - a.price);

  currentPage = 1;
  renderProducts();
}

// listeners
searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);

// load awal
applyFilters();
