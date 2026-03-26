import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Framework from '@/components/sections/Framework';
import Process from '@/components/sections/Process';
import Impact from '@/components/sections/Impact';
import Comparison from '@/components/sections/Comparison';
import Audit from '@/components/sections/Audit';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Problem />
      <Framework />
      <Process />
      <Impact />
      <Comparison />
      <Audit />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Revena Intelligence",
            "image": "https://revena.ai/logo.png",
            "description": "Strategic revenue recovery for UK service businesses using AI and intelligent systems.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressCountry": "GB"
            },
            "url": "https://revena.ai",
            "telephone": "+44 20 XXXX XXXX",
            "priceRange": "£££"
          })
        }}
      />
    </main>
  );
}
