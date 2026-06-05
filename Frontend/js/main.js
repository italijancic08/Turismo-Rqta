// ========================================
// BUSCADOR
// ========================================

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

// ========================================
// CARRUSEL DE EVENTOS
// ========================================

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const viewport = document.querySelector(".viewport");
const slides = document.querySelectorAll(".slide");

if (slider && nextBtn && prevBtn && viewport && slides.length > 0) {
    let currentIndex = 0;

    function getMaxIndex() {
        const visibles = Math.floor(viewport.offsetWidth / slides[0].offsetWidth);
        return slides.length - visibles;
    }

    function goTo(index) {

        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * slides[0].offsetWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < getMaxIndex()) goTo(currentIndex + 1);
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) goTo(currentIndex - 1);
    });

    // Autoplay

    setInterval(() => {
        const next = currentIndex >= getMaxIndex() ? 0 : currentIndex + 1;
        goTo(next);

    }, 4000);

}

const btnExplorar = document.querySelector('a[href="#categorias"]');

if (btnExplorar) {
    btnExplorar.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("categorias").scrollIntoView({
            behavior: "smooth"
        });

    });
}
// ========================================
// MENU HAMBURGUESA
// ========================================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const menuOverlay = document.getElementById("menuOverlay");

if (hamburger && navLinks && menuOverlay) {

    hamburger.addEventListener("click", () => {
        navLinks.classList.add("active");
        menuOverlay.classList.add("active");
    });

    menuOverlay.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuOverlay.classList.remove("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuOverlay.classList.remove("active");
        });
    });

}

// ========================================
// HERO SLIDER
// ========================================

const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");
const dots = document.querySelectorAll(".dot");

if (bg1 && bg2 && dots.length > 0) {

    const images = [
        "assets/slide1.jpg",
        "assets/slide2.jpg",
        "assets/slide3.jpg",
        "assets/slide4.jpg",
        "assets/slide5.jpg"
    ];

    let current = 0;
    let activeBg = bg1;

    bg1.style.backgroundImage = `url('${images[0]}')`;
    bg1.style.opacity = "1";

    function showSlide(index) {

        const nextBg = activeBg === bg1 ? bg2 : bg1;

        nextBg.style.backgroundImage = `url('${images[index]}')`;
        nextBg.style.opacity = "1";

        activeBg.style.opacity = "0";

        activeBg = nextBg;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    setInterval(() => {

        current = (current + 1) % images.length;
        showSlide(current);

    }, 5000);

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            current = index;
            showSlide(current);

        });

    });
}
