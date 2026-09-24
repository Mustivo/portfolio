/**
 * Centralized site configuration populated from secure environment variables (.env)
 * and Vercel system variables with reliable production fallbacks.
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Mwizerwa Steven",
  alternateNames: ["Mwizerwa Stiven", "Mustivo", "Steven Mwizerwa"],
  title: process.env.NEXT_PUBLIC_TITLE || "IT Engineer & Full-Stack Developer",
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
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://mwizerwa-stiven.vercel.app"),
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
};
