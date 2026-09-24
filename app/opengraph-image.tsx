import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";



export const alt = `${siteConfig.name} | ${siteConfig.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#090d16",
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgba(14, 165, 233, 0.15), transparent 45%), radial-gradient(circle at 85% 75%, rgba(59, 130, 246, 0.15), transparent 50%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                boxShadow: "0 0 12px #10b981",
              }}
            />
            <span
              style={{
                fontSize: "20px",
                color: "#94a3b8",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Available for Opportunities • Kigali, Rwanda
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "18px",
              color: "#38bdf8",
              fontWeight: 600,
            }}
          >
            github.com/Mustivo
          </div>
        </div>

        {/* Hero Middle Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              background: "linear-gradient(to right, #ffffff, #e2e8f0, #38bdf8)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Mwizerwa Steven
          </div>

          <div
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#38bdf8",
              letterSpacing: "-0.01em",
            }}
          >
            IT Engineer & Full-Stack Developer
          </div>

          <p
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              lineHeight: 1.5,
              maxWidth: "950px",
              margin: 0,
            }}
          >
            Engineering robust web systems, modern digital infrastructure, and responsive architectures with Next.js, React, Node.js, and Cloud Solutions.
          </p>
        </div>

        {/* Bottom Tech Stack Tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Python",
            "PostgreSQL",
            "Tailwind CSS",
            "Cloud Systems",
          ].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 20px",
                borderRadius: "10px",
                backgroundColor: "rgba(14, 165, 233, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                color: "#bae6fd",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
