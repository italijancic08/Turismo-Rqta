// =========================
// BUSCADOR
// =========================

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

if (searchBtn && searchInput) {

    let abierto = false;

    searchBtn.addEventListener("click", () => {

        if (!abierto) {

            searchInput.style.width = "220px";
            searchInput.style.opacity = "1";
            searchInput.style.padding = "10px 15px";

            searchInput.focus();

            abierto = true;

        } else {

            searchInput.style.width = "0";
            searchInput.style.opacity = "0";
            searchInput.style.padding = "10px 0";

            abierto = false;

        }

    });

}

// =========================
// CARRUSEL EVENTOS
// =========================

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");

if (slider && nextBtn && prevBtn && slides.length > 0) {

    let currentIndex = 0;
   

    nextBtn.addEventListener("click", () => {

        const visibles = Math.floor(
    document.querySelector(".viewport").offsetWidth /
    slides[0].offsetWidth
);

const maxIndex = slides.length - visibles;

        if (currentIndex < maxIndex) {

            currentIndex++;

           slider.style.transform =
    `translateX(-${currentIndex * slides[0].offsetWidth}px)`;

        }

    });

   prevBtn.addEventListener("click", () => {

    if (currentIndex > 0) {

        currentIndex--;

        slider.style.transform =
            `translateX(-${currentIndex * slides[0].offsetWidth}px)`;

    }

});
    setInterval(() => {

        const visibles = Math.floor(
    document.querySelector(".viewport").offsetWidth /
    slides[0].offsetWidth
);

const maxIndex = slides.length - visibles;

        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }

        slider.style.transform =
            `translateX(-${currentIndex * slideWidth}px)`;

    }, 4000);

}

// =========================
// EXPLORAR
// =========================

 const botonesExplorar = document.querySelectorAll(".btnExplorar");

botonesExplorar.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const section = document.getElementById("categorias");

        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: "smooth"
        });
    });
});