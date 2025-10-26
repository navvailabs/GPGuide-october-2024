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
            
            <h2>1. Information We Collect</h2>
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
            <p>GP Guide is designed for minimal data input. We strongly recommend you do <strong>NOT</strong> enter patient-identifiable information.</p>
            <ul>
                <li>Clinical details you enter to generate templates (e.g., symptoms, conditions)</li>
                <li>These are processed in real-time to generate templates</li>
                <li>We do not store patient names, Medicare numbers, addresses, dates of birth, or other patient identifiers</li>
            </ul>
            <div className="border-l-4 border-amber-500 bg-amber-500/10 p-4 rounded-r-lg my-6">
                <p className="!my-0 text-amber-700"><strong>Warning:</strong> Do not enter patient-identifiable information. You are responsible for ensuring no identifiable patient data is submitted.</p>
            </div>

            <h2>2. How We Collect Information</h2>
            <p>We collect information:</p>
            <ul>
                <li>Directly from you when you register, subscribe, or use our service</li>
                <li>Automatically through cookies and analytics tools</li>
                <li>From third-party payment processors (limited to transaction confirmation)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
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

            <h2>4. Disclosure of Information</h2>
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
            <p>We may disclose information if required by law.</p>
            <h3>4.3 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. You will be notified of any such change.</p>

            <h2>5. Overseas Disclosure</h2>
            <p>Some third-party service providers may store or process data outside Australia. When this occurs, we take reasonable steps to ensure data is protected in accordance with Australian Privacy Principles.</p>

            <h2>6. Data Security</h2>
            <p>We implement security measures including bank-level encryption (AES-256), HTTPS secure connections, secure cloud infrastructure, regular security audits, access controls, and staff training on privacy and security. However, no system is 100% secure.</p>

            <h2>7. Data Breach Notification</h2>
            <p>In the event of a data breach involving personal information, we will assess the breach, take containment action, notify affected users, and notify the Office of the Australian Information Commissioner (OAIC) if required under the Notifiable Data Breaches (NDB) scheme.</p>

            <h2>8. Data Retention</h2>
            <p>We retain your information only as long as necessary to provide the service and comply with legal obligations (e.g., tax records).</p>

            <h2>9. Your Rights</h2>
            <p>Under the APPs, you have the right to access, correct, or delete your information, withdraw consent for certain data uses, and lodge a privacy complaint.</p>

            <h2>10. How to Exercise Your Rights</h2>
            <p>To access, correct, or delete your information, email <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a> with the subject "Privacy Request". We will respond within 30 days.</p>

            <h2>11. Cookies and Analytics</h2>
            <p>GP Guide uses essential and analytics cookies for session management and service improvement. We do not use advertising or third-party tracking cookies (except for analytics).</p>

            <h2>12. Children's Privacy</h2>
            <p>GP Guide is for registered health practitioners only and we do not knowingly collect information from individuals under 18.</p>

            <h2>13. Changes to This Policy</h2>
            <p>We may update this Privacy Policy. Changes will be posted on this page and significant changes will be notified via email.</p>

            <h2>14. Contact Us</h2>
            <p>For privacy inquiries, contact our Privacy Officer at <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a>.</p>

            <h2>15. Complaints</h2>
            <p>If you believe we have breached the Australian Privacy Principles, please contact us first. If unsatisfied, you may lodge a complaint with the OAIC at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>.</p>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default PrivacyPolicy;
