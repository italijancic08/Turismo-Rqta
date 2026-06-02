const API =
'http://localhost:3000/api/actividades';

const form =
document.getElementById('formActividad');

const lista =
document.getElementById('listaActividades');

cargarActividades();

form.addEventListener('submit', async (e)=>{

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

        costo:
        document.getElementById('costo').value,

        imagen:
        document.getElementById('imagen').value,

        maps_url:
        document.getElementById('maps_url').value,

        categoria:
        document.getElementById('categoria').value
    };

    try{

        const respuesta = await fetch(API,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(actividad)
        });

        if(!respuesta.ok){
            throw new Error('Error al guardar');
        }

        form.reset();

        cargarActividades();

    }catch(error){

        console.error(error);

        alert('Error al guardar actividad');
    }

});

async function cargarActividades(){

    try{

        const res =
        await fetch(API);

        const actividades =
        await res.json();

        lista.innerHTML='';

        actividades.forEach(act=>{

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
                        <strong>Categoría:</strong>
                        ${act.categoria || '-'}
                    </p>

                    <div class="acciones">

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

    }catch(error){

        console.error(error);

        lista.innerHTML =
        '<p>Error al cargar actividades</p>';
    }

}

async function eliminarActividad(id){

    const confirmar =
    confirm('¿Eliminar esta actividad?');

    if(!confirmar){
        return;
    }

    try{

        const respuesta = await fetch(
            `${API}/${id}`,
            {
                method:'DELETE'
            }
        );

        if(!respuesta.ok){
            throw new Error('Error al eliminar');
        }

        cargarActividades();

    }catch(error){

        console.error(error);

        alert('Error al eliminar actividad');
    }

}