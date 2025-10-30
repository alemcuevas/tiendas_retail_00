# Mi Página Web

Una página web moderna y responsiva creada con HTML, CSS y JavaScript puro.

## Características

- **Diseño responsivo**: Se adapta a todos los dispositivos.
- **Navegación suave**: Scroll animado entre secciones.
- **Menú hamburguesa**: Para dispositivos móviles.
- **Formulario funcional**: Con validación de datos.
- **Animaciones CSS**: Efectos visuales atractivos.
- **Atajos de teclado**: Para navegación rápida. 

## Estructura de archivos

```
mi-pagina-web/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript funcional
└── README.md           # Este archivo
```

## Cómo ejecutar

### Opción 1: Abrir directamente
1. Abre el archivo `index.html` en tu navegador web

### Opción 2: Servidor local simple
1. Abre una terminal en la carpeta del proyecto
2. Ejecuta uno de estos comandos:

**Con Python 3:**
```bash
python -m http.server 8000
```

**Con Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Con Node.js (si tienes npx):**
```bash
npx serve .
```

**Con PHP:**
```bash
php -S localhost:8000
```

3. Abre tu navegador en `http://localhost:8000`

## Secciones incluidas

1. **Header**: Navegación principal con logo y menú
2. **Hero**: Sección de bienvenida con llamada a la acción
3. **Sobre Mí**: Información personal/empresarial
4. **Servicios**: Tarjetas de servicios con iconos
5. **Contacto**: Formulario funcional e información de contacto
6. **Footer**: Información de copyright

## Características técnicas

- **HTML5 semántico**: Estructura clara y accesible
- **CSS Grid y Flexbox**: Para layouts modernos
- **Variables CSS**: Para fácil personalización
- **JavaScript vanilla**: Sin dependencias externas
- **Intersection Observer**: Para animaciones al scroll
- **Event listeners**: Para interactividad
- **Responsive design**: Mobile-first approach

## Atajos de teclado

- `Alt + H`: Ir al inicio
- `Alt + C`: Ir a contacto
- `Escape`: Cerrar menú móvil

## Personalización

### Colores
Modifica las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    /* ... más colores */
}
```

### Contenido
- Edita `index.html` para cambiar textos e imágenes
- Modifica `script.js` para agregar más funcionalidad

## Compatibilidad

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Sin dependencias

Esta página web no requiere:
- Node.js
- Frameworks como React, Vue, Angular
- Herramientas de construcción como Vite, Webpack
- Librerías externas como jQuery, Bootstrap

Todo está creado con tecnologías web nativas.