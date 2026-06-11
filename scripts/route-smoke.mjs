import { readFile, access, readdir } from "node:fs/promises"
import { constants as fsConstants } from "node:fs"
import path from "node:path"
import process from "node:process"

const root = process.cwd()
const dist = path.join(root, "dist")
const clientDist = path.join(dist, "client")
const siteDist = clientDist
const catalogDir = path.join(root, "src", "content", "catalog")
const siteConfigPath = path.join(root, "src", "lib", "site.ts")

async function fileExists(filePath) {
  try {
    await access(filePath, fsConstants.F_OK)
    return true
  } catch {
    return false
  }
}

async function assertExists(filePath, label, missing) {
  if (!(await fileExists(filePath))) {
    missing.push(`${label}: ${path.relative(root, filePath)}`)
  }
}

const missing = []

const expectedRoutes = [
  ["home page", path.join(siteDist, "index.html")],
  ["about page", path.join(siteDist, "about", "index.html")],
  ["catalog page", path.join(siteDist, "catalog", "index.html")],
  ["services page", path.join(siteDist, "services", "index.html")],
  ["contact page", path.join(siteDist, "contact", "index.html")],
  ["terms page", path.join(siteDist, "terms", "index.html")],
  ["privacy page", path.join(siteDist, "privacy", "index.html")],
  ["sitemap page", path.join(siteDist, "sitemap", "index.html")],
  ["404 page", path.join(siteDist, "404.html")],
  ["robots.txt", path.join(clientDist, "robots.txt")],
  ["og image", path.join(clientDist, "og-image.svg")],
  ["sitemap index", path.join(clientDist, "sitemap-index.xml")],
  ["sitemap chunk", path.join(clientDist, "sitemap-0.xml")],
]

for (const [label, filePath] of expectedRoutes) {
  await assertExists(filePath, label, missing)
}

if (await fileExists(catalogDir)) {
  const entries = await readdir(catalogDir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue
    const slug = entry.name.replace(/\.md$/, "")
    await assertExists(
      path.join(siteDist, "catalog", slug, "index.html"),
      `catalog item ${slug}`,
      missing,
    )
  }
}

if (missing.length > 0) {
  console.error("Route smoke check failed. Missing files:")
  for (const item of missing) console.error(`- ${item}`)
  process.exitCode = 1
} else {
  const robots = await readFile(path.join(clientDist, "robots.txt"), "utf8")
  const ogImage = await readFile(path.join(clientDist, "og-image.svg"), "utf8")
  const siteConfig = await readFile(siteConfigPath, "utf8")
  const siteNameMatch = siteConfig.match(/name:\s*"([^"]+)"/)
  const siteUrlMatch = siteConfig.match(/url:\s*"([^"]+)"/)
  const siteName = siteNameMatch?.[1] ?? "Cybotum"
  const siteUrl = siteUrlMatch?.[1] ?? "https://cybotum.com"

  const expectedSitemap = new URL("/sitemap-index.xml", siteUrl).href
  if (!robots.includes(expectedSitemap)) {
    console.error("Route smoke check failed. robots.txt does not include the expected sitemap URL.")
    process.exitCode = 1
  } else if (!ogImage.includes(siteName)) {
    console.error("Route smoke check failed. og-image.svg does not include the site name.")
    process.exitCode = 1
  } else {
    console.log("Route smoke check passed.")
  }
}
