import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.ogTitle;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

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
          background: "#070708",
          color: "#f5f5f4",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            opacity: 0.55,
          }}
        >
          {site.shortName}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            {site.firstName}
          </div>
          <div
            style={{
              fontSize: 88,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            {site.lastName}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            opacity: 0.7,
          }}
        >
          <span>{site.role}</span>
          <span>{site.location}</span>
        </div>
      </div>
    ),
    size,
  );
}
