import InfoPageLayout from '@/layouts/InfoPageLayout';

const MedicalDisclaimer = () => {
  const lastUpdated = "October 26, 2025";

  return (
    <InfoPageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold font-satoshi bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-2">
              Medical Disclaimer
            </h1>
            <p className="text-center text-neutral-400">Last updated: {lastUpdated}</p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none prose-h2:font-satoshi prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/10 prose-a:text-premium-gold hover:prose-a:text-amber-300 prose-strong:text-white">
            
            <div className="border-l-4 border-red-500/80 bg-red-900/20 p-4 rounded-r-lg mb-12">
                <h2 className="!text-xl !font-bold !text-red-300 !border-none !pb-0 !mb-2">IMPORTANT: Read Carefully Before Use</h2>
                <p className="text-red-200 !my-0">GP Guide is an educational tool only and is not a substitute for professional clinical judgment. Your use of this service is at your own risk.</p>
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
            <div className="border-l-4 border-amber-500/80 bg-amber-900/20 p-4 rounded-r-lg my-6">
                <p className="!my-0 text-amber-200"><strong>DO NOT ENTER PATIENT-IDENTIFIABLE INFORMATION.</strong> You are responsible for ensuring no identifiable patient data is submitted.</p>
            </div>

            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by Australian law, GP Guide and New Era Pty Ltd are <strong>NOT</strong> liable for any clinical decisions, patient outcomes, errors in templates, or any damages arising from the use of this service.</p>

            <h2>Acceptance of Disclaimer</h2>
            <p>By using GP Guide, you acknowledge that you have read, understood, and accepted this Medical Disclaimer and agree to use the service as an educational tool only, accepting full clinical responsibility for patient care.</p>
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default MedicalDisclaimer;
