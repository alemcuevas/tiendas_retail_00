# 🛍️ Tiendas Retail - Sitio Web Corporativo

> Una plataforma web moderna y responsiva diseñada para empresas del sector retail, construida con tecnologías web nativas (HTML5, CSS3, JavaScript ES6+).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-green?style=flat-square)

## ✨ Características Principales

- 📱 **Diseño Responsivo**: Experiencia optimizada para móviles, tablets y escritorio
- 🚀 **Navegación Fluida**: Scroll suave y animaciones CSS nativas
- 🍔 **Menú Hamburguesa**: Navegación intuitiva en dispositivos móviles
- ✅ **Formularios Validados**: Sistema de contacto con validación en tiempo real
- 🎨 **Animaciones Modernas**: Efectos visuales atractivos sin librerías externas
- ⚡ **Rendimiento Optimizado**: Carga rápida sin dependencias de terceros
- ♿ **Accesibilidad**: Compatibilidad con lectores de pantalla y navegación por teclado
- 🎯 **SEO Friendly**: Estructura semántica optimizada para motores de búsqueda

## 📁 Estructura del Proyecto

```
tiendas_retail_00/
├── 📄 index.html          # Página principal con estructura semántica
├── 🎨 styles.css          # Estilos CSS con variables customizables
├── ⚡ script.js           # Lógica JavaScript modular
├── 📝 README.md           # Documentación del proyecto
└── 📜 LICENSE             # Licencia del proyecto
```

## 🚀 Inicio Rápido

### Opción 1: Visualización Directa

1. Clona el repositorio:

   ```bash
   git clone https://github.com/alemcuevas/tiendas_retail_00.git
   cd tiendas_retail_00
   ```

2. Abre `index.html` en tu navegador web favorito

### Opción 2: Servidor Local (Recomendado)

Para una experiencia completa con todas las funcionalidades:

1. **Con Python 3:**
   ```bash
   python -m http.server 8000
   ```

2. **Con Node.js:**
   ```bash
   npx serve . -p 8000
   ```

3. **Con PHP:**
   ```bash
   php -S localhost:8000
   ```

4. **Con VS Code Live Server:**
   - Instala la extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

5. Visita `http://localhost:8000` en tu navegador

## 🏗️ Arquitectura y Secciones

### Estructura de Navegación

```text
🏠 Header
├── 🏷️ Logo/Marca
├── 🧭 Navegación Principal
└── 🍔 Menú Móvil (Hamburguesa)

📄 Contenido Principal
├── 🎯 Hero Section - Llamada a la acción
├── 👤 Sobre Nosotros - Información corporativa
├── 🛍️ Servicios - Catálogo de ofertas
├── 📞 Contacto - Formulario y datos
└── 🏢 Footer - Información legal
```

## ⚙️ Características Técnicas

### Frontend Moderno

- **HTML5 Semántico**: Estructura accesible y SEO optimizada
- **CSS Grid & Flexbox**: Layouts adaptativos sin frameworks
- **Custom Properties**: Variables CSS para tematización
- **Intersection Observer API**: Animaciones eficientes al scroll
- **ES6+ JavaScript**: Código modular y mantenible

### Optimizaciones de Rendimiento

- ⚡ **Zero Dependencies**: Sin librerías externas
- 🎯 **Mobile-First**: Diseño progresivo desde móvil
- 🖼️ **Lazy Loading**: Carga diferida de contenido pesado
- 📱 **Progressive Enhancement**: Funcionalidad escalonada

## ⌨️ Atajos de Teclado

| Combinación | Acción |
|------------|--------|
| `Alt + H` | Navegar al inicio |
| `Alt + C` | Ir a contacto |
| `Escape` | Cerrar menú móvil |
| `Tab` | Navegación secuencial |

## 🎨 Personalización

### 🎨 Paleta de Colores

Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #3498db;    /* Azul corporativo */
    --secondary-color: #2c3e50;  /* Gris oscuro */
    --accent-color: #e74c3c;     /* Rojo de acento */
    --text-color: #333;          /* Texto principal */
    --bg-color: #ffffff;         /* Fondo principal */
}
```

### 📝 Contenido Personalizable

- **Textos**: Edita `index.html` para actualizar contenido
- **Estilos**: Modifica `styles.css` para cambios visuales  
- **Funcionalidad**: Extiende `script.js` para nuevas características

## 🌐 Compatibilidad de Navegadores

| Navegador | Versión Mínima | Estado |
|-----------|----------------|--------|
| Chrome | 60+ | ✅ Totalmente compatible |
| Firefox | 55+ | ✅ Totalmente compatible |
| Safari | 12+ | ✅ Totalmente compatible |
| Edge | 79+ | ✅ Totalmente compatible |
| IE | 11+ | ⚠️ Soporte limitado |

## 🔧 Desarrollo

### Requisitos Previos

- Editor de código (VS Code recomendado)
- Navegador web moderno
- Servidor local (opcional pero recomendado)

### Scripts Disponibles

```bash
# Validar HTML
npx html-validate index.html

# Formatear código
npx prettier --write "*.{html,css,js}"

# Servidor de desarrollo
npx live-server --port=8080
```

## 🚫 Sin Dependencias Externas

Este proyecto es **framework-free** y no requiere:

- ❌ Node.js/npm para funcionamiento
- ❌ React, Vue, Angular
- ❌ Vite, Webpack, Parcel
- ❌ jQuery, Bootstrap, Tailwind
- ❌ Proceso de build/compilación

✅ **Solo tecnologías web nativas**: HTML5, CSS3, JavaScript ES6+

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

¿Necesitas ayuda? Contacta con nosotros:

- 📧 **Email**: [soporte@tiendasretail.com](mailto:soporte@tiendasretail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/alemcuevas/tiendas_retail_00/issues)
- 📖 **Documentación**: [Wiki del proyecto](https://github.com/alemcuevas/tiendas_retail_00/wiki)

---

## 🛍️ Tiendas Retail

> Transformando la experiencia digital del comercio

[Sitio Web](https://alemcuevas.github.io/tiendas_retail_00) • [Documentación](https://github.com/alemcuevas/tiendas_retail_00/wiki) • [Reportar Bug](https://github.com/alemcuevas/tiendas_retail_00/issues)