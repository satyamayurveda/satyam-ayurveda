import { NextResponse } from "next/server";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().min(2),
  age: z.string().min(1),
  gender: z.string().min(1),
  phone: z.string().min(8),
  city: z.string().min(2),
  preferredTime: z.string().min(2),
  mode: z.string().min(2),
  healthIssue: z.string().min(5)
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  const parsed = consultationSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid consultation details" }, { status: 400 });
  }

  const uploadedReports = formData.getAll("reports").filter(Boolean).length;
  console.info("New consultation request", { ...parsed.data, uploadedReports });
  return NextResponse.json({ ok: true, message: "Consultation request received" });
}
