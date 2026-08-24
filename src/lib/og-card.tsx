/** Tarjeta que se ve al pegar el link en WhatsApp o Instagram.
 *  La comparten opengraph-image y twitter-image — cada uno declara su
 *  propio `runtime` como literal porque Next no lo reconoce reexportado. */
export const OG_SIZE = { width: 1200, height: 630 };

export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#070605",
        backgroundImage: "radial-gradient(circle at 50% 0%, #1E1A17 0%, #070605 62%)",
      }}
    >
      <svg width="86" height="86" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 26 }}>
        <circle cx="6" cy="6" r="2.4" stroke="#D2924F" strokeWidth="1.4" />
        <circle cx="6" cy="18" r="2.4" stroke="#D2924F" strokeWidth="1.4" />
        <path d="M8 7.3L20 17.2M8 16.7L20 6.8" stroke="#D2924F" strokeWidth="1.4" strokeLinecap="round" />
      </svg>

      <div style={{ fontSize: 96, letterSpacing: 10, color: "#F4F1EC", fontFamily: "serif", lineHeight: 1 }}>
        MACCIA
      </div>

      <div
        style={{
          marginTop: 22,
          fontSize: 30,
          letterSpacing: 7,
          textTransform: "uppercase",
          color: "#D2924F",
          fontFamily: "serif",
        }}
      >
        Peluquería &amp; Barbería · Martínez
      </div>

      <div style={{ marginTop: 40, fontSize: 28, color: "#B8ADA0", fontFamily: "serif", fontStyle: "italic" }}>
        Corte · Barba · Diseños craneales · Color · Academia
      </div>
    </div>
  );
}
