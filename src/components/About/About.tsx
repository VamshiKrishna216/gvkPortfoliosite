import { Terminal, Code2, Sparkles, Cpu } from 'lucide-react';

const stats = [
  {
    icon: <Terminal className="w-6 h-6 text-primary" />,
    label: "BTech Computer Science",
    desc: "Formal engineering foundation"
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent" />,
    label: "Full-Stack Development",
    desc: "Interactive web experiences"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    label: "AI Experimentation",
    desc: "Integrating intelligent APIs"
  },
  {
    icon: <Cpu className="w-6 h-6 text-orange-400" />,
    label: "Entrepreneurial Mindset",
    desc: "Building scalable solutions"
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        
        {/* Bio Text */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card text-sm font-mono text-primary border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            ABOUT_ME.exe
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            I build digital <span className="text-glow-primary text-primary">products</span> from scratch.
          </h2>
          
          <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
            <p>
              I am GVK, a computer science student and creative developer who thrives on building interactive digital experiences. My portfolio isn't just code—it's a lab where ideas materialize into real-world applications.
            </p>
            <p>
              I explore modern web technologies, AI tools, automation systems, and scalable cloud platforms. Whether it's crafting a cinematic user interface or integrating complex backend logic, I bridge the gap between design and deep tech.
            </p>
            <p className="text-white/90 font-medium border-l-2 border-accent pl-4">
              My goal is to combine <span className="text-accent">engineering, creativity, and technology</span> to create impactful, memorable products.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card-hover p-6 rounded-2xl flex flex-col gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{stat.label}</h3>
                <p className="text-sm text-white/50 mt-1">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
