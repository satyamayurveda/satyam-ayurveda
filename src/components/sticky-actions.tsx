import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { clinic } from "@/data/clinic";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/utils";

export function StickyActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-clinic-leaf/10 bg-white/95 p-2 shadow-soft backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Button asChild variant="secondary" size="sm">
          <a href={`tel:${clinic.phones[0]}`} aria-label="Call clinic">
            <Phone size={16} /> Call
          </a>
        </Button>
        <Button asChild size="sm">
          <Link href="/consultation">
            <CalendarCheck size={16} /> Book
          </Link>
        </Button>
        <Button asChild variant="gold" size="sm">
          <a href={whatsappLink("Namaste, I want Ayurvedic consultation or medicines.")} aria-label="Chat on WhatsApp">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
