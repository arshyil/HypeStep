document.getElementById("continuePayment").addEventListener("click", () => {
  const selected = document.querySelector("input[name='payment']:checked");
  const warning = document.getElementById("paymentWarning");
  const paymentCards = document.querySelector(".payment-options");

  if (!selected) {
    warning.style.opacity = "1";
    paymentCards.classList.add("shake");
    setTimeout(() => paymentCards.classList.remove("shake"), 400);
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) return;

  // ✅ Generate Order ID
  const orderId = "HS-" + Date.now();

  // ✅ Format tanggal & waktu Indonesia
  const now = new Date();
  const formattedDate = now.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // ✅ Total harga
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  // ✅ Detail order untuk disimpan di riwayat
  const orderDetail = {
    orderId,
    paymentMethod: selected.value,
    orderDate: formattedDate,
    totalAmount: total,
    items: cart, // ✅ simpan cart sebagai 'items' (biar kebaca di riwayat)
    status: "Completed",
  };

  // ✅ Save ke last order (untuk checkout-success page)
  localStorage.setItem("lastOrder", JSON.stringify(orderDetail));

  // ✅ Simpan order ke history (Array)
  let history = JSON.parse(localStorage.getItem("orderHistory")) || [];
  history.push(orderDetail);
  localStorage.setItem("orderHistory", JSON.stringify(history));

  // ✅ Hapus cart
  localStorage.removeItem("cart");

  // ✅ Redirect
  window.location.href = "checkout-success.html";
});
