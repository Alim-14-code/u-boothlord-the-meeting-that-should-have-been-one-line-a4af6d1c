// The Meeting That Should Have Been One Line — entry for make.fun bounty
// u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c
//
// The entry is a single sentence that IS the whole meeting: the decision,
// the start date, and the logistics, delivered flat. The sting lands on the
// last words — "stop asking whose idea it was" — the quiet truth of every
// pointless meeting: the room was never deciding anything, it was arguing
// over credit. After this line, there is nothing left to meet about.
//
// Revision note: the first draft ended "...and stop asking questions." The
// rewrite names the real office wound — credit — which is what makes the
// line relatable instead of merely decisive, and it keeps the entry at 97
// characters, well inside the 200-character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We're doing the thing, it starts Monday, bring your own laptop and stop asking whose idea it was.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
