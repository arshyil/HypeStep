
const validUser = {
    username: "admin",
    password: "12345"
};

const loginForm = document.getElementById("loginForm");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUser.username && password === validUser.password) {
        modalText.textContent = "Login berhasil!";
        modal.style.display = "block";
        // Bisa redirect misal ke dashboard
        window.location.href = "home.html";
    } else {
        modalText.textContent = "Username atau password salah!";
        modal.style.display = "block";
    }
});

// Tutup modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Tutup modal kalau klik di luar
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
