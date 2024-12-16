import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Embeddings endpoint" });
}

export const runtime = "edge";
