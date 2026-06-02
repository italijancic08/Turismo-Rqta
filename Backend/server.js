const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

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

app.get('/api/actividades', async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM actividades'
        );

        res.json(rows);

    } catch (error) {

        console.error('ERROR MYSQL:', error);

        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciado en puerto 3000');
});