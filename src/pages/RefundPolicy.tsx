import InfoPageLayout from '@/layouts/InfoPageLayout';
import { motion } from 'framer-motion';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const RefundPolicy = () => {
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
            Refund Policy
          </GradientHeading>
          <Description className="text-center text-brand-text-muted mb-12">Last updated: {lastUpdated}</Description>
          
          <div className="prose prose-lg max-w-none prose-h2:font-satoshi prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-brand-border prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-bold prose-h3:text-brand-text prose-a:text-brand-accent hover:prose-a:text-amber-700 prose-strong:text-brand-text">
            <p>This Refund Policy explains New Era Pty Ltd's (trading as "GP Guide") refund and cancellation procedures in accordance with Australian Consumer Law.</p>
            
            <h2>1. Cancellation</h2>
            <h3>1.1 You May Cancel Anytime</h3>
            <ul>
                <li>No cancellation fees</li>
                <li>No questions asked</li>
                <li>No notice period required</li>
            </ul>
            <h3>1.2 How to Cancel</h3>
            <ol>
                <li>Log into your GP Guide account</li>
                <li>Navigate to: Account Settings &gt; Subscription</li>
                <li>Click "Cancel Subscription" and confirm</li>
            </ol>
            <h3>1.3 Effect of Cancellation</h3>
            <p>Access continues until the end of the current billing period. No further charges will occur.</p>

            <h2>2. Refund Policy</h2>
            <h3>2.1 Promotional Pricing Period</h3>
            <p><strong>NO REFUNDS</strong> for promotional period subscriptions. You may cancel anytime but no refund for the current week will be provided as the promotional price already represents a significant discount.</p>
            <h3>2.2 Regular Pricing Period</h3>
            <p>Refunds may be available for technical issues preventing use (reported within 7 days), billing errors, or accidental duplicate subscriptions.</p>
            <h3>2.3 No Refunds For:</h3>
            <p>Change of mind, lack of use, forgetting to cancel, or claims made after 30 days of the charge.</p>

            <h2>3. How to Request a Refund</h2>
            <p>Email <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a> with "Refund Request" in the subject. Include your account email, date of charge, and a detailed reason. We will review and respond within 7 business days.</p>

            <h2>4. Australian Consumer Law</h2>
            <p>Nothing in this policy excludes your rights under the Australian Consumer Law (ACL). If we fail to meet consumer guarantees, you may be entitled to a remedy (refund, re-supply, or compensation) depending on the severity of the failure.</p>

            <h2>5. Chargebacks</h2>
            <p>Please contact us to resolve any disputed charges before initiating a chargeback with your bank. Fraudulent chargebacks may result in account termination and legal action.</p>

            <h2>Summary</h2>
            <ul>
                <li>✓ Cancel anytime, no fees</li>
                <li>✓ Access continues until end of billing period</li>
                <li>✓ Refunds available for technical issues and billing errors (conditions apply)</li>
                <li>✓ No refunds during promotional pricing period</li>
                <li>✓ Australian Consumer Law rights apply</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default RefundPolicy;
