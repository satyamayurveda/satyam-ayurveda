import {
  BadgeCheck,
  Bone,
  Ear,
  HeartPulse,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  Venus,
  Wind
} from "lucide-react";

export const clinic = {
  name: "Satyam Ayurvedic Clinic",
  hindiName: "सत्यम आयुर्वेदिक क्लीनिक",
  tagline: "Natural Healing Through Ayurveda",
  doctor: "Vaidya Aarti Jindal",
  qualifications: "B.A.M.S. (Amritsar), P.G.D.H.H.C. (Apollo)",
  address: "E-56, Govindpuram Bus Stand Ke Paas, Govindpuram, Ghaziabad, Uttar Pradesh, India",
  shortAddress: "E-56 Govindpuram Bus Stand Ke Paas, Govindpuram, Ghaziabad",
  phones: ["9899842598", "8076079269"],
  hours: "Monday-Saturday, 10 AM - 7 PM"
};

export const trustBadges = [
  { label: "Doctor-led care", icon: BadgeCheck },
  { label: "Pan India delivery", icon: Truck },
  { label: "Personalized medicines", icon: Leaf },
  { label: "Secure payments", icon: ShieldCheck }
];

export const treatments = [
  {
    title: "ENT Conditions",
    icon: Ear,
    items: ["Nasal polyps", "Tonsils", "Chronic ear discharge"],
    summary: "Ayurvedic support for recurring ENT inflammation and chronic discomfort."
  },
  {
    title: "Women's Health",
    icon: Venus,
    items: ["PCOD", "Excessive menstrual bleeding", "Leucorrhoea", "Infertility"],
    summary: "Personalized care for cycle health, hormonal balance, and fertility concerns."
  },
  {
    title: "Men's Health",
    icon: HeartPulse,
    items: ["Low sperm count", "Sexual weakness", "Premature ejaculation"],
    summary: "Confidential consultation and restorative Ayurvedic protocols."
  },
  {
    title: "Digestive Disorders",
    icon: Stethoscope,
    items: ["Chronic constipation", "Acidity", "IBS", "Intestinal inflammation"],
    summary: "Gut-focused care using diet guidance and individualized formulations."
  },
  {
    title: "Skin Disorders",
    icon: Sparkles,
    items: ["Chronic eczema", "Ringworm", "Acne"],
    summary: "Internal and external Ayurvedic care for recurring skin conditions."
  },
  {
    title: "Joint & Bone Disorders",
    icon: Bone,
    items: ["Arthritis", "Joint swelling", "Back pain"],
    summary: "Pain, swelling, and mobility support through classical Ayurveda."
  },
  {
    title: "Respiratory Disorders",
    icon: Wind,
    items: ["Asthma", "Chronic cough", "Chronic cold"],
    summary: "Long-term respiratory wellness plans and seasonal care."
  },
  {
    title: "Kidney Disorders",
    icon: Leaf,
    items: ["Kidney stones"],
    summary: "Ayurvedic consultation for stone tendency and urinary wellness."
  },
  {
    title: "Piles",
    icon: HeartPulse,
    items: ["Chronic piles"],
    summary: "Diet, bowel routine, and medicine support for chronic piles."
  }
];

export const products = [
  { id: "pcod-support-kit", name: "PCOD Support Kit", category: "Women's Wellness Kits", price: 2499, badge: "Popular", description: "Doctor-guided support for cycle regularity and metabolic balance." },
  { id: "digestive-care-kit", name: "Digestive Care Kit", category: "Digestive Care Kit", price: 1899, badge: "Gut care", description: "Ayurvedic support for acidity, bloating, constipation, and IBS tendencies." },
  { id: "joint-care-kit", name: "Joint Care Kit", category: "Joint Care Kit", price: 2199, badge: "Mobility", description: "Herbal support for stiffness, swelling, and everyday movement comfort." },
  { id: "skin-care-kit", name: "Skin Care Kit", category: "Skin Care Kit", price: 1999, badge: "Skin", description: "Internal cleansing and topical support for acne, eczema, and fungal tendencies." },
  { id: "mens-vitality-kit", name: "Men's Vitality Kit", category: "Men's Vitality Kit", price: 2799, badge: "Confidential", description: "Restorative Ayurvedic care for strength, stamina, and reproductive wellness." },
  { id: "respiratory-care-kit", name: "Respiratory Care Kit", category: "Respiratory Care Kit", price: 1799, badge: "Seasonal", description: "Support for cough, cold tendency, congestion, and breathing comfort." },
  { id: "immunity-booster-kit", name: "Immunity Booster Kit", category: "Immunity Booster Kit", price: 1499, badge: "Family", description: "Daily rasayana-inspired support for resilience and recovery." }
];

export const testimonials = [
  { name: "Neha S.", city: "Noida", rating: 5, text: "My PCOD plan was explained clearly. Medicines arrived on time and the diet advice was practical." },
  { name: "Rakesh K.", city: "Ghaziabad", rating: 5, text: "I consulted for chronic acidity and constipation. The follow-up process felt personal and disciplined." },
  { name: "Anjali M.", city: "Lucknow", rating: 5, text: "The clinic arranged courier delivery after online consultation. Very smooth experience." }
];

export const blogPosts = [
  { slug: "ayurvedic-treatment-for-pcod", title: "Ayurvedic Treatment for PCOD", description: "How Ayurveda approaches hormones, digestion, stress, and cycle regularity.", keyword: "PCOD treatment Ayurveda" },
  { slug: "natural-remedies-for-piles", title: "Natural Remedies for Piles", description: "Diet, bowel habits, and Ayurvedic support for piles care.", keyword: "Ayurvedic piles treatment" },
  { slug: "ayurvedic-approach-to-kidney-stones", title: "Ayurvedic Approach to Kidney Stones", description: "Understanding urinary wellness and stone tendency in Ayurveda.", keyword: "Ayurvedic kidney stone treatment" },
  { slug: "benefits-of-personalized-ayurveda", title: "Benefits of Personalized Ayurveda", description: "Why prakriti, symptoms, and lifestyle matter in medicine selection.", keyword: "personalized Ayurvedic medicines" },
  { slug: "managing-joint-pain-naturally", title: "Managing Joint Pain Naturally", description: "Ayurvedic care ideas for stiffness, inflammation, and mobility.", keyword: "Ayurvedic joint pain treatment" }
];

export const faqs = [
  { q: "What are the consultation fees?", a: "Fees can vary by consultation type and treatment need. Please call or book an inquiry for the latest fee details." },
  { q: "Do you deliver medicines outside Ghaziabad?", a: "Yes. After consultation, customized medicines and kits can be shipped across India by courier." },
  { q: "Can I consult online?", a: "Yes. Phone, video, and WhatsApp consultation options are available." },
  { q: "How long does treatment take?", a: "Duration depends on condition history, severity, lifestyle, and response. The doctor explains the plan after assessment." },
  { q: "Are refunds available?", a: "Consultation fees are generally non-refundable. Medicine refunds depend on dispatch and product condition." }
];
