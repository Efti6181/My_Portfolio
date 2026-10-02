'use client';
import { useState } from 'react';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import { Focus, Experience, Education, GitHubSection, Philosophy } from './Journey';
import Contact from './Contact';
import Terminal from './Terminal';
import Effects from './Effects';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { profile } from '@/data/profile';
export default function Portfolio(){const [missing,setMissing]=useState('');return <><a className="skip-link" href="#about">Skip to content</a><Navigation/><main><Hero onResume={()=>{if(profile.resume){const a=document.createElement('a');a.href=profile.resume;a.download='Najmul-Alam-Efti-Resume.pdf';a.click();}else setMissing('résumé');}}/><About/><Skills/><Projects/><Focus/><Experience/><Education/><GitHubSection/><Philosophy/><Contact onMissing={setMissing}/></main><footer className="site-footer"><a href="#home" className="logo">EFTI<span>.</span></a><span>© 2026 Najmul Alam Efti</span><span>MADE WITH CURIOSITY & CODE</span><a href="#home">Back to top <ArrowUpRight size={14}/></a></footer><Terminal/><Effects/><Dialog open={!!missing} onOpenChange={o=>{if(!o)setMissing('');}}><DialogContent className="info-dialog">{missing==='résumé'?<Download size={28} className="violet-text"/>:<Mail size={28} className="violet-text"/>}<DialogTitle>{missing==='résumé'?'Résumé coming soon':missing==='email'?'Let’s connect':'LinkedIn coming soon'}</DialogTitle><DialogDescription>{missing==='résumé'?'My résumé is not available for download yet. You can explore my projects and education here.':missing==='email'?'A public email address hasn’t been added yet. For now, you can find me on GitHub.':'My LinkedIn profile link hasn’t been added yet. You can follow my work on GitHub.'}</DialogDescription><a className="button primary" href={missing==='résumé'?'#projects':profile.github} onClick={()=>setMissing('')} target={missing==='résumé'?undefined:'_blank'} rel="noreferrer">{missing==='résumé'?'Explore my projects':'Visit GitHub'}</a></DialogContent></Dialog></>}
