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
            Get Help from Our Australian Support Team
          </Description>

          <div className="space-y-8">
            <InspiredCard className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-8 w-8 text-brand-accent flex-shrink-0" />
                <h2 className="text-2xl font-bold text-brand-text">Email Support</h2>
              </div>
              <a href="mailto:support@gpguide.com.au" className="text-2xl font-semibold text-brand-accent hover:text-amber-700 transition-colors break-words">
                support@gpguide.com.au
              </a>
              <p className="text-brand-text-muted mt-4">Our support team is here to help with:</p>
              <ul className="mt-2 text-brand-text-muted list-disc list-inside space-y-1">
                <li>Account and billing questions</li>
                <li>Technical issues</li>
                <li>Template questions</li>
                <li>Feature requests</li>
                <li>Subscription management</li>
              </ul>
              <div className="mt-6 divide-y divide-brand-border border-y border-brand-border">
                <div className="py-3">
                    <p className="font-semibold text-brand-text">Response Times:</p>
                    <p className="text-brand-text-muted">Basic Plan: Within 48 hours</p>
                    <p className="text-brand-text-muted">Professional Plan: Within 24 hours (priority support)</p>
                </div>
                <div className="py-3">
                    <p className="font-semibold text-brand-text">Business Hours:</p>
                    <p className="text-brand-text-muted">Monday-Friday, 9 AM - 6 PM AEST</p>
                </div>
              </div>
            </InspiredCard>

            <InspiredCard className="p-8">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-8 w-8 text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-text">Before You Contact Us</h3>
                  <p className="text-brand-text-muted mt-2">
                    Please check our <Link to="/help-center" className="text-brand-accent hover:text-amber-700 underline">Help Center</Link> first - you may find an immediate answer to your question.
                  </p>
                  <p className="text-brand-text-muted mt-2">Common topics covered:</p>
                  <ul className="mt-2 text-brand-text-muted list-disc list-inside text-sm space-y-1">
                    <li>How to generate templates</li>
                    <li>Billing and subscription management</li>
                    <li>Exporting and using templates</li>
                    <li>Technical troubleshooting</li>
                    <li>Clinical compliance information</li>
                  </ul>
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
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-10 w-10 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-700">Emergency Clinical Situations</h3>
                  <p className="text-red-600 mt-2">
                    ⚠️ <strong>IMPORTANT:</strong> GP Guide does not provide emergency medical support or clinical advice.
                  </p>
                  <p className="text-red-600 mt-2">For emergency medical situations:</p>
                  <ul className="mt-2 text-red-600 list-disc list-inside space-y-1">
                    <li>Call 000 (Australia)</li>
                    <li>Contact your local hospital emergency department</li>
                    <li>Seek immediate in-person medical care</li>
                  </ul>
                   <p className="text-red-600 mt-2">GP Guide is a documentation tool only and cannot assist with urgent clinical matters.</p>
                </div>
              </div>
            </div>

            <InspiredCard className="p-8">
                <h3 className="text-xl font-bold text-brand-text mb-2">Account &amp; Billing Inquiries</h3>
                <p className="text-brand-text-muted">For subscription, billing, or refund requests:</p>
                <p className="mt-2">Email: <a href="mailto:support@gpguide.com.au" className="text-brand-accent hover:text-amber-700">support@gpguide.com.au</a></p>
                <p className="text-brand-text-muted">Include your account email and invoice number (if applicable).</p>
                <p className="text-brand-text-muted mt-2">We respond to all account inquiries within 24-48 hours.</p>
            </InspiredCard>

             <InspiredCard className="p-8">
                <h3 className="text-xl font-bold text-brand-text mb-2">Feature Requests &amp; Feedback</h3>
                <p className="text-brand-text-muted"><strong>Professional Plan Members:</strong> Submit template ideas and feature requests directly via email. We review all suggestions and may build custom templates based on user feedback.</p>
                <p className="text-brand-text-muted mt-2"><strong>All Users:</strong> We welcome feedback on how to improve GP Guide. Your input helps us serve Australian GPs better.</p>
            </InspiredCard>

            <div className="text-center text-sm text-brand-text-muted mt-16">
                <h4 className="font-bold text-brand-text mb-2">Business Information</h4>
                <p>New Era Pty Ltd (trading as GP Guide)</p>
                <p>ABN: 14 345 878 901</p>
                <p>Sydney, Australia</p>
                <p>Email: <a href="mailto:support@gpguide.com.au" className="hover:text-brand-text transition-colors">support@gpguide.com.au</a></p>
                <p className="mt-8">&copy; 2025 New Era Pty Ltd (trading as GP Guide). All rights reserved.</p>
            </div>

          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default ContactSupport;
