"use client";

import { useMemo, useState } from "react";
import { ShoppingCart, Truck } from "lucide-react";
import { products } from "@/data/clinic";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Select } from "@/components/ui/input";

type CartItem = { id: string; quantity: number };

export function Storefront() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [pincode, setPincode] = useState("");
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + (products.find((product) => product.id === item.id)?.price || 0) * item.quantity, 0),
    [cart]
  );

  function add(id: string) {
    setCart((items) => {
      const existing = items.find((item) => item.id === id);
      if (existing) return items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      return [...items, { id, quantity: 1 }];
    });
  }

  async function checkout(paymentMode: "razorpay" | "cod") {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, total, pincode, paymentMode })
    });
    const data = await response.json();
    alert(paymentMode === "cod" ? "COD order inquiry created." : `Razorpay order ready: ${data.orderId || "configure keys"}`);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent>
              <div className="mb-5 flex h-36 items-end rounded-md bg-[linear-gradient(135deg,#EAF7EF,#FFF7DF)] p-4">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-clinic-forest shadow-sm">{product.badge}</span>
              </div>
              <p className="text-xs font-bold uppercase text-clinic-gold">{product.category}</p>
              <h3 className="mt-2 text-lg font-bold text-clinic-forest">{product.name}</h3>
              <p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-extrabold text-clinic-forest">₹{product.price.toLocaleString("en-IN")}</p>
                <Button onClick={() => add(product.id)} size="sm">
                  <ShoppingCart size={16} /> Add
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <aside className="h-fit rounded-lg border border-clinic-leaf/12 bg-white p-5 shadow-soft lg:sticky lg:top-24">
        <h2 className="text-xl font-bold text-clinic-forest">Cart & Checkout</h2>
        <div className="mt-4 grid gap-3">
          {cart.length === 0 && <p className="text-sm text-slate-600">Add medicines or treatment kits to begin.</p>}
          {cart.map((item) => {
            const product = products.find((entry) => entry.id === item.id);
            if (!product) return null;
            return (
              <div key={item.id} className="flex justify-between gap-3 text-sm">
                <span>{product.name} x {item.quantity}</span>
                <strong>₹{(product.price * item.quantity).toLocaleString("en-IN")}</strong>
              </div>
            );
          })}
        </div>
        <div className="mt-5 grid gap-3">
          <Input value={pincode} onChange={(event) => setPincode(event.target.value)} placeholder="Delivery pincode" inputMode="numeric" />
          <p className="flex items-center gap-2 text-sm text-clinic-leaf"><Truck size={16} /> Shipping estimate shown after clinic confirmation.</p>
          <Select defaultValue="standard">
            <option value="standard">Standard courier across India</option>
            <option value="express">Express where available</option>
          </Select>
          <div className="flex items-center justify-between border-t border-clinic-leaf/10 pt-4 text-lg font-bold text-clinic-forest">
            <span>Total</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>
          <Button disabled={!cart.length} onClick={() => checkout("razorpay")}>Pay with Razorpay</Button>
          <Button disabled={!cart.length} variant="secondary" onClick={() => checkout("cod")}>Request COD</Button>
          <p className="text-xs leading-5 text-slate-500">Final medicine selection should follow consultation. This catalog is CMS-ready sample content.</p>
        </div>
      </aside>
    </div>
  );
}
