import localFont from "next/font/local";

export const gilroy = localFont({
  src: [
    { path: "./gilroy/Gilroy-Regular.woff", weight: "400", style: "normal" },
    { path: "./gilroy/Gilroy-Medium.woff", weight: "500", style: "normal" },
    { path: "./gilroy/Gilroy-SemiBold.woff", weight: "600", style: "normal" },
    { path: "./gilroy/Gilroy-Bold.woff", weight: "700", style: "normal" },
    { path: "./gilroy/Gilroy-ExtraBold.woff", weight: "800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
