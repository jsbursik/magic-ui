#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🎨 Initializing Magic UI...\n");

const templatesDir = path.join(__dirname, "../templates");
const cwd = process.cwd();

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFile(src, dest) {
  const fullSrc = path.join(templatesDir, src);
  const fullDest = path.join(cwd, dest);

  // Ensure destination directory exists
  ensureDir(path.dirname(fullDest));

  fs.copyFileSync(fullSrc, fullDest);
  console.log(`✓ Created ${dest}`);
}

function copyDir(src, dest) {
  const fullSrc = path.join(templatesDir, src);
  const fullDest = path.join(cwd, dest);

  ensureDir(fullDest);

  const files = fs.readdirSync(fullSrc, { withFileTypes: true });

  for (const file of files) {
    const srcPath = path.join(fullSrc, file.name);
    const destPath = path.join(fullDest, file.name);

    if (file.isDirectory()) {
      copyDir(path.join(src, file.name), path.join(dest, file.name));
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Created ${path.join(dest, file.name)}`);
    }
  }
}

try {
  // Create directories and copy files
  copyFile("hooks.server.ts", "src/hooks.server.ts");
  copyFile("app.d.ts", "src/app.d.ts");
  copyFile("drizzle.config.ts", "drizzle.config.ts");

  copyFile("layout/+layout.svelte", "src/routes/+layout.svelte");
  copyFile("layout/+layout.server.ts", "src/routes/+layout.server.ts");

  copyFile("api/auth/[...all]/+server.ts", "src/routes/api/auth/[...all]/+server.ts");

  copyDir("lib/server", "src/lib/server");
  copyDir("lib/db", "src/lib/db");
  copyDir("login", "src/routes/login");
  copyDir("signup", "src/routes/signup");
  copyDir("secret", "src/routes/secret");
  copyDir("css-demo", "src/routes/css-demo");
  copyFile("+page.svelte", "src/routes/+page.svelte");

  console.log("\n✅ Magic UI initialized!");
  console.log("\nNext steps:");
  console.log("1. Add DATABASE_URL and PUBLIC_BASE_URL to .env");
  console.log("2. Run: pnpm drizzle-kit generate");
  console.log("3. Run: pnpm drizzle-kit migrate");
  console.log("4. Start dev server: pnpm dev");
} catch (error) {
  console.error("❌ Error during initialization:", error.message);
  process.exit(1);
}
