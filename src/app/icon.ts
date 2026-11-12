import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const contentType = "image/svg+xml";
export const size = { width: 96, height: 96 };

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), "src/app/company-logo.png"));
  // Use the actual globe from the supplied logo, with the wordmark outside the viewport.
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" rx="12" fill="#fff"/><svg x="4" y="4" width="88" height="88" viewBox="7 7 78 83" overflow="hidden"><image width="265" height="90" href="data:image/png;base64,${logo.toString("base64")}"/></svg></svg>`;
  return new Response(svg, { headers: { "Content-Type": contentType } });
}
