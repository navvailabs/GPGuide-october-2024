import { Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo';

const Footer = () => {
    const productLinks = [
        { name: "Basic Plan - $7.99/week", href: "/#pricing" },
        { name: "Professional Plan - $14.99/week", href: "/#pricing" },
        { name: "Features Comparison", href: "/#features" },
        { name: "Template Examples", href: "/#testimonials" },
        { name: "How It Works", href: "/#how-it-works" }
    ];

    const supportLinks = [
        { name: "Help Center", href: "/help-center" },
        { name: "Contact Support", href: "/contact-support" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Medical Disclaimer", href: "/medical-disclaimer" },
        { name: "Refund Policy", href: "/refund-policy" }
    ];

    const companyLinks = [
        { name: "About GPGuide", href: "/about" },
        { name: "Our Mission", href: "/mission" },
        { name: "Security & Compliance", href: "/security-compliance" }
    ];

    const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            e.preventDefault();
            const targetId = href.substring(2);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-brand-bg border-t border-brand-border text-brand-text-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Company Info */}
                    <div className="space-y-4 pr-8 col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center">
                            <Logo className="h-32 w-auto" />
                        </div>
                        <p className="text-sm">Professional documentation templates for Australian GPs.</p>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h4 className="font-bold text-brand-text mb-4">Product</h4>
                        <ul className="space-y-2">
                            {productLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.href} onClick={(e) => handleScrollLink(e, link.href)} className="text-sm hover:text-brand-text transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="font-bold text-brand-text mb-4">Support</h4>
                        <ul className="space-y-2">
                            {supportLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-sm hover:text-brand-text transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div>
                        <h4 className="font-bold text-brand-text mb-4">Company</h4>
                        <ul className="space-y-2">
                            {companyLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-sm hover:text-brand-text transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 border-t border-brand-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                    <div className="text-center sm:text-left space-y-1 order-2 sm:order-1 mt-4 sm:mt-0">
                        <p>&copy; 2025 New Era Pty Ltd. All rights reserved.</p>
                        <p className="text-xs">
                            New Era Pty Ltd (trading as GPGuide) | ABN: 14 345 878 901 | Sydney, Australia | Email: <a href="mailto:support@gpguide.com.au" className="hover:text-brand-text transition-colors">support@gpguide.com.au</a>
                        </p>
                    </div>
                    <div className="flex items-center space-x-4 order-1 sm:order-2">
                        <a href="#" aria-label="LinkedIn" className="hover:text-brand-text transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-brand-text transition-colors">
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
