# Turismo Reconquista

Portal web turístico y plataforma de autogestión para prestadores turísticos de la ciudad de Reconquista, Santa Fe.

---

# Información General

**Proyecto:** Turismo Reconquista

**Cliente:** Municipalidad de Reconquista

**Desarrolladores:**

* Valentino Rivas
* Gabriel Oviedo
* Bruno Virili

**Tecnologías:**

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js
* MySQL

---

# Objetivo

Modernizar el portal turístico de la ciudad permitiendo:

* Centralizar información turística.
* Gestionar alojamientos.
* Gestionar gastronomía.
* Gestionar prestadores de servicios.
* Incorporar geolocalización.
* Permitir autogestión de comercios.
* Facilitar la administración municipal.

---

# Estado Actual

| Módulo          | Estado             |
| --------------- | ----------------   |
| Diseño Home     | 🟡 En desarrollo  |
| Navbar          | 🟡 En desarrollo  |
| Buscador        | 🟡 En desarrollo  |
| Qué Hacer       | 🟡 En desarrollo  |
| Alojamientos    | ⬜ Pendiente      |
| Gastronomía     | ⬜ Pendiente      |
| Prestadores     | ⬜ Pendiente      |
| Login Prestador | ⬜ Pendiente      |
| Panel Prestador | ⬜ Pendiente      |
| Backend         | 🟡 En desarrollo  |
| Base de Datos   | 🟡 En desarrollo  |

---

## 🛠️ Configuración de desarrollo

El proyecto utiliza una carpeta `.agents/skills` para definir reglas y estándares utilizados por herramientas de asistencia de desarrollo.

Estas skills ayudan a mantener consistencia en el código, diseño y flujo de trabajo.

### Skills configuradas

- **turismo-rqta**
  - Contexto específico del proyecto.
  - Define stack tecnológico, estructura, convenciones y reglas de desarrollo.

- **frontend-design**
  - Guías para creación y mejora de interfaces.
  - Mantiene criterios de diseño visual, componentes y experiencia de usuario.

- **responsive-design**
  - Patrones de diseño responsive.
  - Uso de layouts fluidos, breakpoints, CSS Grid, Flexbox y adaptación mobile-first.

- **accessibility**
  - Reglas de accesibilidad basadas en WCAG 2.2.
  - Incluye buenas prácticas para HTML semántico, navegación con teclado, contraste y soporte para tecnologías asistivas.

- **git-advanced-workflows**
  - Buenas prácticas para manejo de ramas, commits y flujo colaborativo.

- **requesting-code-review**
  - Estándares para revisión y mejora de código.

  ### Estructura de configuración


.agents/
└── skills/
    ├── accessibility/
    ├── frontend-design/
    ├── responsive-design/
    ├── git-advanced-workflows/
    ├── requesting-code-review/
    └── turismo-rqta/
        └── SKILL.md

# Registro de Versiones

## v0.1.0 - Inicio del Proyecto

Fecha: 01/06/2026

### Agregado

* Estructura inicial del proyecto.
* Configuración de VS Code.
* Creacion de una primera version de la base de datos.
* Link de base de datos.
* Diseño preliminar del Home.

### Pendiente

* Hero principal.
* Navbar definitiva.
* Sistema de búsqueda.

---

## v0.1.1 - Home Page

Fecha: 01/06/2026

### Agregado

* Hero principal.
* Imagen de fondo.
* Menú de navegación.
* Botón Soy Prestador.

### Mejorado

* Responsive inicial.

### Pendiente

* Sección Qué Hacer.
* Tarjetas de categorías.

---

## v0.1.2 - inicio Buscador

Fecha: 01/06/2026

### Agregado

* Lupa interactiva.
* Búsqueda expandible.

### Mejorado

* Experiencia de usuario.

---

## v0.1.3 - HTML y que ver

Fecha: 01/06/2026

### Agregado

* Index mejorado y optimizado.
* Creacion de la pagina que ver.

