# Authentication with JWT

## Authentication with JWT

```javascript
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function login(req,res){

    const {email,password}=req.body;

    const [rows] = await db.query(
        "SELECT * FROM usuarios WHERE email=?",
        [email]
    );

    if(rows.length === 0){
        return res.status(404).json({
            error:"Usuario no encontrado"
        });
    }

    const user = rows[0];

    const valid = await bcrypt.compare(
        password,
        user.password
    );

    if(!valid){
        return res.status(401).json({
            error:"Credenciales inválidas"
        });
    }

    const token = jwt.sign(
        {
            id:user.id,
            rol:user.rol
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"24h"
        }
    );

    res.json({
        token
    });
}
```
