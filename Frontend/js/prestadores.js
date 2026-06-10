document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
    BUSCADOR NAVBAR
    ======================================== */

    const searchBtn =
    document.querySelector(".search-btn");

    const searchInput =
    document.querySelector(".search-input");

    if(searchBtn && searchInput){

        searchBtn.addEventListener("click", () => {

            searchInput.classList.toggle("activo");

            if(searchInput.classList.contains("activo")){
                searchInput.focus();
            }

        });

    }

    /* ========================================
    DATOS DE EJEMPLO
    ======================================== */

    const prestadores = [

        {
            nombre: "Pesca Paraná",
            rubro: "Pesca",
            descripcion: "Excursiones de pesca deportiva por el Paraná.",
            direccion: "Puerto Reconquista",
            telefono: "3482 123456",
            email: "info@pescaparana.com",
            whatsapp: "543482123456",
            web: "https://google.com",
            mapa: "https://maps.google.com",
            imagen: "https://picsum.photos/600/400"
        },

        {
            nombre: "Kayak Reconquista",
            rubro: "Kayak",
            descripcion: "Recorridos guiados por riachos y humedales.",
            direccion: "Puerto Reconquista",
            telefono: "3482 555555",
            email: "info@kayak.com",
            whatsapp: "543482555555",
            web: "https://google.com",
            mapa: "https://maps.google.com",
            imagen: "https://picsum.photos/600/401"
        },

        {
            nombre: "Guía Turístico Norte",
            rubro: "Guías",
            descripcion: "Visitas guiadas por la ciudad y sitios históricos.",
            direccion: "Centro Reconquista",
            telefono: "3482 777777",
            email: "info@guia.com",
            whatsapp: "543482777777",
            web: "https://google.com",
            mapa: "https://maps.google.com",
            imagen: "https://picsum.photos/600/402"
        }

    ];

    /* ========================================
    CONTENEDOR
    ======================================== */

    const contenedor =
    document.getElementById("contenedor-prestadores");

    const popup =
    document.getElementById("popup-prestador");

    const popupImagen =
    document.getElementById("popup-imagen");

    const popupRubro =
    document.getElementById("popup-rubro");

    const popupNombre =
    document.getElementById("popup-nombre");

    const popupDescripcion =
    document.getElementById("popup-descripcion");

    const popupDireccion =
    document.getElementById("popup-direccion");

    const popupTelefono =
    document.getElementById("popup-telefono");

    const popupEmail =
    document.getElementById("popup-email");

    const popupWhatsapp =
    document.getElementById("popup-whatsapp");

    const popupMapa =
    document.getElementById("popup-mapa");

    const popupWeb =
    document.getElementById("popup-web");

    /* ========================================
    CARGAR CARDS
    ======================================== */

    function cargarPrestadores(lista){

        contenedor.innerHTML = "";

        lista.forEach(prestador => {

            const card =
            document.createElement("div");

            card.classList.add("prestador-card");

            card.innerHTML = `

                <img
                    src="${prestador.imagen}"
                    alt="${prestador.nombre}"
                >

                <div class="prestador-info">

                    <span class="badge-rubro">
                        ${prestador.rubro}
                    </span>

                    <h3>
                        ${prestador.nombre}
                    </h3>

                    <p>
                        ${prestador.descripcion}
                    </p>

                    <button class="btn-ver-mas">
                        Ver más
                    </button>

                </div>

            `;

            const boton =
            card.querySelector(".btn-ver-mas");

            boton.addEventListener("click", () => {

                popupImagen.src =
                prestador.imagen;

                popupRubro.textContent =
                prestador.rubro;

                popupNombre.textContent =
                prestador.nombre;

                popupDescripcion.textContent =
                prestador.descripcion;

                popupDireccion.textContent =
                prestador.direccion;

                popupTelefono.textContent =
                prestador.telefono;

                popupEmail.textContent =
                prestador.email;

                popupWhatsapp.href =
                `https://wa.me/${prestador.whatsapp}`;

                popupMapa.href =
                prestador.mapa;

                popupWeb.href =
                prestador.web;

                popup.classList.add("activo");

            });

            contenedor.appendChild(card);

        });

    }

    cargarPrestadores(prestadores);

    /* ========================================
    CERRAR POPUP
    ======================================== */

    const cerrarPopup =
    document.getElementById("cerrar-popup");

    cerrarPopup.addEventListener("click", () => {

        popup.classList.remove("activo");

    });

    popup.addEventListener("click", (e) => {

        if(e.target === popup){

            popup.classList.remove("activo");

        }

    });

    /* ========================================
    BUSCADOR PRESTADORES
    ======================================== */

    const buscador =
    document.getElementById("buscador-prestadores");

    if(buscador){

        buscador.addEventListener("input", () => {

            const texto =
            buscador.value.toLowerCase();

            const filtrados =
            prestadores.filter(prestador => {

                return (
                    prestador.nombre
                    .toLowerCase()
                    .includes(texto)

                    ||

                    prestador.rubro
                    .toLowerCase()
                    .includes(texto)

                    ||

                    prestador.descripcion
                    .toLowerCase()
                    .includes(texto)
                );

            });

            cargarPrestadores(filtrados);

        });

    }

});

/* ========================================
BUSCADOR
======================================== */

const searchBtn =
document.querySelector(".search-btn");

const searchInput =
document.querySelector(".search-input");

if (searchBtn && searchInput) {

    let abierto = false;

    searchBtn.addEventListener(
        "click",
        () => {

            if (!abierto) {

                searchInput.style.width =
                "220px";

                searchInput.style.opacity =
                "1";

                searchInput.style.padding =
                "10px 15px";

                searchInput.focus();

                abierto = true;

            } else {

                searchInput.style.width =
                "0";

                searchInput.style.opacity =
                "0";

                searchInput.style.padding =
                "10px 0";

                abierto = false;

            }

        }
    );

}


/* ========================================
NAVBAR SCROLL
======================================== */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
        document.querySelector(".navbar");

        if (
            window.scrollY > 50
        ) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);