### Mejorado

* Interfaz.
* Experiencia de usuario.

---

## v0.1.4 - Pagina que ver y base de datos

Fecha: 01/06/2026

### Agregado

* Arreglo de mysql.
* implementacion de la base de datos.

### Mejorado

* Sistema de datos.

---

## v0.1.5 - Pagina que ver e insercion de datos

Fecha: 02/06/2026

### Agregado

* Insercion de contacto en la base de datos.
* Pagina que ver mejorada.
* Nueva pagina para administrar actividades donde se pueden cargar, editar y eliminar actividades.

### Mejorado

* interfaz visual.
* sistema de datos.
* comodidad.

---

## v0.1.6 - Modificación en index principal

Fecha 03/06/2026

### Agregado

* Nuevo estilo de cartas
* Nuevo estilo de footer
* Nueva pestaña de teléfonos útiles
* Cambios generales en diseño

---

## v0.1.7 - Modificaciones de diseño

Fecha 04/06/2026

### Agregado

* Modificacion slider eventos
* Hero principal con movimiento
* Mejoras de diseños simples

---

## v0.1.8 - Arreglo de bugs en slider y adaptacion para celulares

Fecha 05/06/2026

### Agregado

* Slider eventos arreglado
* Adaptacion completa de index para celulares
* Menu desplegable tipo hamburguesa

---

## v0.1.9 - Pagina quever y admin

Fecha 08/06/2026

### Agregado

* Pagina quever terminada
* Pagina admin-actividades terminada

---

# Lista de Tareas

## Frontend
* ☑ Home
* ☑ Hero principal
* ☐ Navbar responsive
* ☐ Buscador
* ☑ Qué Hacer
* ☐ Alojamientos
* ☐ Gastronomía
* ☐ Prestadores
* ☑ Footer

## Backend

* ☐ Configurar Express
* ☐ Configurar MySQL
* ☐ CRUD usuarios
* ☑ CRUD que hacer
* ☐ CRUD publicaciones
* ☐ CRUD categorías
* ☐ Login
* ☐ Registro

## Base de Datos

* ☑ Usuarios
* ☑ Prestadores
* ☑ Categorías
* ☑ Publicaciones
* ☑ Imágenes
* ☑ Actividades

---

# v0.1.8

Fecha: 08/06/2026

Responsables: Valentino Rivas

### Agregado
* Navbar arreglada
* Pagina quever terminada
* Pagina admin-actividades terminada
* Menu desplegable arreglado

# v0.1.9

Fecha: 14/07/2026

Responsable: Gabriel Oviedo

### Agregado
* Creación del archivo AGENTS.md para OpenCode.
* Documentación inicial de convenciones y flujo de trabajo para el proyecto.

# v0.1.10 - Incorporación de OpenCode Skills y documentación del proyecto

Fecha: 24/07/2026

Responsable: Gabriel Oviedo

### Agregado
* Incorporación de buenas prácticas de desarrollo frontend.
* Agregadas nuevas skills:
  - frontend-design
  - responsive-design
  - accessibility
  - find-skills
  - git-advanced-workflows
  - golang-documentation
  - requesting-code-review
  

### Mejorado

* Mejor organización del flujo de trabajo con OpenCode.
* Definición de convenciones del proyecto.
* Mejora en la asistencia para generación y revisión de código.
* Aplicación de criterios WCAG 2.2 para accesibilidad.
* Aplicación de patrones de diseño responsive con CSS moderno.

### Documentación

* Actualización del sistema de documentación interna del proyecto.
* Preparación de estructura `.agents/skills` para automatización y soporte del desarrollo.

# Última Actualización

Fecha: 24/07/2026

Responsable: Gabriel Oviedo

### Agregado

- Incorporación de la skill personalizada `turismo-rqta`.
- Integración de skills de accesibilidad y diseño responsive.
- Actualización de herramientas de soporte para OpenCode.
