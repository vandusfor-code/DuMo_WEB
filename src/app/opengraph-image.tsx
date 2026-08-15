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
          background: "#F8FAFC",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            color: "#0F172A",
          }}
        >
          Dumo
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              color: "#0F172A",
              maxWidth: 820,
            }}
          >
            Convertimos oportunidades en clientes.
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 24,
              color: "#475569",
            }}
          >
            Adquisición y conversión comercial
          </div>
        </div>
      </div>
    ),
    size,
  );
}
