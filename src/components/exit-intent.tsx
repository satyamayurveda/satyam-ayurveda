"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

export function ExitIntent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("satyam-exit-intent");
    const onLeave = (event: MouseEvent) => {
      if (!shown && event.clientY <= 8) {
        sessionStorage.setItem("satyam-exit-intent", "true");
        setOpen(true);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-clinic-forest/50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-bold text-clinic-forest">Free Consultation Inquiry</p>
            <p className="mt-1 text-sm text-slate-600">Share your concern and the clinic team will call back.</p>
          </div>
          <button className="rounded-md p-1 text-slate-500" onClick={() => setOpen(false)} aria-label="Close popup">
            <X size={20} />
          </button>
        </div>
        <form action="/api/contact" method="post" className="mt-5 grid gap-3">
          <Input name="name" placeholder="Name" required />
          <Input name="phone" placeholder="Phone number" required />
          <Textarea name="message" placeholder="Health concern" required />
          <Button type="submit">Request Call Back</Button>
        </form>
      </div>
    </div>
  );
}
