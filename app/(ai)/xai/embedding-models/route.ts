import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Embedding Models endpoint" });
}

export const runtime = "edge";
