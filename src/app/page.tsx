"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/6612575/pexels-photo-6612575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up view of a professional espresso machine with syrup bottles in a coffee shop setting." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/4351803/pexels-photo-4351803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Artisan coffee brewing in a cozy café with a barista using pour-over method." }
];

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About Us", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Coffee Haven"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Coffee Haven"
            description="Savor the finest brews and enjoy a cozy atmosphere."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            alt={assetMap.find(a => a.id === "hero-image")?.alt ?? "Coffee shop interiror"}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Crafting Perfection in Every Cup"
            buttons={[
              { text: "Read More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Get in Touch"
            description="We'd love to hear from you. Contact us for any queries or feedback."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Your Email", required: true }
            ]}
            textarea={{
              name: "message",
              placeholder: "Your Message",
              rows: 5,
              required: true
            }}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Home", href: "hero" }, { label: "About Us", href: "about" }] },
              { items: [{ label: "Terms & Conditions", href: "terms" }, { label: "Privacy Policy", href: "policy" }] }
            ]}
            logoText="Coffee Haven"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}