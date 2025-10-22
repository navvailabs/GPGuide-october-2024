import InfoPageLayout from '@/layouts/InfoPageLayout';
import { motion } from 'framer-motion';
import { Mail, HelpCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <h1 className="text-3xl md:text-5xl font-bold font-satoshi bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 text-center">
            Contact Support
          </h1>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto text-center mb-12">
            Get help from our Australian-based support team.
          </p>

          <div className="space-y-8">
            <div className="glass-card p-8 text-center">
              <div className="flex justify-center mb-4">
                  <div className="bg-white/10 p-4 rounded-full">
                      <Mail className="h-10 w-10 text-cyan-400" />
                  </div>
              </div>
              <h2 className="text-2xl font-bold text-white">Email Support</h2>
              <a href="mailto:support@gpguide.com.au" className="text-2xl font-semibold text-premium-gold hover:text-amber-300 transition-colors">
                support@gpguide.com.au
              </a>
              <p className="text-neutral-300 mt-4">Our support team is here to help with:</p>
              <ul className="mt-2 text-neutral-400 list-inside list-disc">
                <li>Account and billing questions</li>
                <li>Technical issues</li>
                <li>Template questions & feature requests</li>
              </ul>
              <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                <div className="py-3">
                    <p className="font-semibold text-white">Basic Plan Response Time</p>
                    <p className="text-neutral-400">Within 48 hours</p>
                </div>
                <div className="py-3">
                    <p className="font-semibold text-white">Professional Plan Response Time</p>
                    <p className="text-neutral-400">Within 24 hours (priority)</p>
                </div>
              </div>
              <p className="text-sm text-neutral-500 mt-4">Business Hours: Monday-Friday, 9 AM - 6 PM AEST</p>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-4">
                <HelpCircle className="h-8 w-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white">Before You Contact Us</h3>
                  <p className="text-neutral-300">
                    Please check our <Link to="/help-center" className="text-premium-gold hover:text-amber-300 underline">Help Center</Link> first - you may find an immediate answer to your question.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">What to Include in Your Email</h3>
              <p className="text-neutral-300 mb-4">To help us assist you quickly, please include:</p>
              <ol className="list-decimal list-inside space-y-2 text-neutral-400">
                <li>Your account email address</li>
                <li>Clear description of your issue or question</li>
                <li>Any error messages you're seeing</li>
                <li>Screenshots (if applicable)</li>
                <li>Browser and device information (for technical issues)</li>
                <li>Your subscription plan (Basic or Professional)</li>
              </ol>
            </div>

            <div className="border-2 border-red-500/50 bg-red-900/20 rounded-2xl p-8">
              <div className="flex items-center gap-4">
                <AlertTriangle className="h-10 w-10 text-red-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-red-300">Emergency Clinical Situations</h3>
                  <p className="text-red-200">
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
