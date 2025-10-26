import InfoPageLayout from '@/layouts/InfoPageLayout';
import { motion } from 'framer-motion';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const MedicalDisclaimer = () => {
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
            Medical Disclaimer
          </GradientHeading>
          <Description className="text-center text-brand-text-muted mb-12">Last updated: {lastUpdated}</Description>
          
          <div className="prose prose-lg max-w-none prose-h2:font-satoshi prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-brand-border prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-bold prose-h3:text-brand-text prose-a:text-brand-accent hover:prose-a:text-amber-700 prose-strong:text-brand-text">
            
            <div className="border-l-4 border-red-500 bg-red-500/10 p-4 rounded-r-lg mb-12">
                <h2 className="!text-xl !font-bold !text-red-700 !border-none !pb-0 !mb-2">IMPORTANT: Read Carefully Before Use</h2>
                <p className="text-red-600 !my-0">GP Guide is an educational tool only and is not a substitute for professional clinical judgment. Your use of this service is at your own risk.</p>
            </div>

            <h2>Educational Tool Only</h2>
            <p>GP Guide is an <strong>EDUCATIONAL SUBSCRIPTION SERVICE</strong> for registered health practitioners in Australia. It provides template generation tools and educational materials ONLY.</p>
            <p>GP Guide is <strong>NOT</strong> a medical advice service, a diagnostic tool, a prescribing decision support system, or a substitute for clinical consultation.</p>

            <h2>User Responsibility</h2>
            <p>As a registered health practitioner using GP Guide, <strong>YOU</strong> are solely responsible for:</p>
            <ul>
                <li>All clinical decisions</li>
                <li>Patient assessment and diagnosis</li>
                <li>Treatment planning and prescribing</li>
                <li>Verifying all template content before clinical use</li>
                <li>Customizing templates for individual patients</li>
                <li>Checking current guidelines (RACGP, MBS, PBS, eTG)</li>
            </ul>
            <p>GP Guide accepts <strong>NO</strong> responsibility for:</p>
            <ul>
                <li>Clinical decisions or patient outcomes</li>
                <li>Errors or omissions in templates</li>
                <li>Outdated guideline references</li>
                <li>Adverse patient events</li>
            </ul>

            <h2>Verify All Information</h2>
            <p>You <strong>MUST</strong> independently verify all template content, guideline references, MBS item eligibility, and PBS prescribing criteria before clinical use. Medical guidelines change frequently.</p>

            <h2>Patient Data Protection</h2>
            <div className="border-l-4 border-amber-500 bg-amber-500/10 p-4 rounded-r-lg my-6">
                <p className="!my-0 text-amber-700"><strong>DO NOT ENTER PATIENT-IDENTIFIABLE INFORMATION.</strong> You are responsible for ensuring no identifiable patient data is submitted.</p>
            </div>

            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by Australian law, GP Guide and New Era Pty Ltd are <strong>NOT</strong> liable for any clinical decisions, patient outcomes, errors in templates, or any damages arising from the use of this service.</p>

            <h2>Acceptance of Disclaimer</h2>
            <p>By using GP Guide, you acknowledge that you have read, understood, and accepted this Medical Disclaimer and agree to use the service as an educational tool only, accepting full clinical responsibility for patient care.</p>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default MedicalDisclaimer;
