# 🌿 GRECA Café Bar — Experiencia Gastronómica Digital

<div align="center">

[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4.0-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11.20.0-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![License: MIT with Attribution](https://img.shields.io/badge/License-MIT%20Attribution-203428?style=for-the-badge)](./LICENSE)

<p align="center">
  <b>Una plataforma web mobile-first de alta gama diseñada para transformar el menú tradicional en un ritual interactivo, sensorial y memorable.</b>
</p>

[Explorar Menú](#-características-destacadas) • [Instalación](#-instalación-y-uso) • [Arquitectura](#-arquitectura-del-proyecto) • [Sistema de Diseño](#-sistema-de-diseño) • [Licencia](#-créditos-y-licencia)

</div>

---

## ☕ Visión General

**GRECA Café Bar** es una experiencia web desarrollada a medida para elevar la identidad de un café y bar de especialidad. Combina narrativa visual cinemática, interacción táctil fluida y una estética editorial cálida inspirada en los tonos orgánicos del café y la tierra.

La aplicación fue concebida bajo la filosofía **Mobile-First**, garantizando que los comensales en el local disfruten de una carga ultrarrápida, navegación intuitiva con una sola mano y transiciones visuales de estándar nativo.

---

## ✨ Características Destacadas

### 🎬 Scrollytelling con Canvas Frame Sequence
En lugar de reproductores de video pesados que sufren latencia de decodificación en smartphones, el hero principal utiliza una secuencia de 144 fotogramas en formato WebP renderizados dinámicamente sobre un elemento `<canvas>` sincronizado con el scroll y Lenis Smooth Scroll.

### 🍽️ Menú Digital Dinámico y Tipado
- Filtrado instantáneo por categorías: **Desayunos**, **Tardear**, **Sándwiches**, **Cafés** y **Bebidas**.
- Subcategorías organizadas con precios actualizados y descripciones artesanales.
- Fuente de verdad desacoplada y tipada en [`src/data/menuData.ts`](file:///Users/santiago/proyectos/greca-cafe-bar/src/data/menuData.ts).

### 📍 Mapa Interactivo Expandible (`expand-map`)
Componente modular que presenta las coordenadas y ubicación física (Roldanillo, Valle del Cauca), permitiendo al usuario expandir una vista satelital/croquis e interactuar directamente hacia aplicaciones de navegación.

### 🫧 Microinteracciones y Botón Liquid Glass
Botones y controles con acabados de **Glassmorphism** y refracción luminosa tipo iOS, diseñados con `framer-motion` para brindar retroalimentación táctil de alta fidelidad.

### 📱 Barra de Navegación Flotante (`BottomNav`)
Acceso rápido y persistente en la zona inferior de la pantalla para saltar entre *Inicio*, *Menú*, *Ubicación* y *Contacto directo por WhatsApp*.

### 🔍 SEO Local y Datos Estructurados
- Metadatos Open Graph y Twitter Cards enriquecidos.
- Esquema semántico `JSON-LD` con formato `Restaurant` para posicionamiento óptimo en Google Search y Google Maps.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Core** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Base reactiva con tipado estricto de componentes y datos del menú |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Entorno de desarrollo ultrarrápido y empaquetado optimizado |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) | Utilidades modernas con soporte de variables nativas y alto rendimiento |
| **Animación** | [Framer Motion](https://www.framer.com/motion/) | Animaciones de layout, transiciones de entrada y efectos interactivos |
| **Scroll Engine** | [Lenis](https://lenis.darkroom.engineering/) | Control de inercia y suavizado de scroll para la experiencia canvas |
| **Iconos** | [Lucide React](https://lucide.dev/) | Iconografía minimalista, accesible y consistente |
| **Despliegue** | [Cloudflare Workers / Wrangler](https://developers.cloudflare.com/workers/) | Infraestructura global edge con entrega instantánea de assets estáticos |
| **Gestor de Paquetes** | [pnpm](https://pnpm.io/) | Manejo eficiente, rápido y determinista de dependencias |

---

## 📂 Arquitectura del Proyecto

```text
greca-cafe-bar/
├── public/                     # Assets estáticos servidos en la raíz
│   ├── frames/                 # 144 cuadros secuenciales WebP para el hero
│   ├── og-image.png            # Open Graph banner para redes sociales
│   ├── llms.txt                # Contexto optimizado para agentes de IA
│   └── robots.txt              # Directivas de indexación para motores de búsqueda
├── src/
│   ├── components/             # Componentes modulares de interfaz
│   │   ├── ui/                 # Primitivas reutilizables (sliders, tabs)
│   │   │   ├── image-auto-slider.tsx
│   │   │   └── slide-tabs.tsx
│   │   ├── BottomNav.tsx       # Barra de navegación flotante inferior
│   │   ├── CanvasFramePlayer.tsx # Reproductor canvas de fotogramas
│   │   ├── expand-map.tsx      # Mapa interactivo y expansible
│   │   ├── FooterSection.tsx   # Información de contacto, horarios y WhatsApp
│   │   ├── LiquidGlassButton.tsx # Botón con efecto visual de vidrio líquido
│   │   ├── MenuSection.tsx     # Explorador y filtrado de la carta gastronómica
│   │   └── scroll-expansion-hero.tsx # Hero interactivo guiado por scroll
│   ├── data/
│   │   └── menuData.ts         # Fuente de datos centralizada de platos y bebidas
│   ├── lib/
│   │   └── utils.ts            # Utilidades de mezcla de clases (clsx, twMerge)
│   ├── App.tsx                 # Composición principal de la vista
│   ├── index.css               # Tokens globales, fuentes y utilidades CSS
│   └── main.tsx                # Punto de entrada de la aplicación React
├── wrangler.jsonc              # Configuración de despliegue en Cloudflare Workers
├── vite.config.ts              # Configuración de Vite y plugins
├── package.json                # Scripts y dependencias del proyecto
└── LICENSE                     # Licencia de software con atribución
```

---

## 🚀 Instalación y Uso

> [!IMPORTANT]
> Este proyecto utiliza exclusivamente **`pnpm`** como gestor de paquetes. No utilices `npm`, `yarn` ni `bun`.

### Requisitos Previos
- **Node.js**: v18.0.0 o superior.
- **pnpm**: v10 o superior (`corepack enable pnpm` o `npm i -g pnpm`).

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/greca-cafe-bar.git
cd greca-cafe-bar
```

### 2. Instalar dependencias
```bash
pnpm install
```

### 3. Entorno de desarrollo
Inicia el servidor local con soporte para acceso en red local (útil para pruebas directas en teléfonos móviles):
```bash
pnpm run dev
```

### 4. Construcción para producción
Compila el código TypeScript y genera el bundle minimizado:
```bash
pnpm run build
```

### 5. Previsualización y Despliegue
Previsualizar localmente mediante el emulador de Cloudflare Workers:
```bash
pnpm run preview
```

Desplegar directamente a Cloudflare:
```bash
pnpm run deploy
```

---

## 🎨 Sistema de Diseño

El diseño transmite confort, artesanía y modernidad a través de una paleta cromática sobria y tipografías expresivas:

### Paleta Cromática
- **`#203428` (Bosque Profundo)**: Color principal de base; aporta sobriedad, elegancia y contraste orgánico.
- **`#A65F46` (Terracota)**: Color de acento cálido; evoca la arcilla, el tostado del café y estimula el apetito.
- **`#FDFCF9` (Crema Suave)**: Superficie neutra para lecturas cómodas y fondos luminosos.

### Tipografía
- **Títulos y Marca (`--font-heading`)**: Elegante, refinada y con personalidad editorial.
- **Cuerpo de Texto (`--font-body` / `--font-sans`)**: Sans-serif contemporánea de alta legibilidad en pantallas táctiles.
- **Acentos Caligráficos (`--font-cursive`)**: Detalles humanistas para notas de invitación y firmas visuales.

---

## 👥 Créditos y Licencia

Este proyecto fue ideado y creado por:
- **Santiago Prada Moreno**
- **Danna Sofia Arias Montes**

### Licencia
Distribuido bajo la [Licencia MIT con Cláusula de Atribución Visible](file:///Users/santiago/proyectos/greca-cafe-bar/LICENSE).

> **Condición de uso**: Se autoriza el uso libre y comercial del software, con la condición obligatoria de preservar el aviso de copyright y **mostrar una atribución visible y destacada** a sus creadores originales (*"Created by Santiago Prada Moreno & Danna Sofia Arias Montes"*) en la interfaz de usuario, pie de página o documentación principal de cualquier aplicación o derivado público.

---

<div align="center">
  <sub>Diseñado con pasión para GRECA Café Bar.</sub>
</div>
