import Section from "@/components/Section";

export const metadata = {
  title: "Terms of Service | RVNA Intelligence"
};

export default function Terms() {
  return (
    <main className="pt-40 pb-32">
      <Section muted>
        <div className="max-w-3xl mx-auto space-y-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Terms of Service</h1>
          <p className="text-sm font-sans font-bold uppercase tracking-widest text-navy/40">Last Updated: March 2026</p>
          
          <div className="space-y-8 font-sans font-light leading-relaxed text-grey-body">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">1. Acceptance of Terms</h2>
              <p>Welcome to RVNA Intelligence. By accessing or using our website, services, or operational frameworks, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">2. Services Provided</h2>
              <p>RVNA Intelligence provides strategic advisory, AI automation implementation, and revenue recovery systems for UK service businesses. The specific scope, deliverables, and timelines of our services will be outlined in a separate bespoke Service Agreement following your Discovery Call and Operational Audit.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">3. Confidentiality and Data Security</h2>
              <p>We take the security of your operational data seriously. All client data, including leads, financial metrics, and internal processes, are kept strictly confidential. Our infrastructure complies with UK GDPR regulations, and we use enterprise-grade encryption for all integrated workflows.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">4. Intellectual Property</h2>
              <p>All custom workflows, AI agent configurations, and architectural designs created by RVNA Intelligence remain our intellectual property unless explicitly transferred in writing. Clients retain full ownership of their pre-existing data, branding, and customer information.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">5. Limitation of Liability</h2>
              <p>While RVNA Intelligence builds robust, high-conversion systems, we cannot guarantee specific financial returns as these depend on market factors and internal sales execution. RVNA Intelligence shall not be held liable for indirect, incidental, or consequential damages arising from the use of our services.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">6. Termination</h2>
              <p>Either party may terminate the Service Agreement with 30 days written notice, or as specified in your individual contract. Upon termination, all active automated systems will be smoothly off-boarded and handed over to the client.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">7. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
