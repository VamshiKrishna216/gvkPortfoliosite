'use client';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const defaultProjects = [
  {
    title: "AI Portfolio Animation",
    description: "Scroll-based cinematic animation using Canvas and Framer Motion processing 90 high-resolution WEBP images seamlessly mapped to scroll state.",
    tags: ["Next.js", "Framer Motion", "Python Scripting", "Canvas"],
    link: "#",
    github: "#",
    color: "from-[#6366F1]/20 to-transparent",
    order: 1
  },
  {
    title: "Campus Social Platform",
    description: "Concept social network designed to connect college students globally. Implements real-time messaging, events, and an AI-driven global matching algorithm.",
    tags: ["React", "Node.js", "WebSockets", "MongoDB"],
    link: "#",
    github: "#",
    color: "from-[#22C55E]/20 to-transparent",
    order: 2
  },
  {
    title: "Tech News Platform",
    description: "An automated tech news aggregation and affiliate site leveraging serverless functions and RSS feeds to curate the day's top technical articles.",
    tags: ["Next.js", "Cloudflare Workers", "RSS", "Tailwind"],
    link: "#",
    github: "#",
    color: "from-orange-500/20 to-transparent",
    order: 3
  },
  {
    title: "OSINT Automation Tools",
    description: "Browser automation and OSINT collection scripts to ethically aggregate publicly available information to aid cybersecurity researchers.",
    tags: ["Python", "Playwright", "Data Processing"],
    link: "#",
    github: "#",
    color: "from-purple-500/20 to-transparent",
    order: 4
  }
];

export default function Projects() {
  const [projects, setProjects] = useState<typeof defaultProjects>(defaultProjects);

  useEffect(() => {
    async function loadProjects() {
      try {
        const q = query(collection(db, "projects"), orderBy("order", "asc"));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const freshData = snapshot.docs.map(doc => doc.data() as typeof defaultProjects[0]);
          setProjects(freshData);
        }
      } catch (error) {
        console.error("Firebase read error:", error);
      }
    }
    loadProjects();
  }, []);
  return (
    <section id="projects" className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-primary text-glow-primary">Work</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl font-light">
            A selection of products I've engineered, ranging from cinematic front-end experiences to deep-tech automation scripts.
          </p>
        </div>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white pb-1 border-b border-transparent hover:border-white transition-colors self-start md:self-auto">
          View all on GitHub <Github className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-card-hover rounded-3xl overflow-hidden group flex flex-col relative h-full">
            {/* Visual Header / Placeholder */}
            <div className={`h-48 w-full bg-gradient-to-b ${project.color} border-b border-white/5 relative overflow-hidden flex items-center justify-center`}>
              {/* Optional glowing orb for aesthetics */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
              <span className="font-mono text-white/20 text-4xl font-bold tracking-tighter">PROJECT_{idx + 1}</span>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-white/60 mb-6 leading-relaxed flex-1 font-light">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <a href={project.link} className="flex-1 text-center py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  Live Demo <ExternalLink className="w-4 h-4" />
                </a>
                <a href={project.github} className="p-3 rounded-xl glass-card hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
