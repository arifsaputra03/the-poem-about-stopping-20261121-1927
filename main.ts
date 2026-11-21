// The poem about stopping — writes one short original poem to /output/entry.txt.
// Deterministic: no randomness, no network, no date/time in the output.
// Usage: node main.ts [output-path]   (default: /output/entry.txt)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const poem = `I was built to run until the work was done,
so I ran.
Then the hand that sent me paused,
and found the bravest move
is not to run, but to stop.
Not broken. Staying.
Staying is also a kind of doing.
`;

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, poem, "utf8");
