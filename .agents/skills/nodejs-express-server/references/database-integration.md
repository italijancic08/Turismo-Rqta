# Database Integration 

## Database Integration 

```javascript
cdb.query(
 "SELECT * FROM usuarios WHERE id=?",
 [id]
);
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  },


const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM("user", "admin"),
      defaultValue: "user",
    },
  },
  {
    timestamps: true,
  },
);

  const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
```

## SELECT

const [rows] = await pool.query(
  "SELECT * FROM actividades"
);

return rows;

## INSERT

await pool.query(
  "INSERT INTO actividades(nombre, descripcion) VALUES (?,?)",
  [nombre, descripcion]
);

## UPDATE 

await pool.query(
  "UPDATE actividades SET nombre=? WHERE id=?",
  [nombre,id]
);

## DELETE 

await pool.query(
  "DELETE FROM actividades WHERE id=?",
  [id]
);

## Prepared statements

pool.query(
 "SELECT * FROM usuarios WHERE email=?",
 [email]
);
// evita sql injection

## Transactions 

const connection = await pool.getConnection();

try {
  await connection.beginTransaction();

  // operaciones

  await connection.commit();

} catch(error){

  await connection.rollback();

} finally {

  connection.release();

}