import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://api.x.ai/v1/api-key", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ` + process.env.XAI_API_KEY, // 替换为你的 OpenAI API 密钥
    },
  });
  if (!response.ok) {
    return NextResponse.error();
  }
  return new NextResponse(response.body);
}

export const runtime = "edge";
