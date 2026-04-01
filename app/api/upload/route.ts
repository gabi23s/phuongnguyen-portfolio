import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const path = formData.get("path") as string; // e.g. "images/portrait.jpg"

  if (!file || !path) {
    return NextResponse.json({ error: "Missing file or path" }, { status: 400 });
  }

  const dest = join(process.cwd(), "public", path);
  const dir = dest.substring(0, dest.lastIndexOf("/"));
  await mkdir(dir, { recursive: true });

  const bytes = await file.arrayBuffer();
  await writeFile(dest, Buffer.from(bytes));

  return NextResponse.json({ ok: true, path: `/${path}` });
}
