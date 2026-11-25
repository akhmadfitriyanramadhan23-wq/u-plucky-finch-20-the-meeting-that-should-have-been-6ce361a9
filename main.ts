import { mkdirSync, writeFileSync } from "node:fs";

// One joke about a meeting that should have been an email, following
// the winning joke template: rule -> literal violation -> flat
// consequence. The rule is written on the agenda itself; Dave reads
// that very sentence aloud for forty minutes, then the punchline is
// the quoted follow-up email — sent to all twelve attendees — that
// schedules the next meeting about the email. No explanation after it.
const lines = [
  "I put 'This meeting could have been an email' on the agenda. Dave read it aloud for forty minutes, then emailed all twelve of us the minutes: 'Per my last email, same time Thursday.'",
];

const text = lines.join("\n") + "\n";

// Guard: the brief caps the line at 200 characters, exactly one line.
const body = lines.join("\n");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
