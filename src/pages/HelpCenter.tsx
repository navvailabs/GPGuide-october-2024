import InfoPageLayout from '@/layouts/InfoPageLayout';
import { motion } from 'framer-motion';
import { AccordionItem } from '@/components/ui/AccordionItem';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const faqData = {
    "GETTING STARTED": [
        {
            q: "How do I sign up for GP Guide?",
            a: "1. Click \"Start Free Trial\" or choose a subscription plan\n2. Verify your AHPRA registration number\n3. Enter your payment details\n4. Confirm you're a registered Australian health practitioner\n5. Start generating templates immediately"
        },
        {
            q: "What plans are available?",
            a: "• Basic Plan: $7.99/week (promotional price) - Care Plans & Mental Health Plans\n• Professional Plan: $14.99/week (promotional price) - All Basic features plus DEXA Interpreter, Centrelink SU415, Workers Comp templates, and priority support\n\nAfter the promotional period, pricing returns to $19.99/week (Basic) and $29.99/week (Professional)."
        },
    ],
    "USING GP GUIDE": [
        {
            q: "How do I generate a template?",
            a: "1. Log into your GP Guide account\n2. Select the tool you need (Care Plan, Mental Health Plan, etc.)\n3. Enter the required clinical information (no patient identifiers)\n4. Review the generated template\n5. Export to Word or copy-paste into your EMR\n6. Always review and customize before adding to patient records"
        },
        {
            q: "Can I edit the generated templates?",
            a: "Yes. All templates are fully editable. You MUST review and customize all outputs before clinical use. GP Guide generates educational draft templates only."
        },
        {
            q: "What information should I enter?",
            a: "• Enter only clinical details necessary for template generation\n• DO NOT include patient names, addresses, Medicare numbers, dates of birth, or other identifiers\n• Use generic descriptions (e.g., \"55-year-old with type 2 diabetes\" not \"John Smith, DOB 01/01/1970\")"
        },
        {
            q: "How do I export templates?",
            a: "• Click \"Export to Word\" to download as .docx file\n• Click \"Copy to Clipboard\" to paste directly into your EMR\n• All exports are saved locally on your device only"
        }
    ],
    "BILLING & SUBSCRIPTIONS": [
        {
            q: "How does billing work?",
            a: "• Subscriptions are billed weekly to your credit/debit card\n• Billing occurs automatically every 7 days\n• You'll receive email confirmation of each payment\n• Tax invoices provided for all transactions"
        },
        {
            q: "How do I cancel my subscription?",
            a: "1. Log into your account\n2. Go to \"Account Settings\" > \"Subscription\"\n3. Click \"Cancel Subscription\"\n4. Confirm cancellation\n5. Access continues until end of current billing period\n\nNo cancellation fees apply. You can cancel anytime."
        },
        {
            q: "What is your refund policy?",
            a: "Please see our Refund Policy page for full details. Generally:\n• Promotional pricing: No refunds during discounted period\n• Regular pricing: Pro-rata refunds available in certain circumstances\n• Contact support@gpguide.com.au for refund requests"
        }
    ],
    "TECHNICAL SUPPORT": [
        {
            q: "Which browsers are supported?",
            a: "• Google Chrome (recommended)\n• Mozilla Firefox\n• Safari\n• Microsoft Edge\n\nMobile browsers are supported but desktop use is recommended for optimal experience."
        },
        {
            q: "Which EMR systems work with GP Guide?",
            a: "GP Guide templates can be copied into any EMR system including:\n• Best Practice\n• Medical Director\n• Genie\n• Zedmed\n• Any system accepting copy-paste text"
        },
        {
            q: "Do you have a mobile app?",
            a: "Not yet. Mobile apps are under development. Current version works on mobile browsers."
        },
        {
            q: "What if I encounter technical issues?",
            a: "Email support@gpguide.com.au with:\n• Description of the issue\n• Browser and device information\n• Screenshots (if applicable)\n• Your account email\n\nResponse times:\n• Basic Plan: Within 48 hours\n• Professional Plan: Within 24 hours (priority support)"
        }
    ],
    "CLINICAL & COMPLIANCE": [
        {
            q: "Are GP Guide templates clinically accurate?",
            a: "GP Guide templates reference current Australian medical guidelines (RACGP, eTG, PBS) as of our last update. However:\n\n• Templates are educational resources only\n• Clinical guidelines change frequently\n• You must verify all information independently\n• Always check against current guidelines before use\n• GP Guide does not guarantee clinical accuracy"
        },
        {
            q: "Is GP Guide approved by RACGP/AHPRA?",
            a: "No. GP Guide is an independent service. We are not affiliated with, endorsed by, or approved by RACGP, AHPRA, or any medical regulatory body.\n\nWe reference publicly available guidelines but make no claim of official endorsement."
        },
        {
            q: "Can I use GP Guide for prescribing decisions?",
            a: "No. GP Guide does not provide prescribing advice or clinical decision support. All clinical and prescribing decisions must be based on:\n• Your independent clinical assessment\n• Current consultation with the patient\n• Current prescribing guidelines (PBS, eTG)\n• Your professional clinical judgment"
        },
        {
            q: "Does GP Guide store patient information?",
            a: "No. GP Guide does not store patient-identifiable information. We strongly recommend:\n• Never enter patient names, Medicare numbers, addresses, DOB, or other identifiers\n• Use generic clinical descriptions only\n• All template generation occurs in real-time without data storage"
        }
    ],
    "SECURITY & PRIVACY": [
        {
            q: "Is my data secure?",
            a: "Yes. GP Guide uses:\n• Bank-level encryption (AES-256)\n• HTTPS secure connections\n• Australian Privacy Principles compliance\n• No patient identifier storage\n• Secure cloud infrastructure\n\nFor full details, see our Privacy Policy and Security & Compliance pages."
        },
        {
            q: "Is GP Guide tax deductible?",
            a: "Professional software subscriptions are generally tax deductible for Australian medical practitioners as work-related expenses. Individual circumstances vary. Consult your accountant or registered tax agent.\n\nTax invoices are provided for all payments."
        }
    ]
};


