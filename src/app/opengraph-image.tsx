import { ImageResponse } from "next/og";

export const alt = "NexaFlow - AI Data Automation Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #F1F6F4 0%, #D9E8E2 50%, #114C5A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#172B36",
            fontFamily: "monospace",
          }}
        >
          NexaFlow
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#114C5A",
            marginTop: 16,
            fontFamily: "sans-serif",
          }}
        >
          Next-Gen AI Data Automation Platform
        </div>
      </div>
    ),
    { ...size }
  );
}
