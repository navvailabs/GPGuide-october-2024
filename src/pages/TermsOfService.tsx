import InfoPageLayout from '@/layouts/InfoPageLayout';
import { motion } from 'framer-motion';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const TermsOfService = () => {
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
            Terms of Service
          </GradientHeading>
          <Description className="text-center text-brand-text-muted mb-12">Last updated: {lastUpdated}</Description>
          
          <div className="prose prose-lg max-w-none prose-h2:font-satoshi prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-brand-border prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-bold prose-h3:text-brand-text prose-a:text-brand-accent hover:prose-a:text-amber-700 prose-strong:text-brand-text">
            <p>These Terms of Service ("Terms") govern your use of GP Guide, operated by New Era Pty Ltd (ABN: 14 345 878 901) ("we," "us," "our"). By subscribing to or using GP Guide, you agree to these Terms.</p>
            
            <h2>1. Service Purpose</h2>
            <p>GP Guide is an educational subscription service for registered health practitioners in Australia, providing template generation tools and educational materials. It is <strong>NOT</strong> a substitute for clinical assessment, a diagnostic tool, or a prescribing decision support system.</p>

            <h2>2. Eligibility and User Obligations</h2>
            <p>You warrant that you are an AHPRA-registered health practitioner and are responsible for your account's security. Providing false information is grounds for immediate termination.</p>

            <h2>3. User Responsibilities</h2>
            <p>You acknowledge that <strong>YOU</strong> are solely responsible for all clinical decisions, must verify all template content, and must perform independent patient assessments. You agree <strong>NOT</strong> to enter patient-identifiable information.</p>

            <h2>4. No Clinical Relationship</h2>
            <p>Use of GP Guide does not establish a doctor-patient relationship. The service does not provide medical advice, diagnosis, or treatment.</p>

            <h2>5. Subscriptions and Billing</h2>
            <p>Subscriptions are billed weekly in advance. We reserve the right to change pricing with 30 days' notice. Failed payments may lead to suspension or termination.</p>

            <h2>6. Cancellation and Refunds</h2>
            <p>You may cancel anytime. Access continues until the end of the current billing period. Refunds are handled according to our <a href="/refund-policy">Refund Policy</a>.</p>

            <h2>7. Intellectual Property</h2>
            <p>All content and software are owned by New Era Pty Ltd. We grant you a limited, non-exclusive license to use GP Guide for your clinical practice during your subscription. You may not resell, redistribute, or reverse engineer the service.</p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>To the maximum extent permitted by law, GP Guide is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, including accuracy, fitness for a particular purpose, or non-infringement.</p>

            <h2>9. Limitation of Liability</h2>
            <p>Our total liability to you is limited to the amount you paid for the Service in the 3 months prior to the claim. Nothing in these Terms excludes your rights under Australian Consumer Law.</p>

            <h2>10. Indemnity</h2>
            <p>You agree to indemnify New Era Pty Ltd from all claims and damages arising from your use of GP Guide, your clinical decisions, or your breach of these Terms.</p>

            <h2>11. Clinical Accuracy and Guideline Currency</h2>
            <p>We do not guarantee the clinical accuracy or currency of templates. You <strong>MUST</strong> independently verify all information against current guidelines (e.g., RACGP, MBS, PBS, eTG).</p>

            <h2>12. Prohibited Uses</h2>
            <p>You may not use GP Guide for emergency medical situations, illegal purposes, sharing or reselling access, or introducing malicious code.</p>

            <h2>13. Dispute Resolution</h2>
            <p>These Terms are governed by the laws of Western Australia. Disputes should be resolved through negotiation and mediation before legal proceedings.</p>

            <h2>14. Acknowledgment</h2>
            <p>By subscribing, you acknowledge you have read, understood, and agree to be bound by these Terms, the Privacy Policy, and the Medical Disclaimer.</p>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default TermsOfService;
