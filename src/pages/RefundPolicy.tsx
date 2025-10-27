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
            
            <h2>1. CANCELLATION</h2>
            <h3>1.1 You May Cancel Anytime</h3>
            <ul>
                <li>No cancellation fees</li>
                <li>No questions asked</li>
                <li>No notice period required (though we appreciate advance notice)</li>
            </ul>
            <h3>1.2 How to Cancel</h3>
            <ol>
                <li>Log into your GP Guide account</li>
                <li>Navigate to: Account Settings &gt; Subscription</li>
                <li>Click "Cancel Subscription"</li>
                <li>Confirm cancellation</li>
                <li>You'll receive email confirmation</li>
            </ol>
            <h3>1.3 Effect of Cancellation</h3>
            <ul>
                <li>Access continues until end of current billing period (7 days from last payment)</li>
                <li>No further charges will occur</li>
                <li>You can re-subscribe anytime</li>
            </ul>

            <h2>2. REFUND POLICY</h2>
            <h3>2.1 Promotional Pricing Period</h3>
            <p>During promotional pricing ($7.99/week Basic, $14.99/week Professional):</p>
            <ul>
                <li><strong>NO REFUNDS</strong> for promotional period subscriptions</li>
                <li>You may cancel anytime but no refund for current week</li>
                <li>Promotional pricing clearly disclosed at signup</li>
            </ul>
            <p><strong>Reason:</strong> Promotional pricing already represents significant discount (60% off regular price).</p>
            <h3>2.2 Regular Pricing Period</h3>
            <p>After promotional period ends ($19.99/week Basic, $29.99/week Professional):</p>
            <p>Refunds <strong>MAY</strong> be available in the following circumstances only:</p>
            <h4>a) Technical Issues Preventing Use</h4>
            <ul>
                <li>GP Guide service was unavailable for more than 48 consecutive hours</li>
                <li>Technical problems prevented template generation</li>
                <li>Must be reported within 7 days of issue occurring</li>
                <li>Pro-rata refund for affected period</li>
            </ul>
            <h4>b) Billing Errors</h4>
            <ul>
                <li>Duplicate charges</li>
                <li>Incorrect amount charged</li>
                <li>Charged after cancellation</li>
                <li>Full refund of incorrect charge(s)</li>
            </ul>
            <h4>c) Accidental Duplicate Subscription</h4>
            <ul>
                <li>Created multiple accounts unintentionally</li>
                <li>Full refund for duplicate subscription within 7 days</li>
            </ul>
            <h3>2.3 NO REFUNDS for:</h3>
            <ul>
                <li>Change of mind after first 7 days</li>
                <li>Dissatisfaction with templates (subjective)</li>
                <li>Lack of use (if service was available)</li>
                <li>Better competitor pricing found</li>
                <li>Forgetting to cancel</li>
                <li>Already exported/used templates</li>
                <li>Claims after 30 days of charge</li>
            </ul>
            <h3>2.4 Time Limits</h3>
            <p>Refund requests must be submitted within:</p>
            <ul>
                <li>7 days of charge for technical issues</li>
                <li>30 days for billing errors</li>
                <li>After 30 days: <strong>NO REFUNDS</strong> will be considered</li>
            </ul>

            <h2>3. HOW TO REQUEST A REFUND</h2>
            <h3>3.1 Contact Us</h3>
            <p>Email: <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a></p>
            <p>Subject: Refund Request</p>
            <p>Include:</p>
            <ul>
                <li>Your account email</li>
                <li>Subscription plan (Basic or Professional)</li>
                <li>Date(s) of charge(s) in question</li>
                <li>Invoice number (if available)</li>
                <li>Detailed reason for refund request</li>
                <li>Evidence of issue (screenshots, error messages, etc.)</li>
            </ul>
            <h3>3.2 Review Process</h3>
            <ul>
                <li>We will review your request within 7 business days</li>
                <li>We may request additional information</li>
                <li>You'll receive email notification of decision</li>
                <li>If approved, refund processed within 7-10 business days</li>
            </ul>
            <h3>3.3 Refund Method</h3>
            <ul>
                <li>Refunds issued to original payment method</li>
                <li>Credit/debit card refunds may take 5-10 business days to appear</li>
                <li>PayPal refunds typically within 24-48 hours</li>
            </ul>

            <h2>4. AUSTRALIAN CONSUMER LAW</h2>
            <p>Nothing in this Refund Policy excludes, restricts, or modifies your rights under the Australian Consumer Law (ACL) or other applicable consumer protection laws.</p>
            <h3>4.1 Consumer Guarantees</h3>
            <p>Under Australian Consumer Law, you have the following guarantees:</p>
            <ul>
                <li>Services must be provided with acceptable care and skill</li>
                <li>Services must be fit for stated purpose</li>
                <li>Services must be delivered within reasonable time</li>
            </ul>
            <h3>4.2 If We Fail to Meet Guarantees</h3>
            <p>If GP Guide fails to meet consumer guarantees:</p>
            <ul>
                <li>You may be entitled to remedy (refund, re-supply, or compensation)</li>
                <li>Remedies depend on severity of failure</li>
            </ul>
            <p><strong>Major failure:</strong> Full refund</p>
            <p><strong>Minor failure:</strong> Reasonable remedy (e.g., service credit, partial refund)</p>
            <h3>4.3 ACCC Contact</h3>
            <p>If you believe your consumer rights have been violated:</p>
            <p>Australian Competition and Consumer Commission (ACCC)</p>
            <p>Website: <a href="https://www.accc.gov.au" target="_blank" rel="noopener noreferrer">www.accc.gov.au</a></p>
            <p>Phone: 1300 302 502</p>

            <h2>5. SPECIAL CIRCUMSTANCES</h2>
            <h3>5.1 Serious Illness or Hardship</h3>
            <p>In cases of serious illness, financial hardship, or compassionate grounds:</p>
            <ul>
                <li>Contact us at <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a></li>
                <li>Explain your circumstances</li>
                <li>We will review on case-by-case basis</li>
                <li>Discretionary refunds may be approved</li>
            </ul>
            <h3>5.2 Death of Subscriber</h3>
            <p>If a subscriber passes away:</p>
            <ul>
                <li>Family may request cancellation and refund</li>
                <li>Provide copy of death certificate</li>
                <li>Pro-rata refund for unused portion</li>
            </ul>

            <h2>6. CHARGEBACKS</h2>
            <h3>6.1 Contact Us First</h3>
            <p>If you dispute a charge, <strong>PLEASE</strong> contact us <strong>BEFORE</strong> initiating a chargeback with your bank.</p>
            <p>Most issues can be resolved quickly through direct communication.</p>
            <h3>6.2 Chargeback Consequences</h3>
            <p>If you initiate a chargeback:</p>
            <ul>
                <li>Your account may be immediately suspended</li>
                <li>We may dispute the chargeback with evidence of service delivery</li>
                <li>Successful chargebacks: Account permanently closed</li>
                <li>Failed chargebacks: You remain liable for original charge plus dispute fees</li>
            </ul>
            <h3>6.3 Fraudulent Chargebacks</h3>
            <p>Fraudulent chargebacks (claiming non-receipt of service when you used GP Guide) may result in:</p>
            <ul>
                <li>Legal action to recover funds</li>
                <li>Reporting to credit agencies</li>
                <li>Blacklisting from future use</li>
            </ul>

            <h2>7. TRIAL PERIODS (IF APPLICABLE)</h2>
            <p>If we offer free trials in the future:</p>
            <ul>
                <li>Cancel before trial ends to avoid charges</li>
                <li>No refunds if you forget to cancel</li>
                <li>Trial access ends immediately upon cancellation</li>
            </ul>

            <h2>8. SERVICE CREDITS (ALTERNATIVE TO REFUNDS)</h2>
            <p>In some cases, we may offer service credits instead of refunds:</p>
            <ul>
                <li>Extended subscription period</li>
                <li>Upgrade to higher plan</li>
                <li>Free additional features</li>
            </ul>
            <p>Service credits:</p>
            <ul>
                <li>Non-transferable</li>
                <li>Cannot be redeemed for cash</li>
                <li>Valid for 12 months</li>
            </ul>

            <h2>9. PROHIBITED ACTIVITIES</h2>
            <p><strong>NO REFUNDS</strong> will be granted if your account was terminated for:</p>
            <ul>
                <li>Breach of Terms of Service</li>
                <li>Fraudulent activity</li>
                <li>Providing false registration information</li>
                <li>Misuse of the Service</li>
                <li>Violation of Australian law</li>
            </ul>

            <h2>10. DISPUTE RESOLUTION</h2>
            <h3>10.1 Internal Review</h3>
            <p>If your refund request is denied:</p>
            <ul>
                <li>You may request internal review</li>
                <li>Provide additional evidence or information</li>
                <li>Senior staff will review decision</li>
            </ul>
            <h3>10.2 External Dispute Resolution</h3>
            <p>If you remain dissatisfied:</p>
            <ul>
                <li>Contact Australian Consumer Law authority in your state/territory</li>
                <li>Office of Fair Trading (varies by state)</li>
                <li>ACCC consumer helpline: 1300 302 502</li>
            </ul>

            <h2>11. CHANGES TO THIS POLICY</h2>
            <p>We may update this Refund Policy from time to time. Changes will be posted on this page with updated date.</p>
            <p>Continued use after changes constitutes acceptance of updated policy.</p>

            <h2>12. CONTACT US</h2>
            <p>Refund and billing inquiries:</p>
            <p>New Era Pty Ltd (trading as GP Guide)</p>
            <p>ABN: 14 345 878 901</p>
            <p>Email: <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a></p>
            <p>Response time:</p>
            <ul>
                <li>Refund requests: Within 7 business days</li>
                <li>Urgent billing issues: Within 24-48 hours</li>
            </ul>

            <h2>Summary</h2>
            <ul>
                <li>✓ Cancel anytime, no fees</li>
                <li>✓ Access continues until end of billing period</li>
                <li>✓ Refunds available for technical issues and billing errors within 7 days</li>
                <li>✓ No refunds during promotional pricing period</li>
                <li>✓ Contact us before initiating chargebacks</li>
                <li>✓ Australian Consumer Law rights apply</li>
            </ul>

            <p>© 2025 New Era Pty Ltd (trading as GP Guide). All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default RefundPolicy;
