import { motion } from 'framer-motion';
import { GradientHeading } from '@/components/ui/GradientHeading';

const featureSections = [
    {
        eyebrow: 'Chronic Disease Management',
        title: '10x Smarter Care Plan Generation',
        description: 'Generate comprehensive, RACGP-compliant GPMPs and CDMs in minutes. Our templates are structured to meet MBS requirements and support best-practice chronic disease management.',
        features: [
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6869ff894fbc931013c2cb1f_layout-alt-01.svg', text: 'GP Management Plans (GPMP) & TCAs' },
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/686a02b9662f7653885f8433_monitor-01.svg', text: 'Chronic Disease Management (CDM) support' },
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6869ff89538ac281187b2420_eye.svg', text: 'RACGP-compliant accessibility and best practices' },
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6869ff89f9a56751f1b4b45f_clock.svg', text: 'Swap out sections in seconds with variants' },
        ],
        visuals: {
            main: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6704add93a92e1395f7c877d_ec53fca6814369cf997b11a201a3688b_invite-modal.svg',
            float1: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6364b72e0bb372300f554627_user-koray-okumus.svg',
            float2: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6364b72e0bb372aaa9554625_user-ava-wright.svg',
            float3: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6704a2089eaef119f2ebe079_ed4165a2632f4fe580b28256e0802468_variants.svg',
            float4: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6704a2f5a8e6a85ac7c4a3bb_289dcd8e482fd3a82e1a8aa91ba98836_swatch-brand-600.svg',
            float5: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6704a2f5dd83f5e9402f917d_758d7c4c8f653e46cb808de60f51caf6_swatch-gray-700.svg',
        },
        iconImage: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/681e94d30ac7141d26dbedc1_6725eadae96470822dffc471a2af5cb8_10x-smarter.webp'
    },
    {
        eyebrow: 'Mental Wellness Support',
        title: 'Production-Ready Mental Health Plans',
        description: 'Efficiently create Mental Health Treatment Plans (MHTP) with guided templates covering assessment, goals, and crisis planning, helping you provide timely support.',
        features: [
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6869ff894fbc931013c2cb1f_layout-alt-01.svg', text: 'Mental State Examination (MSE) builder' },
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/686a02b9662f7653885f8433_monitor-01.svg', text: 'K10, DASS-21, PHQ-9, GAD-7 integration' },
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6869ff89538ac281187b2420_eye.svg', text: 'Evidence-based treatment suggestions' },
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6869ff89f9a56751f1b4b45f_clock.svg', text: 'Referral and follow-up planning' },
        ],
        visuals: {
            main: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/681e94d2958a0a3419999a38_6704b12011a84b065671a56f_beautiful-analytics.webp',
            float1: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6364b72e0bb37207a9554626_user-candice-wu.svg',
            float2: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6364b72e0bb372e5f6554629_user-natali-craig.svg',
            float3: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6704b087913509204d8058a3_72c3a35c536248a31363695d73269899_hero-header-section.svg',
        },
        iconImage: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/681e94d30ac7141d26dbedc1_6725eadae96470822dffc471a2af5cb8_10x-smarter.webp'
    },
    {
        eyebrow: 'Practice Efficiency Tools',
        title: 'Smart, Easy-to-Use Specialist Tools',
        description: 'Go beyond standard plans with tools for specific clinical scenarios and administrative tasks, from interpreting DEXA scans to completing Centrelink forms.',
        features: [
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6869ff894fbc931013c2cb1f_layout-alt-01.svg', text: 'DEXA Scan & Opioid Calculators' },
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/686a02b9662f7653885f8433_monitor-01.svg', text: 'Centrelink & NDIS Form Assistants' },
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6869ff89538ac281187b2420_eye.svg', text: 'Workers Compensation Certificates' },
            { icon: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6869ff89f9a56751f1b4b45f_clock.svg', text: 'Fitness to Drive assessment guides' },
        ],
        visuals: {
            main: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/681e94d257219e5902b769a3_6704c35a639a0496d44563a3_sales-report.webp',
            float1: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6364b72e0bb37207a9554626_user-candice-wu.svg',
            float2: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6364b72e0bb372e5f6554629_user-natali-craig.svg',
            float3: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/6704b087913509204d8058a3_72c3a35c536248a31363695d73269899_hero-header-section.svg',
        },
        iconImage: 'https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/681e94d30ac7141d26dbedc1_6725eadae96470822dffc471a2af5cb8_10x-smarter.webp'
    }
];

const TemplateFeatures = () => {
    return (
        <div className="py-12 space-y-28 bg-brand-bg">
            {featureSections.map((section, index) => (
                <motion.section
                    key={index}
                    className="w-full py-12 px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-7xl mx-auto">
                        <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                            {/* Left Content */}
                            <div className={`max-w-2xl ${index === 1 ? 'lg:order-2' : ''}`}>
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-brand-surface border border-brand-border rounded-2xl p-1 flex items-center justify-center shadow-lg">
                                        <img
                                            src={section.iconImage}
                                            alt="Feature icon"
                                            className="w-full h-full rounded-xl shadow-md"
                                            width={360}
                                            height={360}
                                        />
                                    </div>
                                </div>
                                <h3 className="text-brand-accent font-semibold mb-2">
                                    {section.eyebrow}
                                </h3>
                                <GradientHeading as="h2" className="text-4xl lg:text-[34px] font-semibold text-left mb-4 leading-tight tracking-tight">
                                    {section.title}
                                </GradientHeading>
                                <p className="text-lg text-brand-text-muted mb-8 leading-relaxed">
                                    {section.description}
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {section.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <img
                                                src={feature.icon}
                                                alt=""
                                                className="w-6 h-6 flex-shrink-0"
                                                width={24}
                                                height={24}
                                            />
                                            <p className="text-brand-accent font-semibold leading-snug">
                                                {feature.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Visual */}
                            <div className={`relative w-full h-[360px] flex items-center justify-center ${index === 1 ? 'lg:order-1' : ''}`}>
                                {section.visuals.float1 && (
                                    <div className="absolute top-0 right-0 z-10 animate-float">
                                        <img
                                            src={section.visuals.float1}
                                            alt="Floating UI element 1"
                                            className="w-auto h-14 drop-shadow-md"
                                        />
                                    </div>
                                )}
                                {section.visuals.float2 && (
                                    <div className="absolute bottom-0 left-0 z-10 animate-float-delayed">
                                        <img
                                            src={section.visuals.float2}
                                            alt="Floating UI element 2"
                                            className="w-auto h-14 drop-shadow-md"
                                        />
                                    </div>
                                )}
                                <img
                                    src={section.visuals.main}
                                    alt="Main feature visual"
                                    className="w-auto max-h-full drop-shadow-xl"
                                />
                                {section.visuals.float3 && (
                                    <img
                                        src={section.visuals.float3}
                                        alt="Floating UI element 3"
                                        className="absolute right-0 top-1/3 w-56 h-auto drop-shadow-2xl animate-float-slow"
                                    />
                                )}
                                {section.visuals.float4 && (
                                    <img
                                        src={section.visuals.float4}
                                        alt="Floating UI element 4"
                                        className="absolute top-0 right-8 w-28 h-auto rounded-lg shadow-xl animate-float"
                                    />
                                )}
                                {section.visuals.float5 && (
                                    <img
                                        src={section.visuals.float5}
                                        alt="Floating UI element 5"
                                        className="absolute top-0 left-0 w-28 h-auto rounded-lg shadow-2xl animate-float-delayed"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </motion.section>
            ))}
        </div>
    );
};

export default TemplateFeatures;
