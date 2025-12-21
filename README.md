# Restaurante Menu

Landing page minimalista para mostrar un menú bilingüe (ES/EN) optimizado para móviles. Sin dependencias ni CDNs, lista para publicarse con GitHub Pages.

## Estructura del proyecto
- `index.html`: punto de entrada, referencia a los estilos y JS.
- `src/styles/style.css`: estilos oscuros con acento teal.
- `src/js/main.js`: lógica de render y cambio de idioma (ES/EN).
- `src/data/menu.js`: contenido del menú en ambos idiomas.
- `utils/`, `config/`, `services/`, `routes/`, `tests/`: carpetas reservadas para extensiones futuras.

## Activar GitHub Pages
1. Haz push del repositorio a GitHub (rama `main`).
2. En GitHub, ve a **Settings > Pages**.
3. En **Source**, selecciona **Deploy from a branch**.
4. En **Branch**, elige `main` y la carpeta **/(root)**.
5. Guarda. En unos minutos tendrás el sitio publicado.

## URL final para el QR
Si el repo se llama `restaurante-menu` en tu cuenta, el link será:
```
https://<tu-usuario>.github.io/restaurante-menu/
```
Reemplaza `<tu-usuario>` por tu usuario real en GitHub.

## Cómo editar el menú (textos y precios)
1. Abre `src/data/menu.js`.
2. Cada categoría tiene `name` y `items` con traducciones en `es` y `en`.
3. Ajusta `name`, `description` y `price` en el idioma correspondiente.
4. Guarda y vuelve a construir/desplegar (para GitHub Pages basta con hacer commit y push a `main`).

## Desarrollo local
Solo necesitas un servidor estático. Ejemplo con Python 3:
```
python -m http.server 8000
```
Luego abre `http://localhost:8000/` en tu navegador.
