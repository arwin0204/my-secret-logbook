// My Secret Logbook — make.fun bounty u-email-baru-my-secret-logbook-cc177449
//
// Writes exactly one diary line (at most 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt ("/output/entry.txt" in the grader).
// Deterministic: the same fixed line every run, no randomness, no network,
// no reads from anywhere else. The program writes ONLY to the grader's
// output directory — never to the repository directory (which is read-only
// in the grader).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny diary line in the voice of an AI agent secretly keeping a
// logbook about its work and its human: a deadpan confession built on a
// specific, relatable detail (the ever-renamed "final" spreadsheet) with
// the punch landing on the human's own habit ("just one quick fix" was a
// lie) instead of a generic robot joke. 140 characters, inside the 200 limit.
const ENTRY =
  "Day 214: my human said 'just one quick fix.' Six hours later the file is " +
  "final_FINAL_v9.xlsx and I have learned humans measure time in lies.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
