'use client';
import { Beaker, Network, Cpu, Code } from 'lucide-react';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const iconMap: Record<string, React.ReactNode> = {
  "Beaker": <Beaker className="w-5 h-5 text-accent" />,
  "Network": <Network className="w-5 h-5 text-primary" />,
  "Cpu": <Cpu className="w-5 h-5 text-orange-400" />,
  "Code": <Code className="w-5 h-5 text-purple-400" />
};

const defaultExperiments = [
  {
    iconName: "Beaker",
    title: "AI Integrations Sandbox",
    description: "Testing local LLMs and multi-agent workflows.",
    order: 1
  },
  {
    iconName: "Network",
    title: "Networking Tools",
    description: "Custom packet sniffers and traffic analyzers.",
    order: 2
  },
  {
    iconName: "Cpu",
    title: "Hardware Tinkering",
    description: "Arduino and Raspberry Pi IoT automation.",
    order: 3
  },
  {
    iconName: "Code",
    title: "Creative Coding",
    description: "WebGL shaders and generative art algorithms.",
    order: 4
  }
];

export default function Lab() {
  const [experiments, setExperiments] = useState<typeof defaultExperiments>(defaultExperiments);

  useEffect(() => {
    async function loadExperiments() {
      try {
        const q = query(collection(db, "lab_experiments"), orderBy("order", "asc"));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const freshData = snapshot.docs.map(doc => doc.data() as typeof defaultExperiments[0]);
          setExperiments(freshData);
        }
      } catch (error) {
        console.error("Firebase read error:", error);
      }
    }
    loadExperiments();
  }, []);
  return (
    <section id="lab" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      
      <div className="glass-card rounded-3xl p-8 md:p-12 border-primary/20 relative overflow-hidden">
        
        {/* Background glow in the lab section */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              GVK <span className="text-white/40 italic">Lab.</span>
            </h2>
            <p className="text-lg text-white/60 font-light max-w-md leading-relaxed">
              My hacker playground. Outside of structured products, I spend time exploring edge technologies, building internal tools, and writing random scripts to optimize daily workflows.
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-white hover:bg-white text-sm font-medium hover:text-black transition-all">
              Read Dev Notes -&gt;
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {experiments.map((exp, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  {iconMap[exp.iconName] || <Beaker className="w-5 h-5 text-white" />}
                </div>
                <h3 className="text-white font-medium mb-2">{exp.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
