import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Models endpoint" });
}

export const runtime = "edge";
