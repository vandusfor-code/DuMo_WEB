import { ImageResponse } from "next/og";

export const alt = "DuMo | La infraestructura detrás de cada venta";
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
          background: "#050505",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, color: "#F5F7F6", letterSpacing: "-0.04em" }}>
          DuMo
        </div>
        <div
          style={{
            fontSize: 64,
            lineHeight: 0.95,
            color: "#F5F7F6",
            letterSpacing: "-0.05em",
            maxWidth: 860,
          }}
        >
          La infraestructura detrás de cada venta.
        </div>
      </div>
    ),
    size,
  );
}
