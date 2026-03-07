export default function Timeline() {
  const steps = [
    {
      year: "2023",
      title: "Started Computer Science",
      desc: "Began formal education building foundational algorithms and data structure knowledge."
    },
    {
      year: "2024",
      title: "Built First Automation Tools",
      desc: "Transitioned from theory to practice, creating OSINT tools and browser scrapers in Python."
    },
    {
      year: "2025",
      title: "Interactive Web Projects",
      desc: "Mastered frontend frameworks like React and Next.js, blending them with complex UI animations."
    },
    {
      year: "Future",
      title: "Scaling Tech Products",
      desc: "Focusing on deploying robust AI integrations and architecting SaaS platforms."
    }
  ];

  return (
    <section id="journey" className="py-24 relative z-10 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          The <span className="text-primary text-glow-primary">Journey</span>
        </h2>
        <p className="text-lg text-white/50 font-light">
          Tracking the evolution from scripts to systems.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:mx-auto md:w-3/4">
        {steps.map((step, idx) => (
          <div key={idx} className="mb-12 ml-8 relative group">
            <div className="absolute -left-[41px] top-1 w-5 h-5 bg-background border-2 border-primary rounded-full group-hover:bg-primary transition-colors duration-300"></div>
            
            <div className="flex flex-col md:flex-row gap-4 md:items-center mb-2">
              <span className="text-primary font-mono text-xl tracking-wider">{step.year}</span>
              <div className="hidden md:block w-8 h-[1px] bg-white/10"></div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{step.title}</h3>
            </div>
            
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-lg md:ml-28">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
