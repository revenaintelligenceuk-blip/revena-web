import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

export const Privacy = () => {
  return (
    <div className="min-h-screen bg-cream text-navy selection:bg-navy selection:text-cream">
      <Header />
      <main className="pt-40 pb-32">
        <Section muted>
          <div className="max-w-3xl mx-auto space-y-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm font-sans font-bold uppercase tracking-widest text-navy/40">Last Updated: March 2026</p>
            
            <div className="space-y-8 font-sans font-light leading-relaxed text-grey-body">
              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-navy">1. Introduction</h2>
                <p>RVNA Intelligence ("we", "our", or "us") respects your privacy and is committed to protecting your personal and business data. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our website and services.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-navy">2. Information We Collect</h2>
                <p>We may collect the following types of information when you request a Discovery Call, submit an audit request, or interact with our automated systems:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Identity Data:</strong> Full name, company title.</li>
                  <li><strong>Contact Data:</strong> Business email address, telephone number, and company name.</li>
                  <li><strong>Operational Data:</strong> Information about your current lead handling processes, CRM systems, and business hurdles provided during audits.</li>
                  <li><strong>Technical Data:</strong> IP addresses, browser types, and usage data collected via cookies necessary for website operation.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-navy">3. How We Use Your Data</h2>
                <p>Your data is strictly used to provide our strategic advisory services, architect your custom infrastructure, and improve our website experience. Specifically, we use your data to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Process Discovery Call requests and schedule audits.</li>
                  <li>Analyze your business operations to design the Revenue Recovery Framework.</li>
                  <li>Communicate with you regarding our services and your project status.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-navy">4. Data Security</h2>
                <p>We implement state-of-the-art security measures to protect your data. All form submissions are handled via encrypted databases (Supabase), and we restrict access to your confidential operations data to authorized RVNA personnel only.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-navy">5. Third-Party Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your identifiable business data to outside parties. This does not include trusted third-party partners who assist us in operating our website or servicing you, so long as those parties agree to keep this information strictly confidential under NDA.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-navy">6. Your Rights</h2>
                <p>Under UK GDPR, you have the right to access, rectify, or request the erasure of your personal and business data handling records. To exercise these rights, please contact us at <strong>hello@rvna.co.uk</strong>.</p>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
