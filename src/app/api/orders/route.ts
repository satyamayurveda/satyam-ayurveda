import { NextResponse } from "next/server";
import { z } from "zod";

const orderSchema = z.object({
  cart: z.array(z.object({ id: z.string(), quantity: z.number().int().positive() })).min(1),
  total: z.number().positive(),
  pincode: z.string().optional(),
  paymentMode: z.enum(["razorpay", "cod"])
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = orderSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid order details" }, { status: 400 });
  }

  if (parsed.data.paymentMode === "cod") {
    console.info("New COD order inquiry", parsed.data);
    return NextResponse.json({ ok: true, paymentMode: "cod" });
  }

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return NextResponse.json({
      ok: true,
      orderId: "demo_order_configure_razorpay_keys",
      note: "Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET for live order creation."
    });
  }

  const Razorpay = (await import("razorpay")).default;
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });

  const order = await razorpay.orders.create({
    amount: Math.round(parsed.data.total * 100),
    currency: "INR",
    receipt: `satyam_${Date.now()}`
  });

  return NextResponse.json({ ok: true, orderId: order.id, amount: order.amount, currency: order.currency });
}
