import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "GPGuide has been a game-changer. I'm finishing my notes hours earlier and the quality of my care plans has never been better. It's like having a senior registrar guiding you.",
    name: "Dr. Chloe Bennett",
    role: "GP Registrar",
  },
  {
    text: "The ROI is undeniable. We've streamlined our chronic disease management, leading to better patient outcomes and a significant increase in correct MBS item billing. A must-have for any modern practice.",
    name: "Dr. Marcus Thorne",
    role: "GP & Practice Owner",
  },
  {
    text: "I was on the verge of burnout from documentation. GPGuide gave me my evenings back. I can finally be present with my family without the weight of unfinished paperwork.",
    name: "Dr. Isabella Rossi",
    role: "General Practitioner",
  },
  {
    text: "The medicolegal peace of mind is worth the subscription alone. My notes are more comprehensive, defensible, and consistently aligned with RACGP standards.",
    name: "Dr. Liam O'Connell",
    role: "General Practitioner",
  },
  {
    text: "As someone who isn't the most tech-savvy, I found GPGuide incredibly intuitive. It integrates seamlessly into my workflow without any complex setup.",
    name: "Dr. Evelyn Chen",
    role: "General Practitioner",
  },
  {
    text: "Generating a Mental Health Care Plan used to be a 40-minute task. With GPGuide, I can create a high-quality, structured plan in under 10 minutes, allowing for more therapeutic time with the patient.",
    name: "Dr. Samuel Jones",
    role: "GP with Special Interest in Mental Health",
  },
  {
    text: "We've implemented GPGuide across our entire practice. The consistency in documentation quality is remarkable. It's been fantastic for training registrars and ensuring a high standard of care for all our patients.",
    name: "Dr. Anita Desai",
    role: "GP & Clinical Director",
  },
  {
    text: "The Workers Compensation and Centrelink form assistants are brilliant. They turn complex, time-consuming reports into a simple, guided process. It's saved me countless headaches.",
    name: "Dr. Ben Carter",
    role: "General Practitioner",
  },
  {
    text: "I'm genuinely learning and reinforcing my knowledge of guidelines while I work. The integrated references are a fantastic educational tool, not just a time-saver.",
    name: "Dr. Olivia Garcia",
    role: "GP Registrar",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsV2 = () => {
  return (
    <section className="bg-brand-bg py-20 sm:py-24 relative">
      <div className="container z-10 mx-auto">
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2;
