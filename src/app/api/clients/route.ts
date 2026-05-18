import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const dir = path.join(process.cwd(), "public/images/clients");
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => /\.(png|jpe?g|svg|webp)$/i.test(f))
    : [];
  return NextResponse.json(files);
}
