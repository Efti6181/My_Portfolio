'use client';
import dynamic from 'next/dynamic';
import CoreFallback from '@/components/three/CoreFallback';
import { ArrowDown, ArrowUpRight, Download, Sparkles, ChevronRight } from 'lucide-react';
import { Github } from './Icons';
import { profile } from '@/data/profile';
const NeuralCore=dynamic(()=>import('@/components/three/NeuralCore'),{ssr:false,loading:()=> <CoreFallback/>});
export default function Hero(){
 return <section id="home" className="hero section-anchor"><div className="hero-grid"/><div className="hero-copy">
 <div className="eyebrow"><span className="tiny-line"/> THE DIGITAL MIND <span className="edition">PORTFOLIO / 2026</span></div>
 <h1>NAJMUL<br/>ALAM <span className="name-outline">EFTI<span className="name-period">.</span></span></h1>
 <div className="hero-role"><span/>AI / ML & DATA SCIENCE ENTHUSIAST</div>
 <p className="hero-description">Curiosity into code.<br/>Ideas into intelligent experiences.</p>
 <p className="hero-bio">CSE student, working at {profile.employer}<br className="desktop-break"/> and building software used by fellow students.</p>
 <div className="hero-actions"><a className="button primary magnetic" href="#projects" onPointerMove={e=>{if(e.pointerType!=='mouse'||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.1}px)`;}} onPointerLeave={e=>{e.currentTarget.style.transform='';}}>Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> View GitHub</a></div>
 <a className="resume-link" href={profile.resume} download="Najmul-Alam-Efti-Resume.pdf"><Download size={14}/> Download résumé <span>PDF</span></a></div>
 <div className="hero-visual"><div className="core-glow"/><NeuralCore/><div className="core-label top"><span className="small-cross">+</span> NEURAL CORE <span className="violet-text">001</span></div>
 <div className="floating-tag tag-ai"><Sparkles size={14}/><span>Artificial Intelligence</span></div><div className="floating-tag tag-code"><span className="mono violet-text">&lt;/&gt;</span><span>Built with curiosity</span></div><div className="core-coordinates mono">X 22.3569°<br/>Y 91.7832°</div><div className="core-label bottom"><span className="signal-dot"/> CORE INITIALIZED <span className="bars">▁▃▆▃▇▂▅</span></div><span className="visual-caption mono">MOVE YOUR CURSOR. EXPLORE THE MIND.</span></div>
 <div className="hero-bottom"><a href="#about" className="scroll-link"><span className="scroll-circle"><ArrowDown size={15}/></span>SCROLL TO EXPLORE</a><span>BASED IN BANGLADESH <span className="world-icon">◎</span></span><span className="hero-index">01 <span>/ 07</span><ChevronRight size={14}/></span></div></section>;
}
