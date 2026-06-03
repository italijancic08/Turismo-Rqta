document.addEventListener("DOMContentLoaded", async () => {

    const contenedor =
    document.getElementById("contenedor-actividades");

    try{

        const respuesta =
        await fetch(
            "http://localhost:3000/api/actividades"
        );

        const actividades =
        await respuesta.json();

        contenedor.innerHTML = "";

        actividades.forEach(act => {

            contenedor.innerHTML += `

            <div class="actividad-wrapper">

                <div class="card-actividad">

                    <img
                        src="${act.imagen}"
                        alt="${act.nombre}"
                    >

                    <div class="info">

                        <h3>${act.nombre}</h3>

                        <p>
                            ${act.descripcion.substring(0,100)}...
                        </p>

                        <a
                            href="${act.maps_url}"
                            target="_blank"
                            class="btn-mas">
                            Ver más
                        </a>

                    </div>

                </div>

                <div class="info-popup">

                    <h4>${act.nombre}</h4>

                    <p>${act.descripcion}</p>

                    <div class="mini-mapa">

                        <iframe
                            loading="lazy"
                            src="${act.maps_url.replace(
                                'https://maps.google.com/?q=',
                                'https://www.google.com/maps?q='
                            )}&output=embed">
                        </iframe>

                    </div>

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
                        href="${act.maps_url}"
                        target="_blank"
                        class="btn-mapa">

                        Cómo llegar

                    </a>

                </div>

            </div>

            `;

        });

    }catch(error){

        console.error(error);

        contenedor.innerHTML = `
            <h3>Error al cargar actividades</h3>
        `;
    }

});

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