const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const root = process.cwd();
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".pdf": "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  const requested = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.normalize(path.join(root, requested));
  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  response.writeHead(200, { "content-type": mime[path.extname(filePath)] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(response);
});

async function checkViewport(page, name, width, height) {
  await page.setViewportSize({ width, height });
  await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });
  for (const view of ["dashboard", "units", "termsView", "practice", "coverage"]) {
    await page.locator(`.nav-item[data-view="${view}"]`).evaluate((button) => button.click());
    const active = await page.locator(`#${view}`).evaluate((node) => node.classList.contains("active-view"));
    if (!active) throw new Error(`${name} nav shortcut did not open ${view}`);
  }
  await page.locator(".chapter-button").nth(1).evaluate((button) => button.click());
  if (!(await page.locator("#units").evaluate((node) => node.classList.contains("active-view")))) {
    throw new Error(`${name} chapter shortcut did not open units`);
  }
  await page.screenshot({ path: path.join(root, "tools", `visual-${name}.png`), fullPage: true });
  const metrics = await page.evaluate(() => ({
    bodyOverflow: document.body.scrollWidth > document.body.clientWidth,
    docOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    title: document.querySelector("h1")?.textContent || "",
    aiPanelDisplay: getComputedStyle(document.querySelector(".ai-panel")).display,
  }));
  if (metrics.bodyOverflow || metrics.docOverflow) {
    throw new Error(`${name} has horizontal overflow`);
  }
  if (!metrics.title.includes("תקשורת")) {
    throw new Error(`${name} title did not render Hebrew content`);
  }
}

server.listen(4173, "127.0.0.1", async () => {
  const chromePath = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ].find((candidate) => fs.existsSync(candidate));
  const browser = await chromium.launch(chromePath ? { executablePath: chromePath } : {});
  try {
    const page = await browser.newPage();
    await checkViewport(page, "desktop", 1440, 960);
    await checkViewport(page, "mobile-390", 390, 844);
    await checkViewport(page, "mobile-360", 360, 740);
    console.log("Visual checks passed");
  } finally {
    await browser.close();
    server.close();
  }
});
