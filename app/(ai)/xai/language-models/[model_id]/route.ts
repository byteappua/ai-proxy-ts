import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Language Model by ID endpoint" });
}

export const runtime = "edge";
