import { ImageResponse } from "next/og";

export const alt = "Dumo | Convertimos oportunidades en clientes.";
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
            color: "#0D0F12",
          }}
        >
          Dumo
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 0.9,
              fontWeight: 540,
              letterSpacing: "-0.05em",
              color: "#0D0F12",
              maxWidth: 860,
            }}
          >
            Convertimos oportunidades en clientes.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
