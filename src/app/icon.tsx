import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#070605",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="6" r="2.4" stroke="#D2924F" strokeWidth="1.8" />
          <circle cx="6" cy="18" r="2.4" stroke="#D2924F" strokeWidth="1.8" />
          <path d="M8 7.3L20 17.2M8 16.7L20 6.8" stroke="#D2924F" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
