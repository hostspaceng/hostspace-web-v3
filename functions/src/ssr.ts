import path from "path";
import fs from "fs";
import express from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createServer() {
  const app = express();
  const isProd = true;

  let template: string;
  let render: (url: string) => Promise<string>;

  if (isProd) {
    const distPath = path.resolve(__dirname, "./dist");

    const indexHtmlPath = path.join(distPath, "index.html");
    const entryServerPath = path.join(distPath, "server/entry-server.js"); // ✅ fixed

    template = fs.readFileSync(indexHtmlPath, "utf-8");

    // @ts-ignore
    render = (await import(entryServerPath)).render;

    app.use("/assets", express.static(path.join(distPath, "assets")));
  }

  app.use("*", async (req, res) => {
    try {
      console.log("🟢 SSR hit for URL:", req.originalUrl); // add this
      const html = await render(req.originalUrl);
      console.log("✅ SSR rendered HTML length:", html.length); // add this
      const page = template.replace("<!--ssr-outlet-->", html);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      console.error("❌ SSR error:", e);
      res.status(500).send("Internal Server Error");
    }
  });

  return app;
}
