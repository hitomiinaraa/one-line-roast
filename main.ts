import { mkdir, writeFile } from "node:fs/promises";

const line =
  "My microwave beeps every thirty seconds until I open the door, as if the popcorn needs emotional closure.";

if (line.length > 200) {
  throw new Error(`line is ${line.length} characters, over the 200 limit`);
}

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", line);
