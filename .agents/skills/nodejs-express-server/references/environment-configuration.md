# Environment Configuration

## Environment Configuration

```javascript
require("dotenv").config();

const config = {
    port: process.env.PORT || 3000,

    env: process.env.NODE_ENV || "development",

    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    },

    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: "24h",
    },

    cors: {
        origin:
            process.env.CORS_ORIGIN ||
            "http://localhost:5500",
    },
};

module.exports = config;
```
