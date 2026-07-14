# Turismo Reconquista

Plataforma web para la gestión y promoción de información turística de la ciudad de Reconquista, Santa Fe. 

---

## Stack

| Capa          | Tecnología                          |
| ------------- | ----------------------------------- |
| Frontend      | HTML5, CSS3, JavaScript (Vanilla JS)|
| Backend       | Node.js + Express                   |
| Base de datos | MySQL                               |
| Control de versiones | Git + GitHub                 |

---

## Commands

```bash
# Instalar dependencias
npm install

# Iniciar el backend
npm start
# o en modo desarrollo
node Backend/server.js

# Git - crear rama
git checkout -b nombre-de-la-rama

# Git - commit convencional
git add .
git commit -m "tipo: mensaje descriptivo"

# Git - subir cambios
git push origin nombre-de-la-rama
```

---

## Estructura

```
Turismo-Rqta/
├── Backend/               # Lógica del servidor con Express
│   └── server.js          # Punto de entrada del backend
├── database/              # Scripts SQL y configuración de la base de datos
├── Frontend/              # Aplicación web del lado del cliente
│   ├── assets/            # Recursos multimedia (imágenes, iconos, etc.)
│   ├── css/               # Hojas de estilo
│   ├── js/                # Scripts del frontend
│   └── pages/             # Páginas HTML adicionales
├── node_modules/          # Dependencias instaladas (no versionar)
├── package.json           # Configuración del proyecto y dependencias
└── README.md              # Documentación general del proyecto
```

---

## Convenciones

- Mantener la estructura de carpetas existente.
- No mover archivos de su ubicación sin justificarlo.
- Escribir código claro, legible y mantenible.
- Reutilizar funciones existentes antes de duplicar código.
- Mantener el diseño responsive en todas las vistas.
- No agregar dependencias innecesarias al proyecto.
- Usar nombres descriptivos y consistentes (camelCase en JS, kebab-case en CSS).
- Comentar solo cuando aporte valor: lógica compleja o decisiones técnicas importantes.
- Los mensajes de commit deben seguir el formato convencional (ej: `feat:`, `fix:`, `refactor:`).

---

## No hagas

- No eliminar archivos existentes sin autorización explícita.
- No modificar la base de datos sin documentar el cambio.
- No cambiar la estructura de carpetas del proyecto.
- No instalar librerías sin evaluar si realmente se necesitan.
- No romper la compatibilidad con el frontend existente.
- No modificar estilos globales si el cambio afecta a otras páginas.
- No subir código a `main` directamente; siempre usar ramas y pull requests.

---

## Flujo de trabajo

1. **Analizar el contexto** – entender qué se pide y por qué.
2. **Revisar archivos relacionados** – leer el código existente antes de modificarlo.
3. **Explicar el plan** – describir brevemente qué se va a hacer.
4. **Implementar cambios pequeños y seguros** – un cambio a la vez, verificando cada paso.
5. **Mantener compatibilidad** – asegurar que las modificaciones no rompan otras partes del proyecto.
6. **Reportar cambios** – indicar qué archivos fueron creados, modificados o eliminados.

---

## Documentación

Cualquier cambio significativo debe reflejarse en la documentación correspondiente:

- Nuevas funcionalidades o componentes → actualizar este documento si aplica.
- Nuevos endpoints de API → documentar en `README.md` o archivo dedicado.
- Nuevas carpetas o cambios estructurales → actualizar la sección de estructura.
- Cambios en la base de datos → incluir los scripts de migración en `database/`.
