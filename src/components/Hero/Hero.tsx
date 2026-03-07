'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const totalFrames = 90;

  // Preload frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(2, '0');
        img.src = `/frames/frame_${frameIndex}.webp`; // The path relative to public/
        img.onload = () => {
            loadedCount++;
            if (loadedCount === totalFrames) {
                setImages(loadedImages);
            }
        };
        loadedImages.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  useEffect(() => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = images[0];
    canvas.width = img.width || 2048;
    canvas.height = img.height || 2048;

    const render = (index: number) => {
        const currentImg = images[Math.floor(index)];
        if (currentImg && currentImg.complete) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(currentImg, 0, 0, canvas.width, canvas.height);
        }
    };

    render(0);

    const unsubscribe = frameIndex.on("change", (latest) => {
        render(latest);
    });

    return () => unsubscribe();
  }, [images, frameIndex]);

  // Framer motion transforms for the text sequence
  // Text 1: "I see problems."
  const title1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const title1Y = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const title1Scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  // Text 2: "I see solutions."
  const title2Opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]);
  const title2Y = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [40, 0, -40]);
  const title2Scale = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0.95, 1, 1.05]);
  
  // Text 3: "I build them." (Final lock)
  const title3Opacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]);
  const title3Y = useTransform(scrollYProgress, [0.75, 0.9], [40, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Cinematic Background Lighting specific to Hero */}
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-primary/20 blur-[150px] -z-10 mix-blend-screen pointer-events-none rounded-full"></div>
        
        {/* High-res WEBP Sequence Canvas */}
        <div className="absolute inset-0 z-0 flex items-center justify-center w-full h-full">
            <canvas 
                ref={canvasRef} 
                className="w-full h-full object-cover object-center transform scale-[1.05] opacity-80"
                style={{ filter: "drop-shadow(0px 0px 40px rgba(0,0,0,0.5))" }}
            />
        </div>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10 opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 opacity-60 pointer-events-none"></div>

        {/* Scroll-tracked Typography Overlay */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 w-full h-full justify-center pointer-events-none">
            
            <motion.div 
                style={{ opacity: title1Opacity, y: title1Y, scale: title1Scale }}
                className="absolute inset-0 flex flex-col items-center justify-center"
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl font-sans">
                    I see <span className="text-primary italic">problems.</span>
                </h1>
            </motion.div>

            <motion.div 
                style={{ opacity: title2Opacity, y: title2Y, scale: title2Scale }}
                className="absolute inset-0 flex flex-col items-center justify-center"
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl font-sans">
                    I see <span className="text-accent italic">solutions.</span>
                </h1>
            </motion.div>

            <motion.div 
                style={{ opacity: title3Opacity, y: title3Y }}
                className="absolute inset-0 flex flex-col items-center justify-center mt-32 md:mt-48"
            >
                <div>
                   <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl font-sans uppercase">
                       I build them.
                   </h1>
                   <p className="mt-6 text-xl text-white/60 font-mono tracking-widest uppercase">
                       GVK — Creative Developer
                   </p>
                </div>
                
                <div className="mt-12 flex flex-col sm:flex-row gap-6 pointer-events-auto">
                    <a href="#projects" className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/80 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] tracking-wide flex items-center gap-2">
                        View Projects
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </a>
                    <a href="#about" className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all backdrop-blur-md tracking-wide">
                        Explore Lab
                    </a>
                </div>
            </motion.div>
        
        </div>
      </div>
    </div>
  );
}
