import type { Metadata } from 'next';
import '@fontsource-variable/space-grotesk';
import './globals.css';
import { profile } from '@/data/profile';
export const metadata:Metadata={metadataBase:new URL(profile.siteUrl),title:'Najmul Alam Efti | AI/ML Developer & CSE Student',description:'Explore Najmul Alam Efti’s work in artificial intelligence, machine learning, data science, and full-stack software engineering. CSE student at Premier University Chittagong.',keywords:['Najmul Alam Efti','AI','Machine Learning','Data Science','Software Engineering','Developer Portfolio'],alternates:{canonical:'/'},openGraph:{title:'Najmul Alam Efti — The Digital Mind',description:'Curiosity into code. Ideas into intelligent experiences.',type:'website',url:'/'},twitter:{card:'summary',title:'Najmul Alam Efti — The Digital Mind',description:'AI, machine learning, and software development portfolio.'},icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className="dark"><body>{children}</body></html>}
