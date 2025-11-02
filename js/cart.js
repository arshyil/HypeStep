/* cart.js - modernized cart logic for Hypestep
   - expects items saved in localStorage key "cart"
   - cart item structure: { id, name, price, image, size, color, qty }
   - if qty missing, default = 1
*/

const CART_KEY = "cart";

// helper: format currency (IDR)
function formatRp(n) {
  return "Rp " + Number(n).toLocaleString("id-ID");
}

// read cart (ensure qty)
function readCart() {
  const raw = localStorage.getItem(CART_KEY);
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw);
    return arr.map((item) => ({ qty: 1, ...item })); // ensure qty default 1
  } catch (e) {
    console.error("Invalid cart data", e);
    return [];
  }
}

// write cart
function writeCart(arr) {
  localStorage.setItem(CART_KEY, JSON.stringify(arr));
  renderCart();
}

// render cart list + totals
function renderCart() {
  const cart = readCart();
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const mobileTotalEl = document.getElementById("mobile-total");
  const clearBtn = document.getElementById("clear-cart");

  container.innerHTML = "";

  if (!cart || cart.length === 0) {
    container.innerHTML = `<div class="empty" style="padding:28px; background:#fff; border-radius:12px; text-align:center">
      <p style="color:#555; margin:0 0 12px">Keranjang kamu masih kosong 🛍️</p>
      <a href="shop.html" class="btn btn-primary">Lihat Produk</a>
    </div>`;
    totalEl.innerHTML = "";
    if (mobileTotalEl) mobileTotalEl.textContent = "Rp 0";
    clearBtn.style.display = "none";
    return;
  }

  clearBtn.style.display = "inline-block";

  let total = 0;

  cart.forEach((item, index) => {
    const qty = item.qty && item.qty > 0 ? item.qty : 1;
    const lineTotal = item.price * qty;
    total += lineTotal;

    // card
    const card = document.createElement("div");
    card.className = "cart-item";

    // image
    const img = document.createElement("img");
    img.src = item.image || "assets/img/NikeAirForce1.png";
    img.alt = item.name;

    // info
    const info = document.createElement("div");
    info.className = "cart-info";
    info.innerHTML = `<h3>${item.name}</h3>
      <p class="small">Ukuran: ${item.size || "-"}</p>
      <p class="small">Warna: ${item.color || "-"}</p>
      <p class="price-line">${formatRp(item.price)}</p>`;

    // actions column
    const actions = document.createElement("div");
    actions.className = "cart-actions";

    // qty controls
    const qtyWrap = document.createElement("div");
    qtyWrap.className = "qty-controls";
    const minus = document.createElement("button");
    minus.textContent = "-";
    minus.title = "Kurangi";
    const qtyText = document.createElement("span");
    qtyText.textContent = qty;
    qtyText.style.minWidth = "20px";
    qtyText.style.textAlign = "center";
    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.title = "Tambah";

    minus.addEventListener("click", () => {
      changeQty(index, Math.max(1, qty - 1));
    });
    plus.addEventListener("click", () => {
      changeQty(index, qty + 1);
    });

    qtyWrap.appendChild(minus);
    qtyWrap.appendChild(qtyText);
    qtyWrap.appendChild(plus);

    // line price small
    const linePrice = document.createElement("div");
    linePrice.className = "small";
    linePrice.style.marginTop = "6px";
    linePrice.textContent = `Subtotal: ${formatRp(lineTotal)}`;

    // remove btn
    const remove = document.createElement("button");
    remove.className = "remove-btn";
    remove.textContent = "Hapus";
    remove.addEventListener("click", () => {
      removeFromCart(index);
    });

    actions.appendChild(qtyWrap);
    actions.appendChild(linePrice);
    actions.appendChild(remove);

    // assemble
    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(actions);

    container.appendChild(card);
  });

  totalEl.innerHTML = `Total: <strong>${formatRp(total)}</strong>`;
  if (mobileTotalEl) mobileTotalEl.textContent = formatRp(total);
}

// change qty for index
function changeQty(index, newQty) {
  const cart = readCart();
  if (!cart[index]) return;
  cart[index].qty = newQty;
  writeCart(cart);
}

// remove item by index
function removeFromCart(index) {
  const cart = readCart();
  cart.splice(index, 1);
  writeCart(cart);
}

// clear cart
function clearCart() {
  if (!confirm("Yakin ingin mengosongkan keranjang?")) return;
  localStorage.removeItem(CART_KEY);
  renderCart();
}

// hook clear button
document.getElementById("clear-cart").addEventListener("click", clearCart);

// show mobile floating bar when narrow
function handleResize() {
  const mobileBar = document.getElementById("mobileTotalBar");
  if (!mobileBar) return;
  if (window.innerWidth <= 520) {
    mobileBar.style.display = "flex";
  } else {
    mobileBar.style.display = "none";
  }
}
window.addEventListener("resize", handleResize);
window.addEventListener("load", () => {
  renderCart();
  handleResize();
});

// Optional: mobile menu toggle for sidebar compactness
const mobileToggle = document.getElementById("mobileMenuToggle");
const sidebarEl = document.getElementById("sidebar");
if (mobileToggle && sidebarEl) {
  mobileToggle.addEventListener("click", () => {
    sidebarEl.classList.toggle("sidebar-open");
  });
}

// === CEK CART SAAT TOMBOL CHECKOUT DIKLIK ===
const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", (event) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    event.preventDefault();

    Swal.fire({
      icon: "warning",
      title: "Keranjang kamu kosong!",
      text: "Silahkan belanja terlebih dahulu 😊",
      confirmButtonColor: "#2ea8ff",
    });
  }
});

