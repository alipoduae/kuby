const fs = require("node:fs");
const path = require("node:path");

const packageDirectory = path.join(__dirname, "node_modules", "@fontsource", "tajawal");
const fontDirectory = path.join(packageDirectory, "files");
const weights = [400, 500, 700, 800, 900];

for (const weight of weights) {
  const fileName = `tajawal-arabic-${weight}-normal.woff2`;
  fs.copyFileSync(path.join(fontDirectory, fileName), path.join(__dirname, `tajawal-arabic-${weight}.woff2`));
}

fs.copyFileSync(path.join(packageDirectory, "LICENSE"), path.join(__dirname, "TAJAWAL-OFL.txt"));
