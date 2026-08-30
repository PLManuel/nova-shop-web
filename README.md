# NovaShop

E-commerce frontend de demostración construido con React y TypeScript. El objetivo principal del proyecto es implementar un flujo de **CI/CD automatizado** (GitHub Actions → Vercel) que valide el código con linting y tests antes de cada despliegue.

[![CI/CD](https://github.com/PLManuel/nova-shop-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/PLManuel/nova-shop-web/actions/workflows/deploy.yml)
[![Deploy](https://img.shields.io/badge/Vercel-deployed-brightgreen?logo=vercel)](https://nova-shop-web.vercel.app/)

## Demo

🔗 **[nova-shop-web.vercel.app](https://nova-shop-web.vercel.app/)**

## Stack

| Tecnología | Uso |
|---|---|
| [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | UI y tipado estático |
| [Vite 8](https://vite.dev/) + React Compiler | Bundler y compilación optimizada |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilos utilitarios |
| [@antfu/eslint-config](https://github.com/antfu/eslint-config) | Linting estricto |
| [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) | Pruebas unitarias |
| [GitHub Actions](https://docs.github.com/en/actions) | Pipeline CI/CD |
| [Vercel](https://vercel.com/) | Hosting y despliegue |

## Pipeline CI/CD

Cada push a `main` ejecuta el siguiente pipeline. El despliegue solo ocurre si **todos** los pasos anteriores pasan.

```
lint ──┐
       ├──► build ──► deploy (Vercel)
test ──┘
```

| Job | Descripción |
|---|---|
| **Lint** | `pnpm run lint` — revisa estilo y calidad del código |
| **Test** | `pnpm run test:run` — ejecuta la suite de Vitest |
| **Build** | `pnpm run build` — compila con TypeScript + Vite |
| **Deploy** | `vercel --prod` — publica en producción |

## Estructura del proyecto

```
src/
├── components/
│   ├── Cart.tsx          # Carrito: lista de items, total y botón "Clear"
│   ├── ProductCard.tsx   # Tarjeta individual de producto
│   └── ProductList.tsx   # Grilla de productos
├── data/
│   └── products.json     # Mock data con 6 productos
├── test/
│   ├── setup.ts          # Configuración de @testing-library/jest-dom
│   ├── Cart.test.tsx     # Tests del componente Cart
│   └── ProductList.test.tsx  # Tests del componente ProductList
├── types/
│   └── product.ts        # Interfaces Product y CartItem
├── App.tsx               # Raíz: estado del carrito y layout principal
├── App.css               # Estilos globales de la app
└── main.tsx              # Entry point
```

## Desarrollo local

**Requisitos:** Node.js ≥ 22, pnpm ≥ 11

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo con HMR
pnpm run dev

# Linting
pnpm run lint

# Tests en modo watch
pnpm run test

# Tests (una sola ejecución, para CI)
pnpm run test:run

# Compilación de producción
pnpm run build
```

## Licencia

MIT