// =========================
// BUSCADOR
// =========================

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

if (searchBtn && searchInput) {

    searchBtn.addEventListener("click", () => {

        searchInput.style.width = "220px";
        searchInput.style.opacity = "1";
        searchInput.style.padding = "10px 15px";

        searchInput.focus();

    });

    searchInput.addEventListener("blur", () => {

        if (searchInput.value === "") {

            searchInput.style.width = "0";
            searchInput.style.opacity = "0";
            searchInput.style.padding = "10px 0";

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
    const slideWidth = 300;

    nextBtn.addEventListener("click", () => {

        const maxIndex = slides.length - 3;

        if (currentIndex < maxIndex) {

            currentIndex++;

            slider.style.transform =
                `translateX(-${currentIndex * slideWidth}px)`;

        }

    });

    prevBtn.addEventListener("click", () => {

        if (currentIndex > 0) {

            currentIndex--;

            slider.style.transform =
                `translateX(-${currentIndex * slideWidth}px)`;

        }

    });

    setInterval(() => {

        const maxIndex = slides.length - 3;

        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }

        slider.style.transform =
            `translateX(-${currentIndex * slideWidth}px)`;

    }, 4000);

}