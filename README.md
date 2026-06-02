# NES Landing

Landing page inmersiva para No Emprendas Solo. Proyecto **independiente** del
app principal — su único objetivo es captar visitantes y dirigirlos al login.

- **Stack**: Vite + React 19 + TypeScript + Tailwind v4 (puro CSS + React)
- **Sin dependencias de animación** (todo CSS keyframes + React state)
- **Destino del CTA**: configurable via `VITE_LOGIN_URL` (por defecto
  `https://no-emprendas-solo.vercel.app/login`).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173.

## Despliegue en Vercel

1. Crea un nuevo repositorio en GitHub y haz push de este proyecto.
2. En [Vercel](https://vercel.com/new), importa el repo.
3. Vercel detecta el framework Vite automáticamente — sin configuración extra.
4. (Opcional) En **Project Settings → Environment Variables** añade
   `VITE_LOGIN_URL` con la URL final del login si decides moverlo a otro
   dominio. Por defecto apunta al login en producción.

## Estructura

```
src/
├── App.tsx                     # Orquesta intro + secciones
├── lib/loginUrl.ts             # URL del login externo
├── styles/landing.css          # Keyframes globales
└── components/landing/
    ├── MatrixRain.tsx          # Canvas de la lluvia de código
    ├── IntroSequence.tsx       # Matrix → mensaje → pills (red/blue)
    ├── MagneticButton.tsx      # Botón que atrae el cursor
    ├── HeroSection.tsx         # Hero brutalista + parallax
    ├── BreakRulesSection.tsx   # Cartas drag-to-destroy
    ├── HorizontalBenefits.tsx  # Scroll horizontal de beneficios
    └── FinalCTASection.tsx     # CTA final con aura y haces de luz
```

## Flujo

1. **Intro** (solo primera visita por sesión): Matrix Rain → mensaje de
   tribu → elección red/blue pill. Red = glitch reveal hacia la landing.
   Blue = TV-off animation y vuelve al inicio. Se memoriza en
   `sessionStorage` para no martillear al usuario.
2. **Landing**:
   - Hero con titular brutalista, parallax del cursor y CTA magnético.
   - "Lo que te frena": 5 cartas arrastrables/clickables que al destruirse
     todas revelan "Esta es tu tribu".
   - Scroll horizontal espacial con 4 beneficios en glassmorphism.
   - CTA final con haces de luz convergiendo y botón pulsante "Cruzar el
     umbral" → abre la web del login.
