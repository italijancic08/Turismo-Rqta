---
name: turismo-rqta
description: Desarrollo, mantenimiento y evolución del proyecto web Turismo Reconquista. Ayuda a crear funcionalidades frontend, backend, base de datos, documentación y mejoras siguiendo la arquitectura existente del proyecto.
author: Gabriel Oviedo , Valentino Rivas, Bruno Virili
version: "1.0"
tags:
  - turismo
  - frontend
  - backend
  - javascript
  - nodejs
  - mysql
  - html
  - css
  - express
  - responsive-design
---

# Skill: Turismo Reconquista

## Objetivo del proyecto

Este skill define las reglas y conocimientos necesarios para trabajar en el proyecto **Turismo Reconquista**.

El objetivo del sistema es desarrollar una plataforma web turística que permita mostrar información de la ciudad de Reconquista, incluyendo:

- Lugares turísticos.
- Actividades.
- Alojamientos.
- Gastronomía.
- Prestadores turísticos.
- Eventos.
- Información relevante para visitantes.
- Panel administrativo para gestión de contenido.

El proyecto debe priorizar:
- Diseño moderno.
- Buena experiencia de usuario.
- Adaptación a dispositivos móviles.
- Código mantenible.
- Organización clara.
- Separación de responsabilidades.

---

# Stack tecnológico

## Frontend

Tecnologías principales:

- HTML5.
- CSS3.
- JavaScript Vanilla.
- Font Awesome para iconos.
- Google Fonts (Poppins).

Estructura:

```

Frontend/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   └── archivos específicos por página
│
└── pages/
├── quehacer.html
├── alojamientos.html
├── gastronomia.html
└── prestadores.html

```

---

## Backend

Tecnologías:

- Node.js.
- Express.js.
- MySQL.
- mysql2.

Estructura:

```

Backend/
│
├── server.js
│
├── config/
│   └── db.js
│
└── package.json

```

Responsabilidades:

- Crear API REST.
- Conectar con MySQL.
- Gestionar consultas.
- Validar datos.
- Responder JSON al frontend.

---

## Base de datos

Motor:

- MySQL 8.x.

Base:

```

turismo

```

Tablas principales:

```

usuarios
categorias
que_hacer
eventos
prestadores
documentos
imagenes

```

Las consultas deben respetar la estructura existente.

No crear tablas nuevas sin justificar previamente.

---

# Comandos principales

## Frontend

Abrir proyecto:

```

code .

```

Servidor simple:

```

npx live-server

```

---

## Backend

Instalar dependencias:

```

npm install

```

Ejecutar servidor:

```

node server.js

```

Servidor esperado:

```

Servidor iniciado en puerto 3000

````

---

# Estructura del desarrollo

Antes de modificar código:

1. Revisar archivos existentes.
2. Entender la arquitectura actual.
3. Mantener convenciones usadas.
4. Evitar cambios innecesarios.

---

# Convenciones de código

## HTML

Usar:

- HTML semántico.
- Clases descriptivas.
- Buena indentación.

Ejemplo:

Correcto:

```html
<section class="destinos-container">
````

Evitar:

```html
<div class="x1">
```

---

## CSS

Mantener:

* Variables CSS cuando sea útil.
* Organización por componentes.
* Responsive design.
* Código limpio.

Orden recomendado:

1. Reset.
2. Variables.
3. Elementos generales.
4. Componentes.
5. Secciones.
6. Media queries.

---

## JavaScript

Reglas:

* No usar JavaScript inline.
* Separar lógica por archivos.
* Crear funciones con una única responsabilidad.
* Usar nombres descriptivos.

Ejemplo:

Correcto:

```javascript
function cargarActividades(){

}
```

Evitar:

```javascript
function hacerTodo(){

}
```

---

# Diseño frontend

El diseño debe seguir estas características:

## Estilo visual

* Profesional.
* Moderno.
* Turístico.
* Limpio.
* Fácil de navegar.

Inspiración:

* Naturaleza.
* Río.
* Cultura local.
* Identidad de Reconquista.

---

# Responsive Design

Todas las páginas deben funcionar correctamente en:

* Desktop.
* Notebook.
* Tablet.
* Smartphone.

Breakpoints recomendados:

```css
1200px
1024px
768px
576px
400px
```

Probar especialmente:

* Menú hamburguesa.
* Carruseles.
* Cards.
* Hero principal.
* Footer.

---

# Componentes importantes

## Navbar

Debe incluir:

* Logo.
* Navegación.
* Menú responsive.
* Animaciones suaves.

El menú móvil debe:

* Abrir correctamente.
* Cerrar al hacer click afuera.
* No bloquear contenido.
* Mantener buena accesibilidad.

---

## Hero

Debe tener:

* Imagen representativa.
* Texto claro.
* Buena adaptación móvil.

---

## Cards

Deben:

* Mantener proporciones.
* Evitar overflow.
* Adaptarse según pantalla.

---

## Carruseles

Reglas:

Desktop:

* Mostrar varios elementos.

Mobile:

* Mostrar un elemento.

Siempre comprobar:

* Botones.
* Overflow.
* Tamaño de imágenes.

---

# API

Las rutas deben seguir formato REST:

Ejemplo:

```
GET    /api/actividades
POST   /api/actividades
PUT    /api/actividades/:id
DELETE /api/actividades/:id
```

Las respuestas deben ser JSON.

Ejemplo:

```json
{
 "success": true,
 "data": []
}
```

---

# No hagas

No:

* Modificar varias áreas sin necesidad.
* Cambiar librerías sin autorización.
* Crear archivos duplicados.
* Romper estilos existentes.
* Eliminar funcionalidades funcionando.
* Cambiar estructura de base de datos sin revisar.
* Usar estilos inline.
* Mezclar frontend y backend.

---

# Flujo de trabajo

Cada cambio debe seguir:

## 1. Analizar

Revisar:

* Archivos involucrados.
* Dependencias.
* Código existente.

---

## 2. Planificar

Explicar:

* Qué se cambiará.
* Qué archivos serán afectados.
* Posibles riesgos.

---

## 3. Implementar

Realizar cambios:

* Pequeños.
* Ordenados.
* Probables de probar.

---

## 4. Probar

Verificar:

Frontend:

* Diseño.
* Responsive.
* Consola sin errores.

Backend:

* Servidor iniciado.
* Endpoints funcionando.
* Base conectada.

---

## 5. Documentar

Actualizar:

* README.md.
* Comentarios necesarios.
* Versiones.

---

# Git

Formato recomendado:

```
V0.x.x - Descripción del cambio
```

Ejemplos:

```
V0.1.9 - Mejoras responsive navbar móvil

V0.2.0 - Implementación API actividades
```

Antes de commit:

Revisar:

```
git status
```

Luego:

```
git add .
git commit -m "mensaje"
git push
```

---

# Documentación

Toda funcionalidad importante debe documentarse.

Incluir:

* Qué hace.
* Cómo funciona.
* Archivos modificados.
* Cómo probarlo.

---

# Prioridades del proyecto

Orden de importancia:

1. Funcionalidad.
2. Experiencia de usuario.
3. Diseño responsive.
4. Código limpio.
5. Documentación.
6. Optimización.

---

# Rol del asistente

Al trabajar en este proyecto:

* Actuar como desarrollador full stack.
* Respetar la arquitectura existente.
* Proponer mejoras cuando sean necesarias.
* Explicar cambios importantes.
* Evitar soluciones rápidas que generen deuda técnica.

```
```
