import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://api.x.ai/v1/api-key", {
    headers: {
      Authorization: `Bearer ` + process.env.XAI_API_KEY, // 替换为你的 OpenAI API 密钥
    },
  });
  if (!response.ok) {
    return NextResponse.error();
  }
  return NextResponse.json(response.json);
}

export const runtime = "edge";
