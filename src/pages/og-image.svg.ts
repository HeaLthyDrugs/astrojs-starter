import type { APIRoute } from "astro"
import { SITE } from "@/lib/site"

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

function wrapText(value: string, maxLength: number) {
  const words = value.split(/\s+/)
  const lines: string[] = []
  let current = ""

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > maxLength && current) {
      lines.push(current)
      current = word
    } else {
      current = next
    }
  }

  if (current) lines.push(current)
  return lines
}

export const GET: APIRoute = () => {
  const hostname = SITE.url.replace(/^https?:\/\//, "")
  const descriptionLines = wrapText(SITE.description, 44)

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#F8FAFC"/>
  <rect x="72" y="72" width="1056" height="486" rx="36" fill="#FFFFFF" stroke="#E2E8F0"/>
  <circle cx="1032" cy="132" r="108" fill="#E0F2FE"/>
  <circle cx="1048" cy="488" r="138" fill="#F1F5F9"/>
  <circle cx="208" cy="498" r="116" fill="#EEF2FF"/>
  <text x="100" y="160" fill="#0F172A" font-size="30" font-family="Inter, Arial, sans-serif" font-weight="700" letter-spacing="0.02em">${escapeXml(SITE.name)}</text>
  <text x="100" y="300" fill="#0F172A" font-size="76" font-family="Inter, Arial, sans-serif" font-weight="700">${escapeXml(SITE.name)}</text>
  ${descriptionLines
    .map(
      (line, index) =>
        `<text x="100" y="${390 + index * 34}" fill="#475569" font-size="28" font-family="Inter, Arial, sans-serif">${escapeXml(line)}</text>`,
    )
    .join("\n  ")}
  <text x="100" y="500" fill="#334155" font-size="24" font-family="Inter, Arial, sans-serif">${escapeXml(hostname)}</text>
  <rect x="854" y="110" width="188" height="188" rx="42" fill="#0F172A"/>
  <text x="948" y="224" text-anchor="middle" fill="#FFFFFF" font-size="72" font-family="Inter, Arial, sans-serif" font-weight="700">${escapeXml(
    SITE.name.slice(0, 1).toUpperCase(),
  )}</text>
</svg>`

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
  })
}
