"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Select, Textarea } from "@/components/ui/input";

export function ConsultationForm() {
  const [status, setStatus] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/consultation", { method: "POST", body: form });
    setStatus(response.ok ? "Your consultation request has been received." : "Please try again or call the clinic.");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-clinic-leaf/12 bg-white p-5 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" placeholder="Full name" required />
        <Input name="age" placeholder="Age" inputMode="numeric" required />
        <Select name="gender" required defaultValue="">
          <option value="" disabled>Gender</option>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </Select>
        <Input name="phone" placeholder="Phone / WhatsApp" required />
        <Input name="city" placeholder="City" required />
        <Input name="preferredTime" placeholder="Preferred consultation time" required />
      </div>
      <Select name="mode" required defaultValue="">
        <option value="" disabled>Consultation type</option>
        <option>Phone Consultation</option>
        <option>Video Consultation</option>
        <option>WhatsApp Consultation</option>
      </Select>
      <Textarea name="healthIssue" placeholder="Describe your health issue" required />
      <Input name="reports" type="file" multiple aria-label="Upload reports" />
      <Button type="submit">Submit Appointment Request</Button>
      {status && <p className="text-sm font-semibold text-clinic-leaf">{status}</p>}
    </form>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", { method: "POST", body: form });
    setStatus(response.ok ? "Thanks. The clinic team will contact you soon." : "Please call the clinic directly.");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-clinic-leaf/12 bg-white p-5 shadow-soft">
      <Input name="name" placeholder="Name" required />
      <Input name="phone" placeholder="Phone number" required />
      <Input name="city" placeholder="City" />
      <Textarea name="message" placeholder="How can we help?" required />
      <Button type="submit">Send Inquiry</Button>
      {status && <p className="text-sm font-semibold text-clinic-leaf">{status}</p>}
    </form>
  );
}
