/* ========================================
CONFIGURACIÓN
======================================== */

const API =
'http://localhost:3000/api/actividades';


/* ========================================
ELEMENTOS DOM
======================================== */

const form =
document.getElementById('formActividad');

const lista =
document.getElementById('listaActividades');

let actividadEditando = null;


/* ========================================
INICIO
======================================== */

cargarActividades();


/* ========================================
GUARDAR / EDITAR ACTIVIDAD
======================================== */

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const actividad = {

        nombre:
        document.getElementById('nombre').value,

        descripcion:
        document.getElementById('descripcion').value,

        direccion:
        document.getElementById('direccion').value,

        horario:
        document.getElementById('horario').value,

        contacto:
        document.getElementById('contacto').value,

        costo:
        document.getElementById('costo').value,

        imagen:
        document.getElementById('imagen').value,

        maps_url:
        document.getElementById('maps_url').value.trim() || null,

        categoria:
        document.getElementById('categoria').value

    };

    try {

        let respuesta;

        if (actividadEditando) {

            respuesta = await fetch(
                `${API}/${actividadEditando}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(actividad)
                }
            );

        } else {

            respuesta = await fetch(
                API,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(actividad)
                }
            );

        }

        if (!respuesta.ok) {
            throw new Error('Error al guardar');
        }

        actividadEditando = null;

        form.reset();

        cargarActividades();

    } catch (error) {

        console.error(error);

        alert('Error al guardar actividad');
    }

});


/* ========================================
CARGAR ACTIVIDADES
======================================== */

async function cargarActividades() {

    try {

        const res =
        await fetch(API);

        const actividades =
        await res.json();

        lista.innerHTML = '';

        actividades.forEach(act => {

            lista.innerHTML += `

            <div class="card">

                <img
                    src="${act.imagen}"
                    alt="${act.nombre}">

                <div class="card-body">

                    <h3>${act.nombre}</h3>

                    <p>
                        ${act.descripcion}
                    </p>

                    <p>
    <strong>Dirección:</strong>
    ${act.direccion || '-'}
</p>

<p>
    <strong>Horario:</strong>
    ${act.horario || '-'}
</p>

<p>
    <strong>Contacto:</strong>
    ${act.contacto || '-'}
</p>

<p>
    <strong>Categoría:</strong>
    ${act.categoria || '-'}
</p>

<p>
    <strong>Ubicación:</strong>
    ${
        act.maps_url
        ? '<img src="/Frontend/assets/Pin.png" class="icono-mapa"> Personalizada'
        : '<img src="/Frontend/assets/Pin.png" class="icono-mapa"> Reconquista (por defecto)'
    }
</p>

<div class="acciones">

    <button
        class="btn-editar"
        onclick="editarActividad(${act.id})">

        Editar

    </button>

    <button
        class="btn-eliminar"
        onclick="eliminarActividad(${act.id})">

        Eliminar

    </button>

</div>

                </div>

            </div>

            `;

        });

    } catch (error) {

        console.error(error);

        lista.innerHTML =
        '<p>Error al cargar actividades</p>';

    }

}


/* ========================================
EDITAR ACTIVIDAD
======================================== */

async function editarActividad(id) {

    try {

        const res =
        await fetch(`${API}/${id}`);

        const act =
        await res.json();

        document.getElementById('nombre').value =
        act.nombre || '';

        document.getElementById('descripcion').value =
        act.descripcion || '';

        document.getElementById('direccion').value =
        act.direccion || '';

        document.getElementById('horario').value =
        act.horario || '';

        document.getElementById('contacto').value =
        act.contacto || '';

        document.getElementById('costo').value =
        act.costo || '';

        document.getElementById('imagen').value =
        act.imagen || '';

        document.getElementById('maps_url').value =
        act.maps_url || '';

        document.getElementById('categoria').value =
        act.categoria || '';

        actividadEditando = id;

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    } catch (error) {

        console.error(error);

        alert('Error al cargar actividad');
    }

}


/* ========================================
ELIMINAR ACTIVIDAD
======================================== */

async function eliminarActividad(id) {

    const confirmar =
    confirm('¿Eliminar esta actividad?');

    if (!confirmar) {
        return;
    }

    try {

        const respuesta = await fetch(
            `${API}/${id}`,
            {
                method: 'DELETE'
            }
        );

        if (!respuesta.ok) {
            throw new Error('Error al eliminar');
        }

        cargarActividades();

    } catch (error) {

        console.error(error);

        alert('Error al eliminar actividad');
    }

}