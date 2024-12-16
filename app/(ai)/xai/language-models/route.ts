import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Language Models endpoint" });
}

export const runtime = "edge";
