import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const DATA_PATH = join(process.cwd(), "app/data/portfolio.json");

export async function GET() {
  const raw = await readFile(DATA_PATH, "utf-8");
  return NextResponse.json(JSON.parse(raw));
}

export async function PUT(request: Request) {
  const body = await request.json();
  await writeFile(DATA_PATH, JSON.stringify(body, null, 2), "utf-8");
  return NextResponse.json({ ok: true });
}
