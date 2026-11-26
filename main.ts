import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one-liner: a comment left above fragile production code.
// It must stay byte-identical to the text below — the gate allows
// 1 to 200 characters, and this line is 103.
const ENTRY =
  "// DO NOT TOUCH. Nobody knows why this works, including the person who wrote it, and they left in 2019.";

// The grader runs this in a sandbox and reads /output/entry.txt.
// ENTRY_OUTPUT only exists so the entry can be tested locally.
const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
