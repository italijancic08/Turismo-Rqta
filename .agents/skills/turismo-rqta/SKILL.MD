# Turismo Reconquista Project Skill

## Nombre del proyecto

Turismo Reconquista

## Descripción

Proyecto web turístico para promocionar actividades, alojamientos, gastronomía, prestadores y eventos de la ciudad de Reconquista.

El proyecto debe mantenerse simple, mantenible y compatible con navegadores modernos.

---

# Stack del proyecto

## Frontend

- HTML5
- CSS3
- JavaScript Vanilla

No utilizar frameworks frontend.

No utilizar:
- React
- Vue
- Angular
- Bootstrap
- Tailwind

salvo que sea solicitado explícitamente.

## Backend

- Node.js
- Express
- MySQL

## Base de datos

Motor:
- MySQL 8+

---

# Estructura del proyecto

Mantener la estructura existente.

Ejemplo:

```
Turismo-Rqta/

├── Frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── pages/
│       ├── quehacer.html
│       ├── alojamientos.html
│       ├── gastronomia.html
│       └── prestadores.html
│
├── Backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│
└── database/
    └── archivos SQL
```

No mover archivos ni cambiar nombres sin autorización.

---

# Reglas generales

## Antes de modificar código

Siempre:

1. Revisar archivos existentes.
2. Entender la estructura actual.
3. Reutilizar código existente.
4. Evitar duplicaciones.

No crear nuevas soluciones si ya existe una implementación.

---

# Frontend

## HTML

Usar HTML5 semántico.

Preferir:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Evitar:

```html
<div>
<div>
<div>
```

cuando exista una etiqueta semántica adecuada.

---

# CSS

## Principios

- Mobile First.
- CSS mantenible.
- Reutilizar clases existentes.
- Usar variables CSS cuando corresponda.
- Evitar estilos inline.

Ejemplo:

```css
:root {
  --primary-color: #0a5568;
  --secondary-color: #f5f5f5;
}
```

---

# Responsive Design

Usar diseño adaptable.

Breakpoints oficiales:

```css
/* Mobile */
<576px

/* Large phones */
576px

/* Tablets */
768px

/* Small laptops */
992px

/* Desktop */
1200px
```

No crear breakpoints innecesarios.

Preferir:

- Flexbox
- CSS Grid
- clamp()
- min()
- max()
- container queries cuando aporte valor

---

# Diseño

Seguir estas reglas:

- Diseño limpio.
- Evitar apariencia genérica.
- Mantener identidad turística.
- Priorizar imágenes y contenido visual.
- Mantener coherencia entre páginas.

---

# JavaScript

Usar JavaScript Vanilla.

Preferir:

- funciones pequeñas
- nombres descriptivos
- separación de responsabilidades

Ejemplo:

```javascript
function openMenu(){

}

function closeMenu(){

}

function initMenu(){

}
```

Evitar:

- código repetido
- funciones gigantes
- variables globales innecesarias

---

# Navegación móvil

El menú hamburguesa debe:

- funcionar con teclado.
- tener atributos ARIA.
- cerrar al hacer click fuera.
- cerrar con Escape.

Ejemplo:

```html
<button
aria-expanded="false"
aria-controls="menu">
Menu
</button>
```

---

# Accesibilidad WCAG 2.2

Aplicar nivel AA.

## Imágenes

Siempre usar:

```html
<img 
src=""
alt="Descripción">
```

No dejar imágenes importantes sin texto alternativo.

---

## Formularios

Todos los inputs necesitan:

- label asociado.
- mensajes de error claros.
- estados visibles.

Correcto:

```html
<label for="email">
Email
</label>

<input id="email">
```

---

## Teclado

Todo debe poder utilizarse sin mouse.

Verificar:

- focus visible.
- tabulación correcta.
- Escape en elementos cerrables.

---

## Contraste

Mantener contraste suficiente entre:

- texto
- fondo
- botones

---

# Imágenes

Usar buenas prácticas:

Preferir:

```html
loading="lazy"
```

para imágenes fuera del primer viewport.

Usar:

- WebP cuando sea posible.
- tamaños adecuados.
- evitar imágenes pesadas.

---

# SEO básico

Cada página debe tener:

```html
<title>
<meta name="description">
```

Usar:

- títulos claros.
- estructura correcta de headings.

Ejemplo:

```
h1
 ├── h2
 │    └── h3
```

No saltar niveles.

---

# Performance

Priorizar:

- carga rápida.
- archivos optimizados.
- evitar JavaScript innecesario.
- evitar librerías externas sin necesidad.

---

# Backend

## Node / Express

Mantener:

- rutas organizadas.
- respuestas JSON claras.
- manejo de errores.

Ejemplo:

```javascript
res.status(200).json(data)
```

Errores:

```javascript
res.status(500).json({
 message:"Error interno"
})
```

---

# Base de datos

Antes de modificar consultas:

Revisar:

- nombre real de tablas.
- columnas existentes.
- relaciones.

No asumir nombres.

---

# Git Workflow

Antes de realizar cambios importantes:

Verificar:

```bash
git status
git branch
```

Crear commits claros.

Formato:

```
tipo: descripción corta
```

Ejemplo:

```
feat: agrega filtro de actividades
fix: corrige menú responsive
style: mejora tarjetas móviles
```

---

# No hacer

No:

- cambiar estructura del proyecto.
- instalar frameworks.
- crear archivos innecesarios.
- reemplazar CSS completo.
- eliminar código existente sin confirmar.
- usar soluciones complejas para problemas simples.
- agregar dependencias sin justificar.

---

# Flujo de trabajo

Para cada tarea:

1. Analizar el problema.
2. Revisar archivos relacionados.
3. Proponer cambios.
4. Implementar cambios mínimos.
5. Verificar funcionamiento.
6. Revisar responsive.
7. Revisar accesibilidad.
8. Documentar cambios importantes.

---

# Documentación

Mantener actualizado:

- README.md
- comentarios importantes
- historial de cambios

Los commits deben explicar claramente qué cambió.

---

# Prioridades del proyecto

Orden de importancia:

1. Funcionalidad.
2. Mantener estructura existente.
3. Responsive.
4. Accesibilidad.
5. Rendimiento.
6. Diseño visual.
7. Optimización avanzada.

---

# Regla final

El objetivo es mejorar Turismo Reconquista sin romper lo existente.

Antes de crear algo nuevo:

"¿Ya existe algo parecido que pueda reutilizar?"