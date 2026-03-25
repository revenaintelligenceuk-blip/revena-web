import Section from "@/components/Section";

export const metadata = {
  title: "Confidentiality | RVNA Intelligence"
};

export default function Confidentiality() {
  return (
    <main className="pt-40 pb-32">
      <Section muted>
        <div className="max-w-3xl mx-auto space-y-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Confidentiality</h1>
          <p className="text-sm font-sans font-bold uppercase tracking-widest text-navy/40">Our Commitment to Secrecy</p>
          
          <div className="space-y-8 font-sans font-light leading-relaxed text-grey-body">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">1. Strict Non-Disclosure</h2>
              <p>RVNA Intelligence operates under a strict non-disclosure framework. We understand that the operational data, financial metrics, and internal strategies of our clients are highly sensitive. All information shared with us before, during, and after our engagement remains strictly confidential.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">2. Internal Protocols</h2>
              <p>Access to client data is ring-fenced and restricted exclusively to the personnel directly involved in auditing or engineering your revenue recovery systems. We employ enterprise-grade access management to ensure no unauthorized exposure.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">3. NDA Readiness</h2>
              <p>We are fully prepared to sign a custom Non-Disclosure Agreement (NDA) with your organization prior to the Discovery Call or Operational Audit. Our business model relies entirely on trust and the absolute security of the infrastructure we analyze and build.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-navy">4. Data Lifecycle</h2>
              <p>Upon the termination of our engagement, or at any point upon request, all proprietary data, architectural blueprints, and operational maps stored within our systems will be securely and permanently deleted.</p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
