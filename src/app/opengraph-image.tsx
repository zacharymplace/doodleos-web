import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "DoodleOS legacy companion software";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#d8d2bd",
          color: "#0f172a",
          padding: 48,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "6px solid #0f172a",
            background: "#ece9d8",
            boxShadow: "12px 12px 0 #0f172a",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: 72,
              background: "#1f3c88",
              color: "white",
              borderBottom: "6px solid #0f172a",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 28px",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            <span>CONTROL_PANEL.EXE</span>
            <span>_ □ ×</span>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 56,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                width: "fit-content",
                border: "4px solid #0f172a",
                background: "#fff7cc",
                padding: "10px 16px",
                fontSize: 26,
                fontWeight: 800,
                marginBottom: 32,
              }}
            >
              DOODLEOS 95 MODE
            </div>

            <div
              style={{
                fontSize: 82,
                lineHeight: 0.95,
                fontWeight: 900,
                maxWidth: 920,
              }}
            >
              The family computer says your doodle is unstable.
            </div>

            <div
              style={{
                marginTop: 36,
                fontSize: 30,
                lineHeight: 1.3,
                maxWidth: 900,
              }}
            >
              Fake legacy companion software for diagnosing golden doodle chaos.
              Recall remains in beta.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
