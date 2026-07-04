import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://satyamayurvedicclinic.in";

export function whatsappLink(message: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919899842598";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
