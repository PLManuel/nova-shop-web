# Plan de Proyecto - TA1: E-commerce "NovaShop" (CI/CD)

## 1. Contexto del Proyecto
Este repositorio forma parte de una evaluación para el curso "Herramientas de Desarrollo Profesional TIC". El objetivo principal NO es construir un e-commerce complejo, sino tener una aplicación funcional que sirva como base para demostrar un flujo de Integración y Entrega Continua (CI/CD) automatizado.

**Caso de Estudio (NovaShop):**
- **Arquitectura:** Microservicios. Nosotros somos el equipo de Frontend. El Backend no existe en este repositorio; se simulará consumiendo un archivo JSON estático (Mock Data).
- **Necesidad:** Validar el código automáticamente (Linting y Testing) y desplegarlo en producción (Vercel) sin intervención manual cada vez que se haga push a la rama `main`.

## 2. Stack Tecnológico
- **Core:** React, TypeScript, Vite (con React Compiler).
- **Estilo de Código:** `@antfu/eslint` (Reglas estrictas).
- **Pruebas:** Vitest + React Testing Library.
- **CI/CD:** GitHub Actions.
- **Hosting:** Vercel.

## 3. Hoja de Ruta (Fases de Desarrollo)

### Fase 1: Limpieza y Estandarización
- Limpiar el template por defecto de Vite (eliminar logos, estilos innecesarios, dejar un `App.tsx` limpio).
- Instalar y configurar `@antfu/eslint` adaptado a React/Vite.
- Asegurar que el comando `npm run lint` funcione correctamente y no arroje errores.

### Fase 2: Construcción del Frontend (Simulado)
- Crear `src/data/products.json` con 5-6 productos ficticios (id, nombre, precio, imagen_url simulada).
- Crear una interfaz limpia y minimalista.
- **Componentes mínimos:**
  1. Un `ProductList` para mostrar el catálogo.
  2. Un `Cart` (Carrito) que permita agregar productos, ver el total y vaciar el carrito (usando el estado de React).

### Fase 3: Pruebas Automatizadas (Testing)
- Instalar y configurar `vitest` y `@testing-library/react`.
- Crear un script `npm run test` (o `npm run test:run` para CI).
- **Pruebas requeridas:**
  1. Verificar que el componente del carrito se renderiza vacío inicialmente.
  2. Verificar que la lista de productos se renderiza leyendo la data mockeada.

### Fase 4: Pipeline CI/CD (GitHub Actions)
- Crear el archivo `.github/workflows/deploy.yml`.
- **Pasos del Pipeline:**
  1. Checkout del código.
  2. Setup Node.js (v18 o v20).
  3. `npm install`.
  4. `npm run lint` (Si falla, se detiene).
  5. `npm run test` (Si falla, se detiene).
  6. `npm run build` (Compilación con Vite).
  7. Despliegue en Vercel usando la action `amondnet/vercel-action@v20`.

## 4. Instrucciones Generales para la IA (Asistente)
- Lee este documento siempre que necesites contexto sobre qué estamos construyendo.
- Escribe código limpio, moderno (Hooks, Functional Components) y estrictamente tipado (TypeScript).
- No uses librerías externas de UI pesadas (como Material UI o Bootstrap) a menos que se solicite; usa CSS puro o Tailwind si ya está configurado, para mantener el proyecto ligero.
- Al terminar cada fase, realiza un commit atómico siguiendo la convención de *Conventional Commits* (ej. `feat: add shopping cart logic`, `chore: setup eslint`).