const sectionStyle: React.CSSProperties = {
  marginBottom: "2.25rem",
}

const headingStyle: React.CSSProperties = {
  color: "#fff",
  fontSize: "1.15rem",
  fontWeight: 700,
  letterSpacing: "-0.01em",
  margin: "0 0 0.75rem",
}

const paragraphStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.68)",
  fontSize: "0.98rem",
  lineHeight: 1.75,
  margin: "0 0 0.9rem",
}

export default function PrivacyPage() {
  return (
    <div
      style={{
        minHeight: "100svh",
        background:
          "radial-gradient(ellipse at top, #0a0f1a 0%, #050505 60%, #000 100%)",
        color: "#fff",
        fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
      }}
    >
      {/* ─── Header ─── */}
      <header
        style={{
          padding: "1.4rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span style={{ fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.05em" }}>
          NES<span style={{ color: "#3b82f6" }}>.</span>
        </span>
        <a
          href="/"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.85rem",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 999,
            padding: "0.5rem 1.1rem",
          }}
        >
          ← Volver
        </a>
      </header>

      {/* ─── Contenido ─── */}
      <main
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "3rem 1.5rem 5rem",
        }}
      >
        <p
          style={{
            color: "#22d3ee",
            fontSize: "0.74rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
            margin: "0 0 0.75rem",
          }}
        >
          No Emprendas Solo
        </p>
        <h1
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: "0 0 0.5rem",
          }}
        >
          Política de privacidad
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", margin: "0 0 3rem" }}>
          Última actualización: 14 de julio de 2026
        </p>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>1. Responsable del tratamiento</h2>
          <p style={paragraphStyle}>
            El responsable del tratamiento de tus datos es Siera, en adelante
            «NES» o «No Emprendas Solo». Puedes contactar con nosotros en{" "}
            <a href="mailto:siera.canal.yt@gmail.com" style={{ color: "#22d3ee" }}>
              siera.canal.yt@gmail.com
            </a>{" "}
            para cualquier cuestión relacionada con tus datos personales.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>2. Qué datos recogemos</h2>
          <p style={paragraphStyle}>
            Cuando te apuntas a la lista de espera de NES a través del formulario de
            la landing, recogemos:
          </p>
          <ul style={{ ...paragraphStyle, paddingLeft: "1.25rem" }}>
            <li>Tu email (obligatorio, para poder contactarte).</li>
            <li>
              Opcionalmente: tu nombre, en qué proyecto estás trabajando, la fase en
              la que se encuentra, qué esperas encontrar en NES, y las horas
              semanales que le dedicas.
            </li>
          </ul>
          <p style={paragraphStyle}>
            No recogemos ningún otro dato personal a través de este formulario.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>3. Para qué usamos tus datos</h2>
          <p style={paragraphStyle}>
            Usamos tus datos únicamente para:
          </p>
          <ul style={{ ...paragraphStyle, paddingLeft: "1.25rem" }}>
            <li>Gestionar tu posición en la lista de espera.</li>
            <li>Enviarte el email de confirmación de tu solicitud (doble opt-in).</li>
            <li>
              Avisarte cuando se abra tu acceso o una nueva cohorte de la beta.
            </li>
            <li>Contarte novedades relevantes sobre el lanzamiento de NES.</li>
          </ul>
          <p style={paragraphStyle}>
            No usamos tus datos con ningún otro fin, no los vendemos ni los cedemos
            a terceros distintos de los proveedores necesarios para prestar el
            servicio (ver sección 5).
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>4. Base legal</h2>
          <p style={paragraphStyle}>
            La base legal para tratar tus datos es tu{" "}
            <strong style={{ color: "#fff" }}>consentimiento explícito</strong>,
            otorgado al marcar la casilla de consentimiento en el formulario antes
            de enviarlo. Puedes retirar este consentimiento en cualquier momento
            (ver sección 7).
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>5. Encargados del tratamiento</h2>
          <p style={paragraphStyle}>
            Para prestar el servicio, compartimos tus datos con estos proveedores,
            que actúan como encargados del tratamiento bajo sus propias políticas
            de privacidad y acuerdos de protección de datos:
          </p>
          <ul style={{ ...paragraphStyle, paddingLeft: "1.25rem" }}>
            <li>
              <strong style={{ color: "#fff" }}>Supabase</strong> — almacena tu
              registro en la lista de espera (base de datos e infraestructura).
            </li>
            <li>
              <strong style={{ color: "#fff" }}>Resend</strong> — envía los emails
              de confirmación y las comunicaciones sobre el lanzamiento.
            </li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>6. Cuánto tiempo conservamos tus datos</h2>
          <p style={paragraphStyle}>
            Conservamos tus datos mientras dure tu relación con la lista de espera
            de NES, o hasta que solicites tu baja o el ejercicio de tu derecho de
            supresión. Si NES se lanza y decides no continuar, tus datos se
            eliminan al darte de baja.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>7. Tus derechos</h2>
          <p style={paragraphStyle}>
            Bajo el RGPD, tienes derecho a acceder a tus datos, rectificarlos,
            suprimirlos («derecho al olvido»), limitar su tratamiento, oponerte a
            él, y a la portabilidad de tus datos. Para ejercer cualquiera de estos
            derechos, escríbenos a{" "}
            <a href="mailto:siera.canal.yt@gmail.com" style={{ color: "#22d3ee" }}>
              siera.canal.yt@gmail.com
            </a>
            . Responderemos en el plazo máximo que marca la ley.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>8. Cómo darte de baja</h2>
          <p style={paragraphStyle}>
            Cada email que te enviemos incluye un enlace de baja al final. Al
            usarlo, dejamos de enviarte comunicaciones y eliminamos tu registro de
            la lista de espera. También puedes pedir tu baja escribiendo a{" "}
            <a href="mailto:siera.canal.yt@gmail.com" style={{ color: "#22d3ee" }}>
              siera.canal.yt@gmail.com
            </a>
            .
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>9. Cambios en esta política</h2>
          <p style={paragraphStyle}>
            Si cambiamos esta política, actualizaremos la fecha de «última
            actualización» al principio de esta página.
          </p>
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.78rem",
            lineHeight: 1.6,
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          Este texto es un mínimo viable legal y no constituye asesoría jurídica.
          Revísalo con un profesional antes de publicarlo.
        </p>
      </main>
    </div>
  )
}