const HelpCenter = () => {
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
            Help Center
          </GradientHeading>
          <Description className="text-lg max-w-3xl mx-auto text-center mb-12">
            Find answers to common questions and learn how to get the most out of GP Guide.
          </Description>
          
          <div className="space-y-12">
            {Object.entries(faqData).map(([category, items]) => (
                <div key={category}>
                    <GradientHeading as="h2" className="text-2xl md:text-3xl font-bold text-center mb-6">
                        {category}
                    </GradientHeading>
                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <AccordionItem key={index} question={item.q} answer={item.a} />
                        ))}
                    </div>
                </div>
            ))}
             <div className="text-center mt-16 border-t border-brand-border pt-12">
                <GradientHeading as="h2" className="text-2xl md:text-3xl font-bold text-center mb-6">
                    Still Need Help?
                </GradientHeading>
                <Description className="mb-2">Contact Support</Description>
                <a href="mailto:support@gpguide.com.au" className="text-brand-accent text-lg font-semibold hover:text-amber-700 transition-colors">
                    support@gpguide.com.au
                </a>
                <Description className="mt-4 text-sm">
                    <strong>Response Times:</strong><br/>
                    Basic Plan: Within 48 hours<br/>
                    Professional Plan: Within 24 hours (priority)<br/><br/>
                    <strong>Business Hours:</strong><br/>
                    Monday-Friday, 9 AM - 6 PM AEST
                </Description>
                <Description className="mt-4 text-sm">
                    When contacting support, please include your account email, a description of your issue, any error messages, and screenshots if applicable.
                </Description>
                <p className="text-xs text-brand-text-muted mt-12">&copy; 2025 New Era Pty Ltd (trading as GP Guide). All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default HelpCenter;
