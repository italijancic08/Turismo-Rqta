const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   INICIO
========================= */

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

/* =========================
   TEST DB
========================= */

app.get('/test-db', async (req, res) => {

    try {

        const [rows] = await db.query(
            'SELECT * FROM categorias'
        );

        res.json(rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Error de conexión'
        });

    }

});

/* =========================
   OBTENER TODAS LAS ACTIVIDADES
========================= */

app.get('/api/actividades', async (req, res) => {

    try {

        const [rows] = await db.query(
            'SELECT * FROM actividades ORDER BY id DESC'
        );

        res.json(rows);

    } catch (error) {

        console.error('ERROR MYSQL:', error);

        res.status(500).json({
            error: error.message
        });

    }

});

/* =========================
   OBTENER ACTIVIDAD POR ID
========================= */

app.get('/api/actividades/:id', async (req, res) => {

    try {

        const { id } = req.params;

        const [rows] = await db.query(
            'SELECT * FROM actividades WHERE id = ?',
            [id]
        );

        if (rows.length === 0) {

            return res.status(404).json({
                error: 'Actividad no encontrada'
            });

        }

        res.json(rows[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Error al obtener actividad'
        });

    }

});

/* =========================
   CREAR ACTIVIDAD
========================= */

app.post('/api/actividades', async (req, res) => {

    try {

        const {
            nombre,
            descripcion,
            direccion,
            horario,
            contacto,
            costo,
            imagen,
            maps_url,
            categoria
        } = req.body;

        await db.query(
            `INSERT INTO actividades
            (
                nombre,
                descripcion,
                direccion,
                horario,
                contacto,
                costo,
                imagen,
                maps_url,
                categoria
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                nombre,
                descripcion,
                direccion,
                horario,
                contacto,
                costo,
                imagen,
                maps_url,
                categoria
            ]
        );

        res.status(201).json({
            mensaje: 'Actividad creada'
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Error al crear actividad'
        });

    }

});

/* =========================
   EDITAR ACTIVIDAD
========================= */

app.put('/api/actividades/:id', async (req, res) => {

    try {

        const { id } = req.params;

        const {
            nombre,
            descripcion,
            direccion,
            horario,
            contacto,
            costo,
            imagen,
            maps_url,
            categoria
        } = req.body;

        await db.query(
            `UPDATE actividades
            SET
                nombre = ?,
                descripcion = ?,
                direccion = ?,
                horario = ?,
                contacto = ?,
                costo = ?,
                imagen = ?,
                maps_url = ?,
                categoria = ?
            WHERE id = ?`,
            [
                nombre,
                descripcion,
                direccion,
                horario,
                contacto,
                costo,
                imagen,
                maps_url,
                categoria,
                id
            ]
        );

        res.json({
            mensaje: 'Actividad actualizada'
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Error al actualizar actividad'
        });

    }

});

/* =========================
   ELIMINAR ACTIVIDAD
========================= */

app.delete('/api/actividades/:id', async (req, res) => {

    try {

        const { id } = req.params;

        await db.query(
            'DELETE FROM actividades WHERE id = ?',
            [id]
        );

        res.json({
            mensaje: 'Actividad eliminada'
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Error al eliminar actividad'
        });

    }

});

/* =========================
   SERVIDOR
========================= */

app.listen(3000, () => {

    console.log(
        'Servidor iniciado en puerto 3000'
    );

});