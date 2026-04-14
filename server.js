const fs = require("fs");
const path = require("path");

const standaloneServerPath = path.join(
  __dirname,
  ".next",
  "standalone",
  "server.js"
);

const startServer = async () => {
  if (fs.existsSync(standaloneServerPath)) {
    // Prefer the Next.js standalone server when available.
    require(standaloneServerPath);
    return;
  }

  const next = require("next");
  const http = require("http");

  const port = Number.parseInt(process.env.PORT || "3000", 10);
  const app = next({ dev: false, hostname: "0.0.0.0", port });
  const handle = app.getRequestHandler();

  await app.prepare();

  http.createServer((req, res) => handle(req, res)).listen(port, "0.0.0.0");
};

startServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
