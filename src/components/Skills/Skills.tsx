import { 
  FileJson, 
  Database, 
  Globe2, 
  Cpu, 
  Layout, 
  Server, 
  Cloud, 
  Settings, 
  Terminal, 
  Bot 
} from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: <FileJson />, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: <FileJson />, color: 'text-blue-400' },
  { name: 'React', icon: <Layout />, color: 'text-sky-400' },
  { name: 'Next.js', icon: <Globe2 />, color: 'text-white' },
  { name: 'Node.js', icon: <Server />, color: 'text-green-500' },
  { name: 'Tailwind CSS', icon: <Layout />, color: 'text-cyan-400' },
  { name: 'Firebase', icon: <Database />, color: 'text-amber-500' },
  { name: 'Cloudflare', icon: <Cloud />, color: 'text-orange-500' },
  { name: 'Python', icon: <Terminal />, color: 'text-blue-500' },
  { name: 'AI APIs', icon: <Bot />, color: 'text-purple-500' },
];

export default function Skills() {
  return (
    <section id="stack" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Tech <span className="text-accent text-glow-accent">Arsenal</span>
        </h2>
        <p className="text-lg text-white/60 font-mono">Tools used in the lab.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, idx) => (
          <div 
            key={idx} 
            className="glass-card-hover p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-default"
          >
            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6 ${skill.color}`}>
              {skill.icon}
            </div>
            <span className="font-medium text-sm text-white/80 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
