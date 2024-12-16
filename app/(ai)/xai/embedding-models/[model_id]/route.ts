import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Embedding Model by ID endpoint" });
}

export const runtime = "edge";
