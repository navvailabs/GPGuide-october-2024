import InfoPageLayout from '@/layouts/InfoPageLayout';
import { motion } from 'framer-motion';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';
import { Link } from 'react-router-dom';

const MissionPage = () => {
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
            Our Mission
          </GradientHeading>
          <Description className="text-center text-brand-text-muted mb-12">
            To give Australian general practitioners time back—time for patients, time for families, time for life—by providing professional, efficient, and trustworthy clinical documentation tools.
          </Description>

          <div className="prose prose-lg max-w-none prose-h2:font-satoshi prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-brand-border prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-bold prose-h3:text-brand-text prose-a:text-brand-accent hover:prose-a:text-amber-700 prose-strong:text-brand-text prose-blockquote:border-brand-accent prose-blockquote:text-brand-text-muted">
            
            <h2>THE PROBLEM WE'RE SOLVING</h2>
            <p>Australian general practice is in crisis.</p>
            <h3>GP Burnout</h3>
            <p>Studies show that over 50% of Australian GPs experience burnout. Administrative burden is a leading cause.</p>
            <h3>Time Pressure</h3>
            <p>The average GP consultation is 15 minutes, but documentation can take just as long—or longer.</p>
            <h3>After-Hours Work</h3>
            <p>Many GPs spend 10+ hours per week completing paperwork outside clinic hours, sacrificing family time and personal wellbeing.</p>
            <h3>Administrative Burden</h3>
            <p>Care plans, mental health plans, WorkCover reports, Centrelink forms—the paperwork never ends.</p>
            <h3>Workforce Shortage</h3>
            <p>Australia faces a critical GP shortage, yet existing GPs are drowning in administration rather than seeing more patients.</p>

            <hr />

            <h2>WHY THIS MATTERS</h2>
            <p>When GPs spend hours on paperwork:</p>
            <ul>
                <li>❌ Patients wait longer for appointments</li>
                <li>❌ Doctors experience burnout and leave the profession</li>
                <li>❌ Families miss out on time with their loved ones</li>
                <li>❌ Rural and remote areas lose vital medical services</li>
                <li>❌ Healthcare costs increase due to inefficiency</li>
            </ul>
            <p>We believe there's a better way.</p>

            <hr />

            <h2>OUR SOLUTION</h2>
            <p>GP Guide exists to solve one core problem: <strong>administrative inefficiency in Australian general practice.</strong></p>
            <p>We provide:</p>
            <ul>
                <li>✓ AI-powered template generation tools</li>
                <li>✓ Guidelines-based documentation assistance</li>
                <li>✓ Time-saving automation for repetitive tasks</li>
                <li>✓ Professional, customizable outputs</li>
                <li>✓ Privacy-first architecture</li>
            </ul>
            <p>Our tools help GPs complete documentation in <strong>minutes instead of hours</strong>, while maintaining professional standards and clinical quality.</p>
            
            <hr />

            <h2>OUR VISION</h2>
            <p>We envision an Australia where:</p>
            <h3>👨‍⚕️ GPs Finish Work On Time</h3>
            <p>Imagine completing your clinic day at 5 PM—not 8 PM—because documentation is efficient and streamlined.</p>
            <h3>👥 More Time for Patients</h3>
            <p>When paperwork takes less time, GPs can see more patients, spend more time in consultations, and provide better care.</p>
            <h3>🏡 Better Work-Life Balance</h3>
            <p>GPs shouldn't have to choose between their career and their family. We want to help doctors have both.</p>
            <h3>🌏 Sustainable General Practice</h3>
            <p>By reducing administrative burden, we help make general practice more attractive to medical graduates and more sustainable for experienced GPs.</p>
            <h3>🇦🇺 Stronger Australian Healthcare</h3>
            <p>Efficient, happy GPs mean better healthcare access for all Australians—in cities, suburbs, and remote communities.</p>

            <hr />

            <h2>OUR CORE VALUES</h2>
            <ol>
                <li>
                    <strong>Patient Safety First</strong><br/>
                    Clinical safety is non-negotiable. GP Guide is designed as an educational tool that supports—never replaces—clinical judgment and patient assessment. Every template requires practitioner review. Every output is customizable. Every user remains clinically responsible.
                </li>
                <li>
                    <strong>Practitioner Wellbeing</strong><br/>
                    We care about GP wellbeing. Burnout serves no one—not doctors, not patients, not families. By giving time back to GPs, we hope to contribute to a more sustainable, rewarding career in general practice.
                </li>
                <li>
                    <strong>Privacy Protection</strong><br/>
                    Patient privacy is sacred. GP Guide is built with privacy-first architecture: No patient-identifiable data storage, Real-time template generation, Bank-level encryption, Australian Privacy Principles compliance. We will never compromise on privacy.
                </li>
                <li>
                    <strong>Australian Focus</strong><br/>
                    We're laser-focused on serving Australian general practice—not international markets. Our tools reference Australian guidelines (RACGP, MBS, PBS, eTG). Our support team is Australian. Our company is Australian-owned. We understand Australian practice because we ARE Australian practice.
                </li>
                <li>
                    <strong>Professional Excellence</strong><br/>
                    We believe in maintaining the highest standards of professional documentation. GP Guide templates reference current guidelines and evidence-based practice. We support clinical excellence, not shortcuts.
                </li>
                <li>
                    <strong>Affordability and Accessibility</strong><br/>
                    Quality clinical tools shouldn't be limited to large corporate practices. GP Guide is priced to be accessible to solo GPs, registrars, and practitioners at all career stages. Everyone deserves access to efficiency.
                </li>
                <li>
                    <strong>Continuous Improvement</strong><br/>
                    Healthcare evolves. Guidelines change. We evolve with it. We're committed to regular updates, user feedback integration, and continuous improvement of our tools.
                </li>
            </ol>

            <hr />
            
            <h2>OUR COMMITMENT TO AUSTRALIAN GENERAL PRACTICE</h2>
            <p>We believe Australian GPs are the backbone of the healthcare system.</p>
            <p>You provide:</p>
            <ul>
                <li>Comprehensive, continuous care</li>
                <li>First-line diagnosis and management</li>
                <li>Preventive health services</li>
                <li>Mental health support</li>
                <li>Chronic disease management</li>
                <li>Coordination of specialist care</li>
            </ul>
            <p>You deserve tools that support your vital work—not add to your burden.</p>

            <hr />

            <h2>WHAT SUCCESS LOOKS LIKE</h2>
            <p>We'll know we're succeeding when:</p>
            <ul>
                <li>📊 Time Saved: Australian GPs report saving hours every week on clinical documentation.</li>
                <li>😊 Reduced Burnout: Practitioners experience less stress and better work-life balance.</li>
                <li>👥 More Patient Access: GPs can see more patients because documentation is efficient.</li>
                <li>🎓 Attractive Career: Medical graduates choose general practice because it's sustainable.</li>
                <li>🌏 Rural Retention: Rural and remote GPs stay in their communities because administrative burden is manageable.</li>
                <li>💼 Sustainable Practices: Small practices and solo GPs have access to the same efficiency tools as large corporate groups.</li>
            </ul>
            
            <hr />

            <h2>BEYOND DOCUMENTATION TOOLS</h2>
            <p>While GP Guide currently focuses on clinical documentation, our long-term mission extends further:</p>
            <p><strong>Future Vision:</strong></p>
            <ul>
                <li>Supporting GP education and professional development</li>
                <li>Contributing to rural and remote GP retention</li>
                <li>Advocating for fair recognition of GP administrative burden</li>
                <li>Supporting next-generation GPs entering the workforce</li>
                <li>Improving healthcare accessibility for all Australians</li>
            </ul>
            
            <hr />

            <h2>OUR RESPONSIBILITY</h2>
            <p>We take our responsibility seriously:</p>
            <ul>
                <li>✓ Clinical Safety: We design tools that support—never compromise—patient safety.</li>
                <li>✓ Professional Standards: We uphold the highest standards of professional practice and documentation.</li>
                <li>✓ Legal Compliance: We comply with all Australian healthcare, privacy, and consumer laws.</li>
                <li>✓ Transparency: We're honest about what our tools can and cannot do.</li>
                <li>✓ Accountability: We listen to feedback, fix problems, and continuously improve.</li>
            </ul>

            <hr />

            <h2>WHY WE'RE DIFFERENT</h2>
            <p>Other healthcare software focuses on:</p>
            <ul>
                <li>Practice management</li>
                <li>Clinical decision support systems</li>
                <li>Electronic medical records</li>
                <li>Telehealth platforms</li>
            </ul>
            <p>GP Guide focuses on one thing exceptionally well: <strong>Efficient, professional clinical documentation for Australian general practice.</strong></p>
            <p>We're not trying to replace your EMR or change your workflow.</p>
            <p>We're here to make one part of your day—documentation—significantly faster and easier.</p>

            <hr />

            <h2>JOIN OUR MISSION</h2>
            <p>GP Guide isn't just a product—it's a movement.</p>
            <p>A movement to:</p>
            <ul>
                <li>Give time back to Australian GPs</li>
                <li>Reduce administrative burden</li>
                <li>Improve work-life balance</li>
                <li>Make general practice sustainable</li>
                <li>Support better patient care</li>
            </ul>
            <p>When you subscribe to GP Guide, you're not just purchasing software.</p>
            <p>You're joining hundreds of Australian GPs who refuse to accept that endless paperwork is "just part of the job."</p>
            <blockquote>You're saying: "I deserve better. My family deserves better. My patients deserve better."</blockquote>

            <hr />

            <h2>THE FUTURE WE'RE BUILDING TOGETHER</h2>
            <p>Imagine Australian general practice in 2030:</p>
            <ul>
                <li>✓ GPs complete documentation in minutes, not hours</li>
                <li>✓ Clinic days end on time</li>
                <li>✓ Work-life balance is achievable</li>
                <li>✓ Administrative burden is manageable</li>
                <li>✓ Medical graduates choose general practice</li>
                <li>✓ Rural communities retain their GPs</li>
                <li>✓ Patients have better access to care</li>
                <li>✓ The healthcare system is sustainable</li>
            </ul>
            <p>This is the future we're working toward.</p>
            <p>And we can't do it without you.</p>

            <hr />

            <h2>EVERY GP MATTERS</h2>
            <p>Whether you're:</p>
            <ul>
                <li>A solo GP in rural Australia</li>
                <li>Part of a busy urban practice</li>
                <li>A registrar just starting out</li>
                <li>An experienced GP considering retirement</li>
                <li>Working part-time while raising a family</li>
                <li>Managing a complex patient panel</li>
            </ul>
            <p><strong>You matter. Your time matters. Your wellbeing matters.</strong></p>
            <p>GP Guide is here to serve YOU.</p>

            <hr />

            <h2>OUR PROMISE</h2>
            <p>We promise to:</p>
            <ul>
                <li>✓ Keep improving our tools based on your feedback</li>
                <li>✓ Maintain affordable pricing accessible to all GPs</li>
                <li>✓ Prioritize privacy and clinical safety</li>
                <li>✓ Support Australian general practice excellence</li>
                <li>✓ Listen to your needs and adapt accordingly</li>
                <li>✓ Be transparent about our capabilities and limitations</li>
                <li>✓ Provide responsive, Australian-based support</li>
            </ul>

            <hr />

            <h2>BE PART OF THE SOLUTION</h2>
            <p>The Australian GP workforce crisis won't be solved by one tool.</p>
            <p>But every hour we give back to GPs matters.</p>
            <p>Every evening a doctor gets home in time for dinner matters.</p>
            <p>Every burnout prevented matters.</p>
            <p>GP Guide is one piece of the solution—and you're invited to be part of it.</p>

            <hr />

            <h2>START TODAY</h2>
            <p>Ready to reclaim your time and reduce administrative burden?</p>
            <div className="not-prose flex flex-wrap gap-4 my-6">
                <Link to="/#pricing" className="bg-brand-accent text-brand-bg font-bold py-3 px-6 rounded-full text-base shadow-lg hover:scale-105 transform transition-transform duration-300">
                    Start Free Trial
                </Link>
            </div>
            <ul>
                <li><Link to="/#pricing">View Pricing Plans</Link></li>
                <li><Link to="/#how-it-works">See How It Works</Link></li>
            </ul>
            
            <hr />

            <h2>SHARE OUR MISSION</h2>
            <p>Know a GP drowning in paperwork?</p>
            <p>Share GP Guide and help spread the word about efficient documentation tools.</p>
            <p>Together, we can make Australian general practice sustainable again.</p>

            <hr />

            <h2>CONTACT US</h2>
            <p>Questions about our mission or how GP Guide supports Australian GPs?</p>
            <p>Email: <a href="mailto:support@gpguide.com.au">support@gpguide.com.au</a></p>
            <p>We'd love to hear from you.</p>

            <hr />

            <blockquote>"The best way to predict the future is to create it." — Peter Drucker</blockquote>
            <p>Let's create a better future for Australian general practice—together.</p>

            <hr />
            
            <p>© 2025 New Era Pty Ltd (trading as GP Guide). All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </InfoPageLayout>
  );
};

export default MissionPage;
