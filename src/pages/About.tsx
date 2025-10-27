import InfoPageLayout from '@/layouts/InfoPageLayout';
import { motion } from 'framer-motion';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
            About GP Guide
          </GradientHeading>
          <Description className="text-center text-brand-text-muted mb-12">
            Professional Documentation Tools for Australian GPs
          </Description>

          <div className="prose prose-lg max-w-none prose-h2:font-satoshi prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-brand-border prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-bold prose-h3:text-brand-text prose-a:text-brand-accent hover:prose-a:text-amber-700 prose-strong:text-brand-text prose-blockquote:border-brand-accent prose-blockquote:text-brand-text-muted">
            
            <h2>WHO WE ARE</h2>
            <p>GP Guide is a professional documentation platform built specifically for Australian general practitioners and health practitioners. We understand the administrative burden facing modern medical practice, and we're here to help.</p>
            <p>Founded by Australian GPs who experienced firsthand the growing documentation demands of contemporary practice, GP Guide was created to give time back to doctors—time to focus on patients, not paperwork.</p>
            
            <hr />

            <h2 id="our-story">OUR STORY</h2>
            <h3>The Challenge:</h3>
            <p>Every Australian GP knows the feeling—running late in clinic because each patient requires extensive documentation. Care plans that take 30 minutes to complete. Mental health plans with repetitive formatting. DEXA reports requiring manual interpretation. Centrelink forms demanding detailed assessments.</p>
            <p>Meanwhile, patients are waiting. Families are missing you at home. And the administrative burden keeps growing.</p>
            <h3>The Solution:</h3>
            <p>GP Guide was born from this frustration. Our founding team—practicing Australian GPs—asked a simple question:</p>
            <blockquote>"What if we could generate professional, guideline-based documentation templates in minutes instead of hours?"</blockquote>
            <p>From that question, GP Guide was created.</p>
            
            <hr />

            <h2>WHAT WE DO</h2>
            <p>GP Guide provides AI-powered template generation tools for common clinical documentation tasks:</p>
            <ul>
                <li>✓ Chronic Disease Management Plans (MBS 721, 723, 732)</li>
                <li>✓ GP Mental Health Treatment Plans (MBS 2700, 2701, 2715, 2717)</li>
                <li>✓ DEXA Scan Interpretation and Osteoporosis Management</li>
                <li>✓ Centrelink Medical Certificates (SU415 - Disability Support Pension)</li>
                <li>✓ Workers Compensation Reports and Assessments</li>
                <li>✓ Allied Health Referrals (Physiotherapy, Psychology, Dietitian)</li>
            </ul>
            <p>Our templates reference current Australian medical guidelines including:</p>
            <ul>
                <li>Royal Australian College of General Practitioners (RACGP)</li>
                <li>Therapeutic Guidelines (eTG)</li>
                <li>Medicare Benefits Schedule (MBS)</li>
                <li>Pharmaceutical Benefits Scheme (PBS)</li>
            </ul>
            <p>All templates are:</p>
            <ul>
                <li>Fully editable and customizable</li>
                <li>Exportable to Word or copy-pasteable to any EMR</li>
                <li>Generated with no patient-identifiable data storage</li>
                <li>Designed as educational starting points for practitioner review</li>
            </ul>
            
            <hr />

            <h2>HOW WE'RE DIFFERENT</h2>
            <h3>🇦🇺 Built for Australian Practice</h3>
            <p>We're not a generic international product adapted for Australia. GP Guide was built from the ground up for Australian general practice, incorporating:</p>
            <ul>
                <li>MBS item requirements</li>
                <li>PBS prescribing criteria</li>
                <li>RACGP guidelines</li>
                <li>Australian Privacy Principles compliance</li>
                <li>Local terminology and practice patterns</li>
            </ul>
            <h3>👨‍⚕️ Designed BY Doctors, FOR Doctors</h3>
            <p>Our founding team includes practicing Australian GPs. We use GP Guide in our own practices every day. Every feature is designed with real clinical workflows in mind.</p>
            <h3>📝 Education, Not Automation</h3>
            <p>We believe in augmenting clinical expertise, not replacing it. GP Guide provides educational draft templates that practitioners review, customize, and approve—never automated decisions.</p>
            <h3>🔒 Privacy-First Architecture</h3>
            <p>We built GP Guide with privacy as a core principle:</p>
            <ul>
                <li>No patient-identifiable data storage</li>
                <li>Templates generated in real-time</li>
                <li>Bank-level encryption (AES-256)</li>
                <li>Australian Privacy Principles compliant</li>
                <li>You control all exported documents</li>
            </ul>
            <h3>⚡ Time Back to You</h3>
            <p>Our mission is simple: Give Australian GPs time back. Time for patients. Time for family. Time for life outside the clinic.</p>

            <hr />

            <h2>OUR TEAM</h2>
            <p>GP Guide is operated by New Era Pty Ltd (ABN: 14 345 878 901), an Australian company based in Sydney.</p>
            <p>Our team includes:</p>
            <ul>
                <li>Practicing Australian GPs with combined 40+ years experience</li>
                <li>Medical education specialists</li>
                <li>Healthcare technology developers</li>
                <li>Clinical guideline experts</li>
                <li>Privacy and compliance professionals</li>
            </ul>
            
            <hr />

            <h2>OUR COMMITMENT TO QUALITY</h2>
            <h3>📚 Regular Updates</h3>
            <p>We review and update templates regularly to reflect:</p>
            <ul>
                <li>Changing clinical guidelines</li>
                <li>New MBS items and criteria</li>
                <li>Updated PBS restrictions</li>
                <li>Emerging evidence and best practices</li>
            </ul>
            <h3>🛡️ Clinical Governance</h3>
            <p>Every template is developed with reference to current Australian guidelines and reviewed by practicing clinicians.</p>
            <p>However, we remind all users: Templates are educational resources requiring independent verification. Clinical responsibility remains with the treating practitioner.</p>
            <h3>💬 User Feedback</h3>
            <p>GP Guide evolves based on feedback from Australian GPs. Professional Plan members can submit template ideas, and we regularly build new tools based on user requests.</p>
            
            <hr />

            <h2>OUR VALUES</h2>
            <ul>
                <li><strong>Patient Safety First:</strong> Clinical safety is our top priority. GP Guide is designed as an educational tool that supports—never replaces—clinical judgment.</li>
                <li><strong>Professional Excellence:</strong> We strive to help Australian GPs maintain the highest standards of professional documentation and patient care.</li>
                <li><strong>Privacy Protection:</strong> We respect patient privacy and practitioner confidentiality. Data security and privacy compliance are non-negotiable.</li>
                <li><strong>Australian Focus:</strong> We're committed to serving the unique needs of Australian general practice, not international markets.</li>
                <li><strong>Continuous Improvement:</strong> We're always learning, updating, and improving based on user feedback and evolving clinical guidelines.</li>
                <li><strong>Affordability:</strong> Quality clinical tools shouldn't break the bank. We price GP Guide to be accessible to GPs at all career stages.</li>
            </ul>

            <hr />

            <h2>WHY GPs TRUST GP GUIDE</h2>
            <blockquote>"Saves me hours every week. The care plan generator alone pays for itself."<br/>— Dr. Sarah M., Sydney GP</blockquote>
            <blockquote>"Finally, a tool built for Australian practice. The MBS references are spot-on."<br/>— Dr. James L., Melbourne GP</blockquote>
            <blockquote>"The mental health plan templates are comprehensive yet easy to customize."<br/>— Dr. Priya S., Brisbane GP</blockquote>

            <hr />

            <h2 id="compliance">OUR COMMITMENT TO COMPLIANCE</h2>
            <p>GP Guide is designed to comply with:</p>
            <ul>
                <li>Privacy Act 1988 (Cth) and Australian Privacy Principles</li>
                <li>Australian Consumer Law</li>
                <li>Medical Board of Australia guidelines</li>
                <li>AHPRA registration requirements</li>
                <li>Professional indemnity insurance standards</li>
            </ul>
            <p>We maintain:</p>
            <ul>
                <li>Professional indemnity insurance</li>
                <li>Secure Australian-based support</li>
                <li>Transparent terms and policies</li>
                <li>Ongoing legal and compliance review</li>
            </ul>

            <hr />

            <h2>PROFESSIONAL INDEMNITY INSURANCE</h2>
            <p>GP Guide maintains professional indemnity insurance appropriate for our service.</p>
            <p>However, users must maintain their own professional indemnity coverage for clinical practice. GP Guide templates are educational tools—clinical responsibility remains with the treating practitioner.</p>

            <hr />

            <h2>NOT AFFILIATED WITH REGULATORY BODIES</h2>
            <p>GP Guide is an independent service. We are NOT affiliated with, endorsed by, or approved by:</p>
            <ul>
                <li>Royal Australian College of General Practitioners (RACGP)</li>
                <li>Australian Health Practitioner Regulation Agency (AHPRA)</li>
                <li>Medical Board of Australia</li>
                <li>Therapeutic Guidelines Limited</li>
                <li>Medicare Australia or Services Australia</li>
            </ul>
            <p>We reference publicly available guidelines from these organizations for educational purposes, with appropriate disclaimers.</p>

            <hr />

            <h2>OUR VISION FOR THE FUTURE</h2>
            <p>We envision a future where:</p>
            <ul>
                <li>Australian GPs spend less time on paperwork and more time with patients</li>
                <li>Clinical documentation is streamlined, not burdensome</li>
                <li>Technology augments clinical expertise without replacing human judgment</li>
                <li>Every GP has access to professional-grade documentation tools</li>
                <li>Administrative efficiency improves work-life balance for doctors</li>
            </ul>
            <p>GP Guide is just the beginning. We're constantly developing new tools to serve Australian general practice.</p>

            <hr />
            
            <h2>COMING SOON</h2>
            <p>We're working on exciting new features:</p>
            <ul>
                <li>Specialist referral letter generator</li>
                <li>Health assessment templates (MBS 45+, 75+)</li>
                <li>Pathology result interpreter</li>
                <li>Chronic disease review templates</li>
                <li>Mobile app (iOS and Android)</li>
                <li>EMR integrations with major Australian systems</li>
            </ul>

            <hr />

            <h2>JOIN US IN TRANSFORMING AUSTRALIAN GENERAL PRACTICE</h2>
            <p>Whether you're a solo GP, part of a group practice, or a registrar starting your career, GP Guide is designed to support your documentation needs.</p>
            <p>Try GP Guide today and discover how much time you can save.</p>
            <div className="not-prose flex flex-wrap gap-4 my-6">
                <Link to="/#pricing" className="bg-brand-accent text-brand-bg font-bold py-3 px-6 rounded-full text-base shadow-lg hover:scale-105 transform transition-transform duration-300">
                    Start Your Free Trial
                </Link>
            </div>
            <p>Or learn more:</p>
            <ul>
                <li><Link to="/#pricing">View Pricing Plans</Link></li>
                <li><Link to="/#testimonials">See Template Examples</Link></li>
                <li><Link to="/help-center">Read Help Center</Link></li>
            </ul>
            
            <hr />

            <h2>TRANSPARENCY AND ACCOUNTABILITY</h2>
            <p>We believe in transparency:</p>
            <ul>
                <li>Clear pricing with no hidden fees</li>
                <li>Honest limitations (we're educational tools, not clinical decision systems)</li>
                <li>Responsive support from real Australians</li>
                <li>Open communication about updates and changes</li>
            </ul>
            <p>If you have feedback, questions, or concerns:<br/>Email: <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a></p>
            <p>We read and respond to every message.</p>

            <hr />

            <h2>AUSTRALIAN OWNED AND OPERATED</h2>
            <p>GP Guide is proudly:</p>
            <ul>
                <li>Australian owned</li>
                <li>Australian developed</li>
                <li>Australian supported</li>
                <li>Designed for Australian practice</li>
            </ul>
            <p>Your subscription supports Australian jobs, Australian healthcare innovation, and the future of Australian general practice.</p>

            <hr />

            <h2>OUR COMMITMENT TO YOU</h2>
            <p>When you subscribe to GP Guide, you get:</p>
            <ul>
                <li>✓ Professional documentation tools built for Australian practice</li>
                <li>✓ Regular updates with new features and templates</li>
                <li>✓ Responsive support from Australian-based team</li>
                <li>✓ Privacy-first architecture with no patient data storage</li>
                <li>✓ Affordable pricing with transparent terms</li>
                <li>✓ Educational resources to improve documentation efficiency</li>
                <li>✓ A partner committed to supporting Australian GPs</li>
            </ul>
            <p>We're not just a software company—we're fellow clinicians who understand the challenges you face every day.</p>

            <hr />

            <h2>LET'S BUILD THE FUTURE TOGETHER</h2>
            <p>GP Guide evolves based on your feedback. Professional Plan members can submit template ideas, feature requests, and suggestions.</p>
            <p>Your input shapes the future of GP Guide.</p>
            <p>Together, we're creating tools that make Australian general practice more efficient, more sustainable, and more rewarding.</p>

            <hr />

            <h2>CONTACT US</h2>
            <p>Have questions about GP Guide?</p>
            <p>General Inquiries: <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a><br/>
            Clinical Questions: See our <Link to="/medical-disclaimer">Medical Disclaimer</Link>—we don't provide clinical advice</p>
            <p>New Era Pty Ltd (trading as GP Guide)<br/>
            ABN: 14 345 878 901<br/>
            Sydney, Australia</p>

            <hr />

            <p>© 2025 New Era Pty Ltd (trading as GP Guide). All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default AboutPage;
