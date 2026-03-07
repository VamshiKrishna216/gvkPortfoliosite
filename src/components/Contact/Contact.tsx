'use client';

import { Mail, Github, Linkedin, Instagram, Rocket } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      
      <div className="glass-card rounded-[2rem] p-8 md:p-16 border-accent/20 relative overflow-hidden flex flex-col items-center justify-center text-center">
        
        {/* Radar/glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none"></div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Let's build <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">something together.</span>
        </h2>
        
        <p className="text-xl text-white/60 mb-12 max-w-2xl font-light leading-relaxed">
          I'm currently looking for new opportunities, freelance work, and open source collaborations. If you have a project in mind, let's connect.
        </p>

        <form className="w-full max-w-md space-y-4 mb-12" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-white/70 mb-1 pl-1">Name</label>
            <input 
              type="text" 
              placeholder="Elon Musk" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
          
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-white/70 mb-1 pl-1">Email</label>
            <input 
              type="email" 
              placeholder="elon@spacex.com" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-white/70 mb-1 pl-1">Message</label>
            <textarea 
              rows={4}
              placeholder="I have an idea..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
            />
          </div>

          <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
            Launch Message
            <Rocket className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZqXDfgdTfKdknvlcNbHhcGxChdWzTPwHpxBDtxlfSZhPKlhpGCSKPJQvbgBnNsPLrsB" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:text-primary transition-all text-white/60">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/VamshiKrishna216" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:text-white transition-all text-white/60">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/govind-vamshi-krishna-055ab822a/" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:text-blue-500 transition-all text-white/60">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/gvk.me" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:text-pink-500 transition-all text-white/60">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}
