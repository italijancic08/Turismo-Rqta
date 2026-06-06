// =========================
// BUSCADOR
// =========================

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

if (searchBtn && searchInput) {

    let abierto = false;

    searchBtn.addEventListener("click", () => {

        abierto = !abierto;

        searchInput.style.width = abierto ? "220px" : "0";
        searchInput.style.opacity = abierto ? "1" : "0";
        searchInput.style.padding = abierto ? "10px 15px" : "10px 0";

        if (abierto) searchInput.focus();
    });

}

// =========================
// CARRUSEL EVENTOS
// =========================

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const viewport = document.querySelector(".viewport");
const slides = document.querySelectorAll(".slide");

if (slider && nextBtn && prevBtn && viewport && slides.length > 0) {

    let currentIndex = 0;

    function getMaxIndex() {
        const visibles = Math.floor(
            viewport.offsetWidth / slides[0].offsetWidth
        );
        return Math.max(0, slides.length - visibles);
    }

    function goTo(index) {
        currentIndex = index;
        slider.style.transform = `translateX(-${
            currentIndex * slides[0].offsetWidth
        }px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < getMaxIndex()) {
            goTo(currentIndex + 1);
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            goTo(currentIndex - 1);
        }
    });

    setInterval(() => {
        const next = currentIndex >= getMaxIndex()
            ? 0
            : currentIndex + 1;

        goTo(next);
    }, 4000);
}

// =========================
// BOTONES EXPLORAR
// =========================

const botonesExplorar = document.querySelectorAll(".btnExplorar");

    function closeMenu() {
        navLinks.classList.remove("active");
        menuOverlay.classList.remove("active");
        hamburger.textContent = "☰";
    }

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        menuOverlay.classList.toggle("active");

        hamburger.textContent = navLinks.classList.contains("active")
            ? "✕"
            : "☰";
    });

    menuOverlay.addEventListener("click", closeMenu);

    document.querySelectorAll("#navLinks a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close-menu");

if (menuToggle && sideMenu && overlay && closeMenu) {

    menuToggle.addEventListener("click", () => {
        sideMenu.classList.add("active");
        overlay.classList.add("active");
    });

    function closeMenuFn() {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    }

    closeMenu.addEventListener("click", closeMenuFn);
    overlay.addEventListener("click", closeMenuFn);
} 

function closeMenuFn(){
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
} 

closeMenu.addEventListener("click", closeMenuFn);
overlay.addEventListener("click", closeMenuFn);

// Menú hamburguesa
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            hamburger.innerHTML = "✕";
        } else {
            hamburger.innerHTML = "☰";
        }

    });

    const menuLinks = document.querySelectorAll("#navLinks a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.innerHTML = "☰";
        });
    });

}