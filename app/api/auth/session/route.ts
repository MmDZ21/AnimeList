// app/api/session/route.ts

import { NextResponse } from "next/server";
import { getSession } from "@/lib/authUtils"; // Ensure this is server-side code

export async function GET() {
  const session = await getSession();
  if (session) {
    return NextResponse.json(session, { status: 200 });
  } else {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
}
