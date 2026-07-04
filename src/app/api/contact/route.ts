import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  city: z.string().optional(),
  message: z.string().min(5)
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid inquiry details" }, { status: 400 });
  }

  console.info("New contact inquiry", parsed.data);
  return NextResponse.json({ ok: true, message: "Inquiry received" });
}
