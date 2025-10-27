import InfoPageLayout from '@/layouts/InfoPageLayout';
import { motion } from 'framer-motion';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';
import { Check } from 'lucide-react';

const SecurityCompliancePage = () => {
  const lastUpdated = "October 26, 2025";

  const overviewPoints = [
    "Bank-level encryption (AES-256)",
    "No patient-identifiable data stored",
    "Australian Privacy Principles compliant",
    "Secure cloud infrastructure",
    "Regular security audits",
    "HTTPS secure connections (TLS 1.3)",
    "Access controls and authentication",
    "Australian-based data hosting"
  ];

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
            Security & Compliance
          </GradientHeading>
          <Description className="text-center text-brand-text-muted mb-12">
            Your Data Security is Our Priority
          </Description>

          <div className="prose prose-lg max-w-none prose-h2:font-satoshi prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-brand-border prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-bold prose-h3:text-brand-text prose-a:text-brand-accent hover:prose-a:text-amber-700 prose-strong:text-brand-text">
            
            <p>GP Guide is committed to the highest standards of data protection, privacy, and security. We understand that health practitioners handle sensitive information, and we've built our platform with security as a core principle.</p>
            
            <div className="not-prose my-8 p-6 bg-gray-100 dark:bg-black/20 rounded-2xl border border-brand-border">
                <h2 className="!border-none !pb-0 !mb-4 text-center">Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {overviewPoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-success-green flex-shrink-0" />
                            <span className="text-brand-text-muted">{point}</span>
                        </div>
                    ))}
                </div>
            </div>

            <hr />

            <h2>1. DATA SECURITY MEASURES</h2>
            <h3>1.1 Encryption</h3>
            <h4>Data in Transit:</h4>
            <ul>
                <li>All connections use HTTPS with TLS 1.3 encryption</li>
                <li>Bank-level security for all data transmission</li>
                <li>Encrypted communication between browser and servers</li>
                <li>No unencrypted data transmission</li>
            </ul>
            <h4>Data at Rest:</h4>
            <ul>
                <li>AES-256 encryption for stored data</li>
                <li>Encrypted database storage</li>
                <li>Secure backup systems</li>
                <li>Encrypted file storage</li>
            </ul>
            <h3>1.2 Authentication & Access Control</h3>
            <h4>User Authentication:</h4>
            <ul>
                <li>Secure password requirements (minimum 8 characters, complexity requirements)</li>
                <li>Password hashing with industry-standard algorithms (bcrypt/Argon2)</li>
                <li>Account lockout after multiple failed login attempts</li>
                <li>Secure password reset procedures</li>
            </ul>
            <h4>Access Controls:</h4>
            <ul>
                <li>Role-based access management</li>
                <li>Principle of least privilege</li>
                <li>Regular access audits</li>
                <li>Immediate revocation of terminated accounts</li>
            </ul>
            <h3>1.3 Infrastructure Security</h3>
            <h4>Cloud Security:</h4>
            <ul>
                <li>Secure cloud hosting with a leading provider (e.g., AWS/Google Cloud/Azure)</li>
                <li>DDoS protection</li>
                <li>Network firewalls</li>
                <li>Intrusion detection systems</li>
                <li>24/7 infrastructure monitoring</li>
            </ul>
            <h4>Server Security:</h4>
            <ul>
                <li>Regular security patches and updates</li>
                <li>Hardened server configurations</li>
                <li>Isolated production environments</li>
                <li>Redundant backup systems</li>
            </ul>
            <h3>1.4 Application Security</h3>
            <h4>Secure Development:</h4>
            <ul>
                <li>Regular security code reviews</li>
                <li>Vulnerability scanning</li>
                <li>Secure coding practices (OWASP Top 10 compliance)</li>
                <li>Dependency vulnerability monitoring</li>
            </ul>
            <h4>Security Testing:</h4>
            <ul>
                <li>Automated security testing</li>
                <li>Regular vulnerability assessments</li>
            </ul>
            
            <hr />

            <h2>2. PRIVACY PROTECTION</h2>
            <h3>2.1 No Patient Data Storage</h3>
            <p>GP Guide is designed with privacy-first architecture:</p>
            <ul>
                <li>✓ No patient names stored</li>
                <li>✓ No Medicare numbers stored</li>
                <li>✓ No addresses or contact details stored</li>
                <li>✓ No dates of birth stored</li>
                <li>✓ No patient-identifiable information retained</li>
            </ul>
            <h4>Clinical Input Processing:</h4>
            <ul>
                <li>Clinical details are processed in real-time to generate templates</li>
                <li>No long-term storage of clinical input data</li>
                <li>Templates generated and delivered immediately</li>
                <li>User responsible for securing exported documents</li>
            </ul>
            <h3>2.2 What We DO Store</h3>
            <p>We store only the minimum necessary information:</p>
            <ul>
                <li>User account details (name, email, AHPRA number)</li>
                <li>Subscription and billing information</li>
                <li>Usage logs (which tools accessed, when)</li>
                <li>Support communications</li>
            </ul>
            <p>All stored data is:</p>
            <ul>
                <li>Encrypted at rest</li>
                <li>Access-controlled</li>
                <li>Retained only as long as necessary</li>
                <li>Subject to Australian Privacy Principles</li>
            </ul>
            <h3>2.3 Australian Privacy Principles Compliance</h3>
            <p>GP Guide complies with all 13 Australian Privacy Principles (APPs). A summary of our compliance is available in our <a href="/privacy-policy">Privacy Policy</a>.</p>

            <hr />

            <h2>3. COMPLIANCE & LEGAL</h2>
            <h3>3.1 Australian Legal Compliance</h3>
            <ul>
                <li><strong>Privacy Act 1988 (Cth):</strong> Full compliance with Privacy Act requirements, APPs, and the Notifiable Data Breaches scheme.</li>
                <li><strong>Australian Consumer Law:</strong> Fair trading practices, clear terms, transparent pricing, and complaint handling procedures.</li>
                <li><strong>Medical Board of Australia Guidelines:</strong> Adherence to telehealth, professional practice, and documentation standards.</li>
            </ul>
            <h3>3.2 Professional Standards</h3>
            <ul>
                <li><strong>AHPRA Registration:</strong> Users must be AHPRA-registered practitioners, verified at signup.</li>
                <li><strong>Professional Indemnity:</strong> We maintain our own PI insurance, and users are required to maintain theirs. Clinical responsibility remains with the practitioner.</li>
                <li><strong>Medical Records:</strong> Users retain full control of exported documents. We have no access to patient records.</li>
            </ul>
            <h3>3.3 Industry Standards</h3>
            <p>While not formally certified, we align our practices with leading frameworks like ISO 27001, OWASP, NIST, and ACSC guidelines.</p>

            <hr />

            <h2>4. DATA BREACH RESPONSE</h2>
            <p>In compliance with the Notifiable Data Breaches (NDB) scheme, if a data breach involving personal information occurs, we will contain the breach, assess the risk, and notify affected users and the Office of the Australian Information Commissioner (OAIC) as required.</p>
            
            <hr />

            <h2>5. USER RESPONSIBILITIES</h2>
            <p>Security is a shared responsibility. Users are responsible for:</p>
            <ul>
                <li>Using strong, unique passwords and not sharing them.</li>
                <li>Securing their devices and accounts.</li>
                <li>Securely handling exported documents according to practice policies.</li>
                <li>Not entering patient-identifiable information into GP Guide.</li>
            </ul>

            <hr />

            <h2>6. THIRD-PARTY SERVICES</h2>
            <p>We use vetted, secure third-party services for payment processing (e.g., Stripe), cloud hosting, analytics, and email. These services are contractually bound to protect your data and comply with Australian privacy laws.</p>
            
            <hr />

            <h2>7. DATA RETENTION & DELETION</h2>
            <p>We retain your information only as long as necessary. Clinical input is processed in real-time and not stored. You may request account deletion at any time, and we will remove or anonymize your personal information, retaining only what is legally required (e.g., billing records).</p>
            
            <hr />

            <h2>8. REGULAR SECURITY UPDATES</h2>
            <p>We continuously improve our security through regular software updates, security reviews, staff training, and policy reviews to adapt to evolving threats.</p>
            
            <hr />

            <h2>9. REPORTING SECURITY ISSUES</h2>
            <p>If you discover a security vulnerability, please report it to <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a> with the subject "Security Issue". We take all reports seriously and appreciate responsible disclosure.</p>

            <hr />

            <h2>10. CONTACT & SUPPORT</h2>
            <p>For any security or privacy questions, please contact us at <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a>.</p>
            <p>Last updated: {lastUpdated}</p>
            <p>© 2025 New Era Pty Ltd (trading as GP Guide). All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default SecurityCompliancePage;
