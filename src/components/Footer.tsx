import { BriefcaseMedical, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const productLinks = [
        "Basic Plan - $7.99/week",
        "Professional Plan - $14.99/week",
        "Features Comparison",
        "Template Examples",
        "How It Works"
    ];

    const supportLinks = [
        "Help Center",
        "Contact Support",
        "Privacy Policy",
        "Terms of Service",
        "Medical Disclaimer",
        "Refund Policy"
    ];

    const companyLinks = [
        "About GPGuide",
        "Our Mission",
        "Security & Compliance"
    ];

    return (
        <footer className="bg-black/30 backdrop-blur-xl border-t border-white/10 text-gray-400 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Company Info */}
                    <div className="space-y-4 pr-8 col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-2">
                            <BriefcaseMedical className="h-8 w-8 text-premium-gold" />
                            <span className="text-2xl font-satoshi font-bold text-gradient-gold">GPGuide</span>
                        </div>
                        <p className="text-sm">Professional documentation templates for Australian GPs.</p>
                        <div className="text-xs space-y-1 pt-2">
                            <p>New Era Pty Ltd (trading as GPGuide)</p>
                            <p>ABN: 14 345 878 901</p>
                            <p>Sydney, Australia</p>
                            <p>Email: <a href="mailto:support@gpguide.com.au" className="hover:text-white transition-colors">support@gpguide.com.au</a></p>
                        </div>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Product</h4>
                        <ul className="space-y-2">
                            {productLinks.map(link => (
                                <li key={link}>
                                    <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Support</h4>
                        <ul className="space-y-2">
                            {supportLinks.map(link => (
                                <li key={link}>
                                    <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2">
                            {companyLinks.map(link => (
                                <li key={link}>
                                    <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p className="text-gray-500 order-2 sm:order-1 mt-4 sm:mt-0">&copy; 2025 New Era Pty Ltd. All rights reserved.</p>
                    <div className="flex items-center space-x-4 order-1 sm:order-2">
                        <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white transition-colors">
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
