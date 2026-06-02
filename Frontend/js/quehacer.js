document.addEventListener("DOMContentLoaded", async () => {

    const contenedor =
        document.getElementById("contenedor-actividades");

    try {

        const respuesta = await fetch(
            "http://localhost:3000/api/actividades"
        );

        const actividades =
            await respuesta.json();

        actividades.forEach(act => {

            contenedor.innerHTML += `

            <div class="actividad-wrapper">

                <article class="card-actividad">

                    <img
                        src="/Frontend/img/${act.imagen}"
                        alt="${act.nombre}"
                    >

                    <div class="info">

                        <h3>${act.nombre}</h3>

                        <p>
                            ${act.descripcion}
                        </p>

                        <a
                            href="${act.maps_url}"
                            target="_blank"
                            class="btn-mas">

                            Ver más

                        </a>

                    </div>

                </article>

                <div class="info-popup">

                    <h4>${act.nombre}</h4>

                    <p>${act.descripcion}</p>

                    <div class="mini-mapa">

                        <iframe
                            src="${act.maps_url.replace(
                                'https://maps.google.com/?q=',
                                'https://www.google.com/maps?q='
                            )}&output=embed">
                        </iframe>

                    </div>

                    <p>

                        <strong>Dirección:</strong><br>

                        ${act.direccion}

                    </p>

                    <p>

                        <strong>Horario:</strong><br>

                        ${act.horario}

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

    } catch(error){

        console.error(error);

        contenedor.innerHTML =
            "<h3>Error al cargar actividades</h3>";
    }

});