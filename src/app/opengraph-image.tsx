import { ImageResponse } from "next/og";

export const alt = "Dumo | Adquisición y conversión comercial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F7F5",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: "-0.04em",
            color: "#111318",
          }}
        >
          Dumo
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 0.95,
              fontWeight: 550,
              letterSpacing: "-0.045em",
              color: "#111318",
              maxWidth: 860,
            }}
          >
            Convertimos oportunidades en clientes.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              color: "#5C5F66",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Adquisición · Conversión · Activación
          </div>
        </div>
      </div>
    ),
    size,
  );
}
