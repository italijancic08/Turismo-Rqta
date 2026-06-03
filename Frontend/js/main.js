// =========================
// BUSCADOR
// =========================

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

if (searchBtn && searchInput) {

    let abierto = false;

    searchBtn.addEventListener("click", () => {

        abierto = !abierto;

        searchInput.style.width   = abierto ? "220px" : "0";
        searchInput.style.opacity = abierto ? "1"     : "0";
        searchInput.style.padding = abierto ? "10px 15px" : "10px 0";

        if (abierto) searchInput.focus();

    });

}

// =========================
// CARRUSEL EVENTOS
// =========================

const slider   = document.querySelector(".slider");
const nextBtn  = document.querySelector(".next");
const prevBtn  = document.querySelector(".prev");
const viewport = document.querySelector(".viewport");
const slides   = document.querySelectorAll(".slide");

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