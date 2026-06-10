/* ========================================
CARGAR ACTIVIDADES
======================================== */

document.addEventListener("DOMContentLoaded", async () => {

    const contenedor =
    document.getElementById("contenedor-gastronomia");

    try {

        const respuesta =
        await fetch(
            "http://localhost:3000/api/gastronomia"
        );

        const actividades =
        await respuesta.json();

        contenedor.innerHTML = "";

        actividades.forEach(act => {

            const mapaUrl = act.maps_url
                ? act.maps_url.replace(
                    "https://maps.google.com/?q=",
                    "https://www.google.com/maps?q="
                )
                : "https://www.google.com/maps?q=Reconquista,Santa+Fe,Argentina";

            const enlaceMapa = act.maps_url ||
                "https://www.google.com/maps?q=Reconquista,Santa+Fe,Argentina";

            contenedor.innerHTML += `

            <div class="actividad-wrapper">

                <div class="card-actividad">

                    <img
                        src="${act.imagen}"
                        alt="${act.nombre}"
                    >

                    <div class="info">

                        <h3>${act.nombre}</h3>

                        <p class="descripcion-corta">
                            ${
                                act.descripcion.length > 120
                                ? act.descripcion.substring(0,120) + "..."
                                : act.descripcion
                            }
                        </p>

                        ${
                            act.descripcion.length > 120
                            ? `
                                <button class="btn-mas">
                                    Ver más
                                </button>

                                <div class="descripcion-completa">
                                    ${act.descripcion}
                                </div>
                            `
                            : ""
                        }

                    </div>

                </div>

                <div class="info-popup">

                    <h4>${act.nombre}</h4>

                    <p>${act.descripcion}</p>

                    <div class="mini-mapa">

                        <iframe
                            loading="lazy"
                            src="${mapaUrl}&output=embed">
                        </iframe>

                    </div>

                    <p>
                        <strong>Ubicación:</strong><br>
                        ${
                            act.maps_url
                            ? "Ubicación específica"
                            : "Mostrando ubicación general de Reconquista"
                        }
                    </p>

                    <p>
                        <strong>Dirección:</strong><br>
                        ${act.direccion || "No disponible"}
                    </p>

                    <p>
                        <strong>Horario:</strong><br>
                        ${act.horario || "Consultar"}
                    </p>

                    <p>
                        <strong>Contacto:</strong><br>
                        ${act.contacto || "No disponible"}
                    </p>

                    <a
                        href="${enlaceMapa}"
                        target="_blank"
                        class="btn-mapa">

                        Cómo llegar

                    </a>

                </div>

            </div>

            `;

        });

        /* ========================================
        VER MÁS
        ======================================== */

        document.querySelectorAll(".btn-mas").forEach(btn => {

            btn.addEventListener("click", () => {

                const descripcionCompleta =
                btn.nextElementSibling;

                const descripcionCorta =
                btn.parentElement.querySelector(
                    ".descripcion-corta"
                );

                descripcionCompleta.classList.toggle(
                    "abierta"
                );

                if (
                    descripcionCompleta.classList.contains(
                        "abierta"
                    )
                ) {

                    descripcionCorta.style.display =
                    "none";

                    btn.textContent =
                    "Ver menos";

                } else {

                    descripcionCorta.style.display =
                    "block";

                    btn.textContent =
                    "Ver más";

                }

            });

        });

        /* ========================================
        POPUPS INTELIGENTES
        ======================================== */

        const wrappers =
        document.querySelectorAll(".actividad-wrapper");

        wrappers.forEach(wrapper => {

            const popup =
            wrapper.querySelector(".info-popup");

            wrapper.addEventListener(
                "mouseenter",
                () => {

                    popup.classList.remove(
                        "izquierda"
                    );

                    const popupRect =
                    popup.getBoundingClientRect();

                    if (
                        popupRect.right >
                        window.innerWidth
                    ) {

                        popup.classList.add(
                            "izquierda"
                        );

                    }

                }
            );

        });

    } catch (error) {

        console.error(error);

        contenedor.innerHTML = `
            <h3>Error al cargar actividades</h3>
        `;

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