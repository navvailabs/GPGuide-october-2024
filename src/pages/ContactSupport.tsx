import InfoPageLayout from '@/layouts/InfoPageLayout';
import { motion } from 'framer-motion';
import { Mail, HelpCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';
import InspiredCard from '@/components/ui/InspiredCard';

const ContactSupport = () => {
  return (
    <InfoPageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <GradientHeading as="h1" className="text-3xl md:text-5xl font-bold text-center mb-4">
            Contact Support
          </GradientHeading>
          <Description className="text-lg max-w-3xl mx-auto text-center mb-12">
            Get help from our Australian-based support team.
          </Description>

          <div className="space-y-8">
            <InspiredCard className="p-8 text-center">
              <div className="flex justify-center mb-4">
                  <div className="bg-brand-accent/10 p-4 rounded-full">
                      <Mail className="h-10 w-10 text-brand-accent" />
                  </div>
              </div>
              <h2 className="text-2xl font-bold text-brand-text">Email Support</h2>
              <a href="mailto:support@gpguide.com.au" className="text-2xl font-semibold text-brand-accent hover:text-amber-700 transition-colors">
                support@gpguide.com.au
              </a>
              <p className="text-brand-text-muted mt-4">Our support team is here to help with:</p>
              <ul className="mt-2 text-brand-text-muted list-inside list-disc">
                <li>Account and billing questions</li>
                <li>Technical issues</li>
                <li>Template questions & feature requests</li>
              </ul>
              <div className="mt-6 divide-y divide-brand-border border-y border-brand-border">
                <div className="py-3">
                    <p className="font-semibold text-brand-text">Basic Plan Response Time</p>
                    <p className="text-brand-text-muted">Within 48 hours</p>
                </div>
                <div className="py-3">
                    <p className="font-semibold text-brand-text">Professional Plan Response Time</p>
                    <p className="text-brand-text-muted">Within 24 hours (priority)</p>
                </div>
              </div>
              <p className="text-sm text-brand-text-muted/80 mt-4">Business Hours: Monday-Friday, 9 AM - 6 PM AEST</p>
            </InspiredCard>

            <InspiredCard className="p-8">
              <div className="flex items-center gap-4">
                <HelpCircle className="h-8 w-8 text-brand-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-brand-text">Before You Contact Us</h3>
                  <p className="text-brand-text-muted">
                    Please check our <Link to="/help-center" className="text-brand-accent hover:text-amber-700 underline">Help Center</Link> first - you may find an immediate answer to your question.
                  </p>
                </div>
              </div>
            </InspiredCard>

            <InspiredCard className="p-8">
              <h3 className="text-xl font-bold text-brand-text mb-4">What to Include in Your Email</h3>
              <p className="text-brand-text-muted mb-4">To help us assist you quickly, please include:</p>
              <ol className="list-decimal list-inside space-y-2 text-brand-text-muted">
                <li>Your account email address</li>
                <li>Clear description of your issue or question</li>
                <li>Any error messages you're seeing</li>
                <li>Screenshots (if applicable)</li>
                <li>Browser and device information (for technical issues)</li>
                <li>Your subscription plan (Basic or Professional)</li>
              </ol>
            </InspiredCard>

            <div className="border-2 border-red-500/50 bg-red-500/5 rounded-2xl p-8">
              <div className="flex items-center gap-4">
                <AlertTriangle className="h-10 w-10 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-red-700">Emergency Clinical Situations</h3>
                  <p className="text-red-600">
                    GP Guide does not provide emergency medical support or clinical advice. For urgent clinical matters, call 000 or contact your local hospital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default ContactSupport;
