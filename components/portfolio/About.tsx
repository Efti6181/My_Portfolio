'use client';
import { BrainCircuit, Code2, GraduationCap, Globe2, Fingerprint, BriefcaseBusiness } from 'lucide-react';
import { Kicker, Reveal, Tilt } from './Shared';
import { profile } from '@/data/profile';
import { projects, moreProjects } from '@/data/projects';
export default function About(){return <>
 <div className="focus-strip"><span>ARTIFICIAL INTELLIGENCE</span><i>✳</i><span>MACHINE LEARNING</span><i>✳</i><span>DATA SCIENCE</span><i>✳</i><span>SOFTWARE ENGINEERING</span></div>
 <section id="about" className="section about-section">
 <Reveal><Kicker number="01">IDENTITY / ABOUT ME</Kicker></Reveal>
 <div className="about-grid"><Reveal>
 <h2>Learning. Working.<br/><span>Always building.</span></h2>
 <p className="section-description">I’m Najmul, a Computer Science & Engineering student at Premier University Chittagong. Alongside my studies, I work at {profile.employer}.</p>
 <p className="section-description compact">I build things people can use. My Cover Page Generator helps fellow university students prepare academic submissions, while projects like my IoT Firefighting Robot let me explore where software meets the physical world.</p>
 <p className="section-description compact">My next chapter is focused on artificial intelligence, machine learning, and data science.</p>
 <div className="about-work"><BriefcaseBusiness size={18}/><span>Working at <strong>{profile.employer}</strong></span></div>
 <div className="about-signature"><span className="signature">Najmul.</span><span className="mono">ALWAYS CURIOUS. ALWAYS BUILDING.</span></div>
 </Reveal><Reveal delay={.15}><Tilt className="identity-card portrait-card">
 <div className="id-top"><span className="mono">THE PERSON BEHIND THE CODE</span><Fingerprint size={24}/></div>
 <div className="dot-portrait"><img src={profile.portrait} alt="Najmul Alam Efti, portrayed in luminous violet dots" width={1120} height={1400} loading="lazy" decoding="async"/><span className="portrait-coordinate mono" aria-hidden="true">NAJMUL / 001</span></div>
 <div className="id-name">Najmul Alam Efti</div><p>Student. Builder. Always curious.</p>
 <div className="id-bottom"><span><Globe2 size={13}/> {profile.location}</span></div>
 </Tilt></Reveal></div>
 <div className="about-facts">{[{icon:GraduationCap,value:'CSE Student',label:'Premier University'},{icon:BrainCircuit,value:'AI / ML Focus',label:'My next chapter'},{icon:Code2,value:`${projects.length+moreProjects.length} Projects`,label:'Learning by building'},{icon:BriefcaseBusiness,value:'Work + Study',label:'Britannia Garment Packaging'}].map(({icon:Icon,value,label})=><Reveal key={value} className="about-fact"><Icon size={21}/><div><strong>{value}</strong><span>{label}</span></div></Reveal>)}</div>
 </section></>}
