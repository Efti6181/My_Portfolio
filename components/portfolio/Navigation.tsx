'use client';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { profile } from '@/data/profile';
const links=['Home','About','Skills','Projects','Experience','Education','Contact'];
export default function Navigation(){const [active,setActive]=useState('home');const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const onScroll=()=>{setScrolled(scrollY>30);let current='home';for(const name of links){const el=document.getElementById(name.toLowerCase());if(el&&el.getBoundingClientRect().top<190)current=name.toLowerCase();}setActive(current);};window.addEventListener('scroll',onScroll,{passive:true});onScroll();return()=>window.removeEventListener('scroll',onScroll);},[]);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false);};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key);},[]);
 return <header className={`site-header ${scrolled?'scrolled':''}`}><a href="#home" className="logo" aria-label="Efti, home">EFTI<span>.</span></a><nav className={open?'nav-links open':'nav-links'} aria-label="Main navigation" id="main-nav">{links.map(l=><a key={l} href={'#'+l.toLowerCase()} aria-current={active===l.toLowerCase()?'location':undefined} className={active===l.toLowerCase()?'active':''} onClick={()=>setOpen(false)}>{l}</a>)}</nav><div className="nav-right"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="nav-github"><Github size={18}/></a><a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15}/></a><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?<X size={21}/>:<Menu size={21}/>}</button></div></header>;
}
