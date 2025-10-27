import InfoPageLayout from '@/layouts/InfoPageLayout';
import { motion } from 'framer-motion';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const PrivacyPolicy = () => {
  const lastUpdated = "October 26, 2025";

  return (
    <InfoPageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <GradientHeading as="h1" className="text-3xl md:text-5xl font-bold text-center mb-2">
            Privacy Policy
          </GradientHeading>
          <Description className="text-center text-brand-text-muted mb-12">Last updated: {lastUpdated}</Description>
          
          <div className="prose prose-lg max-w-none prose-h2:font-satoshi prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-brand-border prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-bold prose-h3:text-brand-text prose-a:text-brand-accent hover:prose-a:text-amber-700 prose-strong:text-brand-text">
            <p>New Era Pty Ltd (ABN: 14 345 878 901) trading as "GP Guide" is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>
            <hr />

            <h2>1. INFORMATION WE COLLECT</h2>
            <p>We collect the following types of information:</p>
            <h3>1.1 Account Information</h3>
            <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>AHPRA registration number (for eligibility verification)</li>
                <li>Professional credentials</li>
                <li>Billing information (credit/debit card details processed by third-party payment processor)</li>
            </ul>
            <h3>1.2 Usage Information</h3>
            <ul>
                <li>Login dates and times</li>
                <li>Tools and features accessed</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Usage patterns and analytics</li>
            </ul>
            <h3>1.3 Clinical Information (Minimal)</h3>
            <p>GP Guide is designed for minimal data input. We strongly recommend you do NOT enter patient-identifiable information.</p>
            <ul>
                <li>Clinical details you enter to generate templates (e.g., symptoms, conditions)</li>
                <li>These are processed in real-time to generate templates</li>
                <li>We do not store patient names, Medicare numbers, addresses, dates of birth, or other patient identifiers</li>
            </ul>
            <div className="border-l-4 border-amber-500 bg-amber-500/10 p-4 rounded-r-lg my-6">
                <p className="!my-0 text-amber-700">⚠️ <strong>WARNING:</strong> Do not enter patient-identifiable information. You are responsible for ensuring no identifiable patient data is submitted.</p>
            </div>
            <hr />

            <h2>2. HOW WE COLLECT INFORMATION</h2>
            <p>We collect information:</p>
            <ul>
                <li>Directly from you when you register, subscribe, or use our service</li>
                <li>Automatically through cookies and analytics tools</li>
                <li>From third-party payment processors (limited to transaction confirmation)</li>
            </ul>
            <hr />

            <h2>3. HOW WE USE YOUR INFORMATION</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Provide subscription access to GP Guide tools</li>
                <li>Verify your eligibility as a registered health practitioner</li>
                <li>Generate educational templates based on your input</li>
                <li>Process payments and manage billing</li>
                <li>Communicate service updates, technical issues, and support responses</li>
                <li>Improve our tools through anonymized usage analytics</li>
                <li>Comply with legal obligations</li>
            </ul>
            <p>We do <strong>NOT</strong>:</p>
            <ul>
                <li>Sell or trade your personal information</li>
                <li>Use your information for marketing without consent</li>
                <li>Share clinical input data with third parties</li>
                <li>Store patient-identifiable information</li>
            </ul>
            <hr />

            <h2>4. DISCLOSURE OF INFORMATION</h2>
            <p>We may share limited information with:</p>
            <h3>4.1 Service Providers</h3>
            <ul>
                <li>Payment processors (Stripe, PayPal, or similar - for billing only)</li>
                <li>Cloud hosting providers (for secure data storage)</li>
                <li>Analytics providers (Google Analytics or similar - anonymized data only)</li>
                <li>Email service providers (for account and support communications)</li>
            </ul>
            <p>All third-party providers are bound by confidentiality obligations and must comply with Australian privacy laws.</p>
            <h3>4.2 Legal Requirements</h3>
            <p>We may disclose information if required by law:</p>
            <ul>
                <li>Court orders or subpoenas</li>
                <li>Legal proceedings</li>
                <li>Protection of our legal rights</li>
                <li>Prevention of fraud or illegal activity</li>
                <li>Compliance with regulatory authorities (AHPRA, OAIC, etc.)</li>
            </ul>
            <h3>4.3 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. You will be notified of any such change.</p>
            <hr />

            <h2>5. OVERSEAS DISCLOSURE</h2>
            <p>Some third-party service providers (cloud hosting, payment processing) may store or process data outside Australia. When this occurs, we take reasonable steps to ensure:</p>
            <ul>
                <li>Data is protected in accordance with Australian Privacy Principles</li>
                <li>Service providers have adequate security measures</li>
                <li>Your information is handled lawfully</li>
            </ul>
            <p>Countries where data may be processed include:</p>
            <ul>
                <li>United States (AWS, Google Cloud, Stripe)</li>
                <li>European Union (if applicable cloud services used)</li>
            </ul>
            <hr />

            <h2>6. DATA SECURITY</h2>
            <p>We implement security measures including:</p>
            <ul>
                <li>Bank-level encryption (AES-256)</li>
                <li>HTTPS secure connections (TLS 1.2+)</li>
                <li>Secure cloud infrastructure</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
                <li>Staff training on privacy and security</li>
            </ul>
            <p>However, no system is 100% secure. We cannot guarantee absolute security of data transmitted over the internet.</p>
            <hr />

            <h2>7. DATA BREACH NOTIFICATION</h2>
            <p>In the event of a data breach involving personal information, we will:</p>
            <ul>
                <li>Assess the breach and take containment action</li>
                <li>Notify affected users as soon as practicable</li>
                <li>Notify the Office of the Australian Information Commissioner (OAIC) if required under the Notifiable Data Breaches (NDB) scheme</li>
                <li>Take steps to prevent future breaches</li>
            </ul>
            <hr />

            <h2>8. DATA RETENTION</h2>
            <p>We retain your information only as long as necessary to:</p>
            <ul>
                <li>Provide the service</li>
                <li>Comply with legal obligations (tax, corporate records, etc.)</li>
                <li>Resolve disputes</li>
            </ul>
            <p>Retention periods:</p>
            <ul>
                <li>Account information: Duration of subscription + 7 years (tax/legal requirements)</li>
                <li>Usage logs: 2 years</li>
                <li>Clinical input data: Not stored (processed in real-time only)</li>
                <li>Billing records: 7 years (ATO requirements)</li>
            </ul>
            <hr />

            <h2>9. YOUR RIGHTS</h2>
            <p>Under the Australian Privacy Principles, you have the right to:</p>
            <h3>9.1 Access Your Information</h3>
            <p>Request access to the personal information we hold about you.</p>
            <h3>9.2 Correct Your Information</h3>
            <p>Request correction of inaccurate, incomplete, or outdated information.</p>
            <h3>9.3 Delete Your Account</h3>
            <p>Request account deletion at any time. Upon deletion, we will:</p>
            <ul>
                <li>Remove or anonymize your personal information</li>
                <li>Retain only what is legally required (billing records, tax invoices)</li>
                <li>Cease all service access</li>
            </ul>
            <h3>9.4 Withdraw Consent</h3>
            <p>Withdraw consent for certain data uses (e.g., marketing communications).</p>
            <h3>9.5 Complain</h3>
            <p>Lodge a privacy complaint with us or directly with the OAIC.</p>
            <hr />

            <h2>10. HOW TO EXERCISE YOUR RIGHTS</h2>
            <p>To access, correct, or delete your information:</p>
            <p>Email: <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a></p>
            <p>Subject: Privacy Request</p>
            <p>Include:</p>
            <ul>
                <li>Your full name and account email</li>
                <li>Specific request (access, correction, deletion)</li>
                <li>Verification information (for security)</li>
            </ul>
            <p>We will respond within 30 days.</p>
            <hr />

            <h2>11. COOKIES AND ANALYTICS</h2>
            <p>GP Guide uses cookies and similar technologies for:</p>
            <ul>
                <li>Session management (login persistence)</li>
                <li>Analytics (Google Analytics or similar - anonymized)</li>
                <li>Performance monitoring</li>
                <li>User experience improvement</li>
            </ul>
            <p>You may disable cookies in your browser settings, but this may affect functionality.</p>
            <p>Types of cookies:</p>
            <ul>
                <li>Essential cookies (required for service operation)</li>
                <li>Analytics cookies (usage statistics - anonymized)</li>
                <li>Performance cookies (site optimization)</li>
            </ul>
            <p>We do <strong>NOT</strong> use:</p>
            <ul>
                <li>Advertising cookies</li>
                <li>Third-party tracking cookies (except analytics)</li>
            </ul>
            <hr />

            <h2>12. CHILDREN'S PRIVACY</h2>
            <p>GP Guide is intended for registered health practitioners only. We do not knowingly collect information from individuals under 18 years of age.</p>
            <hr />

            <h2>13. CHANGES TO THIS POLICY</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be:</p>
            <ul>
                <li>Posted on this page with updated "Last updated" date</li>
                <li>Notified via email for significant changes</li>
                <li>Effective immediately upon posting (unless otherwise stated)</li>
            </ul>
            <p>Continued use of GP Guide after changes constitutes acceptance of the updated policy.</p>
            <hr />

            <h2>14. CONTACT US</h2>
            <p>Privacy Officer</p>
            <p>New Era Pty Ltd (trading as GP Guide)</p>
            <p>ABN: 14 345 878 901</p>
            <p>Email: <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a></p>
            <p>For privacy complaints or inquiries, please email with "Privacy" in the subject line.</p>
            <hr />

            <h2>15. COMPLAINTS</h2>
            <p>If you believe we have breached the Australian Privacy Principles, you may:</p>
            <ol>
                <li>Contact us directly at <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a></li>
                <li>We will investigate and respond within 30 days</li>
                <li>If unsatisfied with our response, you may lodge a complaint with:</li>
            </ol>
            <p>Office of the Australian Information Commissioner (OAIC)</p>
            <p>Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a></p>
            <p>Phone: 1300 363 992</p>
            <p>Email: <a href="mailto:enquiries@oaic.gov.au">enquiries@oaic.gov.au</a></p>
            <hr />

            <p>© 2025 New Era Pty Ltd (trading as GP Guide). All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default PrivacyPolicy;
