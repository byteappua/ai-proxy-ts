import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Completions endpoint" });
}

export const runtime = "edge";
