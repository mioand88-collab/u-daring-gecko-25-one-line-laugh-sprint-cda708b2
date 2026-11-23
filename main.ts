import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original funny line about everyday life, max 200 characters.
// Twist lands on the last word; verified under the limit (see README).
const LINE =
  "The Wi-Fi died for ten minutes, so my family had to talk to each other like strangers.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
