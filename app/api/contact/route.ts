import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, subject, message } = body ?? {};

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  // TODO: send an email via Resend, Postmark, SendGrid, etc., or store the
  // submission in a database. For now this just acknowledges receipt.
  console.log("New contact form submission:", { name, email, subject, message });

  return NextResponse.json({ ok: true });
}
