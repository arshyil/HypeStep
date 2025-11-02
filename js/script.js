document.addEventListener("DOMContentLoaded", () => {
  // ============================================================
  // ✅ NAVBAR MOBILE TOGGLE (Universal)
  // ============================================================
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const icon = toggleButton?.querySelector("i");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("show");

      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");

        if (icon) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    });

    document.addEventListener("click", (e) => {
      const clickedOutside =
        !navLinks.contains(e.target) && e.target !== toggleButton;

      if (navLinks.classList.contains("show") && clickedOutside) {
        navLinks.classList.remove("show");

        if (icon) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });
  }

  // ============================================================
  // ✅ SHOP PAGE — STATIC SEARCH / FILTER (runs only if elements exist)
  // ============================================================
  const searchInput = document.querySelector(".shop-filter input[type='text']");
  const categorySelect = document.querySelector("#categoryFilter");
  const productCards = document.querySelectorAll(".product-grid .product-card");

  if (searchInput && productCards.length > 0) {
    const applyFilters = () => {
      const searchTerm = searchInput.value.toLowerCase().trim();
      const selectedCategory = categorySelect
        ? categorySelect.value.toLowerCase()
        : "all";

      productCards.forEach((card) => {
        const productName = card.querySelector("h3").innerText.toLowerCase();
        const productCat =
          card.getAttribute("data-category")?.toLowerCase() || "";

        const matchesSearch = productName.includes(searchTerm);
        const matchesCategory =
          selectedCategory === "all" || selectedCategory === productCat;

        card.style.display =
          matchesSearch && matchesCategory ? "block" : "none";
      });
    };

    searchInput.addEventListener("keyup", applyFilters);
    if (categorySelect) categorySelect.addEventListener("change", applyFilters);
    applyFilters();
  }

  // ============================================================
  // ✅ HOME — NUMBER COUNTER
  // ============================================================
  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    const speed = 200;
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / speed;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 15);
      }
    };
    update();
  });

  // ============================================================
  // ✅ FAQ Accordion Logic (works on Contact page only)
  // ============================================================
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((q) => {
    q.addEventListener("click", () => {
      const parent = q.parentElement;

      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== parent) item.classList.remove("active");
      });

      parent.classList.toggle("active");
    });
  });
});

// ============================================================
// ✅ BRAND SLIDER (Only runs on pages where .brand-track exists)
// ============================================================
const track = document.querySelector(".brand-track");

if (track) {
  const trackWidth = track.scrollWidth;
  const speed = 200;
  const duration = trackWidth / speed;

  track.style.animationDuration = `${duration}s`;
}

/* =========================================================
   ✨ SCROLL REVEAL (AOS STYLE)
========================================================= */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2, // 20% elemen muncul -> trigger animasi
  }
);

revealElements.forEach((el) => revealObserver.observe(el));
