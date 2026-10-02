export const skills = {
 'Programming':['Python','C','C++','C#','Java','JavaScript','TypeScript'],
 'AI & Data':['Artificial Intelligence','Machine Learning','Data Science','NLP','Search Algorithms'],
 'Web':['HTML','CSS','JavaScript','React','Next.js','Node.js','Express','ASP.NET Core MVC'],
 'Databases':['PostgreSQL','MySQL','Firebase'],
 'Tools':['Git','GitHub','Linux','Visual Studio','VS Code','Android Studio'],
 'Other':['REST APIs','Three.js','Networking fundamentals'],
};
export type SkillCategory = keyof typeof skills;
export const skillNotes:Record<string,string> = {
 Python:'My language for AI experiments, algorithms, and backend development.',
 C:'A foundation in programming, memory, and problem solving.',
 'C++':'Algorithms, data structures, and computational problem solving.',
 'C#':'Building StudyPilot with ASP.NET Core MVC and Entity Framework Core.',
 Java:'Desktop applications with Swing and object-oriented design.',
 JavaScript:'Interactive interfaces and Node.js applications.',
 TypeScript:'Typed interfaces and maintainable frontend applications.',
 'Artificial Intelligence':'Exploring intelligent agents, search, and decision-making.',
 'Machine Learning':'Current learning focus: systems that learn from data.',
 'Data Science':'Current learning focus: finding useful patterns in data.',
 NLP:'Exploring how software understands and works with language.',
 'Search Algorithms':'A*, Minimax and Alpha-Beta pruning in Stratego Duel AI.',
};
