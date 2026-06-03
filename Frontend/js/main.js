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

        if (abierto) {
            searchInput.focus();
        }

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

        const visibles =
            Math.floor(viewport.offsetWidth / slides[0].offsetWidth);

        return slides.length - visibles;
    }

    function goTo(index) {

        currentIndex = index;

        const gap = 50;

    slider.style.transform =
    `translateX(-${currentIndex * (slides[0].offsetWidth + gap)}px)`;

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

    // Autoplay

    setInterval(() => {

        const next =
            currentIndex >= getMaxIndex()
                ? 0
                : currentIndex + 1;

        goTo(next);

    }, 4000);

}

// ========================================
// SCROLL SUAVE A CATEGORÍAS
// ========================================

const botonesExplorar = document.querySelectorAll(".btnExplorar");

botonesExplorar.forEach(btn => {

    btn.addEventListener("click", (e) => {

        e.preventDefault();

        document.getElementById("categorias").scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ========================================
// HERO SLIDESHOW CON FADE SUAVE
// ========================================

const heroImages = [

    "https://fotos.perfil.com/2021/04/27/trim/1280/720/0427reconquista-1164433.jpg",

    "https://cdn.pixabay.com/photo/2022/04/02/01/52/kayaking-7106039_1280.jpg",

    "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/uuxae7iwp6gz0q3tccj8",

    "https://reconquista.gob.ar/wp-content/uploads/2024/09/Gran-cierre-de-la-31a-Estudiantina-Olimpica-las-murgas-llenaron-de-color-las-calles-de-Reconquista-19.jpg"

];

// Capas de fondo

const bg = document.querySelector(".header-bg");
const bgNext = document.querySelector(".header-bg-next");

// Puntitos

const dots = document.querySelectorAll(".dot");

if (bg && bgNext) {

    let heroIndex = 0;
    let animando = false;

    // Imagen inicial

    bg.style.backgroundImage =
        `url('${heroImages[0]}')`;

    dots[0]?.classList.add("active");

    function setHeroImage(index) {

        // Evitar animaciones simultáneas
        if (animando || index === heroIndex) return;

        animando = true;

        // Nueva imagen

        bgNext.style.backgroundImage =
            `url('${heroImages[index]}')`;

        // Inicia fade

        bgNext.style.opacity = "1";

        // Actualizar puntitos

        dots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === index
            );

        });

        // Finaliza transición

        setTimeout(() => {

            bg.style.backgroundImage =
                bgNext.style.backgroundImage;

            bgNext.style.opacity = "0";

            heroIndex = index;
            animando = false;

        }, 2000);

    }

    // Click en los puntitos

    dots.forEach((dot, i) => {

        dot.addEventListener("click", () => {

            setHeroImage(i);

        });

    });

    // Cambio automático

    setInterval(() => {

        const nextIndex =
            (heroIndex + 1) % heroImages.length;

        setHeroImage(nextIndex);

    }, 6000);

}