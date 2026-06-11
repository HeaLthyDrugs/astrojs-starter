import type { APIRoute } from "astro"
import { SITE } from "@/lib/site"

export const GET: APIRoute = () => {
  const sitemapUrl = new URL("/sitemap-index.xml", SITE.url).href

  return new Response(`User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
