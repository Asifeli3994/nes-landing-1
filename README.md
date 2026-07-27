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

## Lista de espera: puesta en marcha

El flujo completo (captación → confirmación → bienvenida → seguimientos →
apertura de cohorte) está desplegado, pero **no sale ni un email hasta que se
configure Resend**. Sin esas claves nadie confirma, y sin confirmar nadie recibe
puesto en la cola.

### 1. Resend

1. Crear cuenta en [resend.com](https://resend.com).
2. Domains → Add Domain → `noemprendassolo.com`, y añadir los registros DNS
   (SPF, DKIM y DMARC) donde esté el dominio. Sin dominio verificado Resend solo
   deja enviar al correo con el que se registró la cuenta.
3. API Keys → Create API Key, permiso *Sending access*.

### 2. Secrets en Supabase

Dashboard → Project Settings → Edge Functions → Secrets:

| Secret | Valor |
| --- | --- |
| `RESEND_API_KEY` | la key del paso anterior (obligatorio) |
| `RESEND_FROM` | `No Emprendas Solo <hola@noemprendassolo.com>` |
| `SITE_URL` | URL de esta landing |
| `LOGIN_URL` | login de la app, destino del email de invitación |

`CONFIRM_BASE_URL` ya no hace falta: se deriva de `SUPABASE_URL`.

### 3. Clave para el cron

El cron de seguimientos (`waitlist-followups`, martes y viernes a las 09:00 UTC)
lee la service role key desde Vault, para no dejarla escrita dentro del job.
Una sola vez, en el SQL Editor:

```sql
select vault.create_secret('<SERVICE_ROLE_KEY>', 'service_role_key');
```

### 4. Comprobar que funciona

Apuntarse desde la landing con un correo real y verificar que llega el email de
confirmación, que al pulsarlo devuelve a la landing con el puesto asignado, y
que llega la bienvenida.

### Abrir la cohorte

Desde `/admin` de la app principal, sección **Abrir cohorte**: «Ver a quién»
muestra a quién le tocaría (no envía nada) y «Enviar códigos» genera un código
de un solo uso por persona y lo manda. Va por orden de llegada y salta a quien
ya fue invitado o se dio de baja.

### Arquitectura

| Pieza | Qué hace |
| --- | --- |
| `waitlist` | tabla privada: anon solo puede INSERT, nadie puede leerla |
| `waitlist_emails` | registro de envíos; su PK `(waitlist_id, kind)` es lo que impide correos duplicados |
| `waitlist-mailer` | única salida de correo. Acciones: `confirm`, `welcome`, `cron`, `invite` |
| `confirm-waitlist-signup` | destino del enlace de confirmación; asigna el puesto y pide la bienvenida |
| `waitlist-unsubscribe` | baja en un clic (RGPD) |
