const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1911',
    database: 'turismo'
});

module.exports = connection.promise();

mysql -u /workspaces/Turismo-Rqta/database -p turismo < turismo_categorias.sql
mysql -u /workspaces/Turismo-Rqta/database -p turismo < turismo_documentos.sql
mysql -u /workspaces/Turismo-Rqta/database -p turismo < turismo_eventos.sql
mysql -u /workspaces/Turismo-Rqta/database -p turismo < turismo_imagenes.sql
mysql -u /workspaces/Turismo-Rqta/database -p turismo < turismo_prestadores.sql
mysql -u /workspaces/Turismo-Rqta/database -p turismo < turismo_quehacer.sql
mysql -u /workspaces/Turismo-Rqta/database -p turismo < turismo_usuarios.sql