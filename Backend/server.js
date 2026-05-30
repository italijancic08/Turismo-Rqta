const express = require('express');
const db = require('./config/db');

const app = express();

app.get('/test-db', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM categorias');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error de conexión'
        });
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciado en puerto 3000');
});