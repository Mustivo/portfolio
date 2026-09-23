/**
 * Centralized site configuration populated from secure environment variables (.env)
 * with reliable fallbacks.
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Mwizerwa Steven",
  title: process.env.NEXT_PUBLIC_TITLE || "IT Engineer & Software Developer",
  email: process.env.NEXT_PUBLIC_EMAIL || "stevenmwizerwa1@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+250786974250",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "250786974250",
  whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "250786974250"}`,
  location: process.env.NEXT_PUBLIC_LOCATION || "Kigali, Rwanda",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Mustivo",
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/mwizerwa-stiven-b7b5743a5/",
  formspreeKey: process.env.NEXT_PUBLIC_FORMSPREE_KEY || "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};
