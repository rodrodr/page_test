
import React, { useState } from 'react';
import { 
  Brain, 
  Users, 
  Shield, 
  Lightbulb, 
  Eye, 
  Layout, 
  Mic, 
  PenTool, 
  FileText, 
  CheckCircle2,
  UserCheck,
  Laptop,
  School,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Database,
  Code,
  MessageSquare,
  BookOpen,
  Cpu,
  Layers,
  HeartHandshake,
  Search
} from 'lucide-react';

export const Methodology: React.FC = () => {
  const [activeLight, setActiveLight] = useState<string | null>('green');

  const toggleLight = (color: string) => {
    setActiveLight(prev => prev === color ? null : color);
  };

  return (
    <div className="pt-32 bg-white min-h-screen text-brand-dark font-sans">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-black italic text-brand-dark mb-6 tracking-tighter">
          the framework
        </h1>
        <p className="text-xl text-gray-500 font-serif italic max-w-3xl mx-auto leading-relaxed">
          A comprehensive guide for integrating generative AI into the educational process: 
          from course design to assessment, centering on <span className="text-brand-dark font-bold not-italic">critical thinking</span> and <span className="text-brand-dark font-bold not-italic">human supervision</span>.
        </p>
      </div>

      {/* Section 1: The 6 Principles */}
      <section className="container mx-auto px-6 mb-32">
        <div className="flex items-end gap-4 mb-12 border-b border-brand-dark pb-4">
           <h2 className="text-3xl font-bold uppercase tracking-tighter">Guiding Principles</h2>
           <p className="text-sm font-serif italic text-gray-500 pb-1">The foundation of our AI-assisted methodology</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <PrincipleCard 
              icon={UserCheck}
              title="Student-Centred, Teacher-Supervised"
              desc="AI enhances autonomy, but teachers must provide clear guidance, close supervision, and constant instruction, especially in early academic stages."
           />
           <PrincipleCard 
              icon={Layout}
              title="TPCK Integration"
              desc="Updating Technological Pedagogical Content Knowledge: aligning AI tools with specific disciplinary content and pedagogical goals."
           />
           <PrincipleCard 
              icon={Shield}
              title="Responsible Integration"
              desc="Promoting equality, social inclusion, and academic integrity. Training students on limitations and ethical issues before use."
           />
           <PrincipleCard 
              icon={Brain}
              title="Brain → Machine"
              desc="Prioritizing the 'Brain to Machine' dynamic. Critical thinking must precede AI generation. Avoid uncritically delegating cognitive tasks."
           />
           <PrincipleCard 
              icon={Lightbulb}
              title="Creativity & Autonomy"
              desc="AI should fuel creativity, not replace it. The framework supports students in phases where they assume a leading role as learners."
           />
           <PrincipleCard 
              icon={Eye}
              title="Privacy & Transparency"
              desc="Protecting data privacy. Instructors should design in-house, safe tutoring systems (RAG) to safeguard fundamental rights."
           />
        </div>
      </section>

      {/* Section 2: The Framework Flow (Fig 1) */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
                 The Educational Process
               </h2>
               <p className="text-gray-400 text-lg max-w-2xl mx-auto font-serif">
                  A four-stage workflow combining AI opportunities with human oversight.
               </p>
            </div>

            <div className="space-y-24">
               
               {/* STAGE 1: PREPARATION */}
               <div className="relative">
                  <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
                  <div className="absolute left-[50%] top-0 -translate-x-1/2 bg-brand-red text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full z-20">
                     Stage 01
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 pt-12">
                     {/* Teacher Side */}
                     <div className="text-right pr-8 relative">
                        <h3 className="text-2xl font-bold mb-2 text-brand-red">Material Design</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Teacher Role • AI Involved</p>
                        <ul className="space-y-4 text-gray-300 text-sm inline-block text-right">
                           <li className="flex items-center justify-end gap-3">
                              Curating texts to avoid hallucinations <BookOpen size={16} />
                           </li>
                           <li className="flex items-center justify-end gap-3">
                              Designing assessments aligned with AI <PenTool size={16} />
                           </li>
                           <li className="flex items-center justify-end gap-3">
                              Setting up NotebookLM environments <Laptop size={16} />
                           </li>
                        </ul>
                     </div>

                     {/* Student Side */}
                     <div className="pl-8 relative">
                        <h3 className="text-2xl font-bold mb-2 text-white">Flipped Class</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Student Role • Targeted AI</p>
                        <ul className="space-y-4 text-gray-300 text-sm">
                           <li className="flex items-center gap-3">
                              <MessageSquare size={16} /> Chat with pre-class materials
                           </li>
                           <li className="flex items-center gap-3">
                              <FileText size={16} /> AI-generated summaries for study
                           </li>
                           <li className="flex items-center gap-3">
                              <Mic size={16} /> Listen to AI podcasts (NotebookLM)
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* STAGE 2: IN-CLASS */}
               <div className="relative">
                  <div className="absolute left-[50%] top-0 -translate-x-1/2 bg-brand-red text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full z-20">
                     Stage 02
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 pt-12">
                     {/* Instructions */}
                     <div className="text-right pr-8">
                        <h3 className="text-2xl font-bold mb-2 text-white">Instructions</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Classroom • NO AI</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                           Brief review of content using traditional face-to-face lessons. 
                           Focus on clarifying doubts that AI could not resolve at home.
                        </p>
                        <div className="inline-block bg-purple-700 border border-purple-600 px-3 py-1 text-xs text-white font-bold rounded-sm shadow-[0_0_15px_rgba(126,34,206,0.4)]">
                           Critical Debates
                        </div>
                     </div>

                     {/* Work */}
                     <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-2 text-brand-red">Classroom Work</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Active • Targeted AI</p>
                        <ul className="space-y-4 text-gray-300 text-sm">
                           <li className="flex items-center gap-3">
                              <Users size={16} /> Group brainstorming & planning
                           </li>
                           <li className="flex items-center gap-3">
                              <CheckCircle2 size={16} /> Problem solving with AI support
                           </li>
                           <li className="flex items-start gap-3 text-brand-red">
                              <XCircle size={16} className="shrink-0 mt-0.5" /> Writing performed WITHOUT AI
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* STAGE 3: POST-CLASS */}
               <div className="relative">
                  <div className="absolute left-[50%] top-0 -translate-x-1/2 bg-brand-red text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full z-20">
                     Stage 03
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 pt-12">
                     {/* Assessment */}
                     <div className="text-right pr-8">
                        <h3 className="text-2xl font-bold mb-2 text-brand-red">Correction & Feedback</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Teacher Role • AI Involved</p>
                        <div className="space-y-6 text-sm text-gray-300">
                           <div className="flex flex-col items-end">
                              <span className="font-bold text-white block mb-1">1. Human Initial Correction</span>
                              <span className="text-gray-500">Review based on established rubrics.</span>
                           </div>
                           <div className="flex flex-col items-end">
                              <span className="font-bold text-white block mb-1">2. AI-Enhanced Comments</span>
                              <span className="text-gray-500">Generating detailed reports via prompt.</span>
                           </div>
                           <div className="flex flex-col items-end">
                              <span className="font-bold text-white block mb-1">3. Final Human Review</span>
                              <span className="text-gray-500">Checking for hallucinations/bias.</span>
                           </div>
                        </div>
                     </div>

                     {/* Early Identification */}
                     <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-2 text-white">Early Identification</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Sensitive Cases • AI Assisted</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                           AI helps teachers identify students requiring more attention due to poor or extremely uneven results.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="bg-white/5 p-4 border-l-2 border-yellow-500 rounded-r-sm">
                               <h4 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                                  <AlertTriangle size={14} className="text-yellow-500" /> Anomaly Detection
                               </h4>
                               <p className="text-xs text-gray-400">Spotting grade disparities and engagement drops.</p>
                            </div>
                             <div className="bg-white/5 p-4 border-l-2 border-brand-red rounded-r-sm">
                               <h4 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                                  <Eye size={14} className="text-brand-red" /> Proactive Alert
                               </h4>
                               <p className="text-xs text-gray-400">System triggers alerts for teachers to provide guidance.</p>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>

                {/* STAGE 4: TUTORIALS */}
                <div className="relative">
                  <div className="absolute left-[50%] top-0 -translate-x-1/2 bg-brand-red text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full z-20">
                     Stage 04
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 pt-12">
                     {/* Tutorials */}
                     <div className="text-right pr-8">
                        <h3 className="text-2xl font-bold mb-2 text-white">Face-to-Face Tutorials</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Human Interaction • NO AI</p>
                        
                        <div className="flex flex-col items-end space-y-4">
                           <div className="flex items-center gap-4 p-3 rounded-sm bg-white/5 w-full justify-end hover:bg-white/10 transition-colors group cursor-default">
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Detect specific obstacles</span>
                              <div className="bg-brand-red/20 p-2 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all"><Search size={16} /></div>
                           </div>
                           <div className="flex items-center gap-4 p-3 rounded-sm bg-white/5 w-full justify-end hover:bg-white/10 transition-colors group cursor-default">
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Reorganise project ideas</span>
                              <div className="bg-brand-red/20 p-2 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all"><Lightbulb size={16} /></div>
                           </div>
                           <div className="flex items-center gap-4 p-3 rounded-sm bg-white/5 w-full justify-end hover:bg-white/10 transition-colors group cursor-default">
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Boost motivation</span>
                              <div className="bg-brand-red/20 p-2 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all"><HeartHandshake size={16} /></div>
                           </div>
                        </div>
                     </div>

                     {/* Personalized Assistance */}
                     <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-2 text-brand-red">Personalized Assistance</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Student Development • NO AI</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                           A clear focus on student development and sound pedagogical assistance. Moving beyond content delivery to mentorship.
                        </p>
                        <div className="space-y-4">
                           <div className="flex items-start gap-3">
                              <div className="w-1 h-full min-h-[40px] bg-white/20 rounded-full"></div>
                              <div>
                                 <h4 className="text-white font-bold text-sm">Holistic Mentorship</h4>
                                 <p className="text-gray-500 text-xs mt-1">Addressing academic and personal growth.</p>
                              </div>
                           </div>
                           <div className="flex items-start gap-3">
                              <div className="w-1 h-full min-h-[40px] bg-white/20 rounded-full"></div>
                              <div>
                                 <h4 className="text-white font-bold text-sm">Pedagogical Guidance</h4>
                                 <p className="text-gray-500 text-xs mt-1">Tailored advice for future professional steps.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Section 2.5: The Toolkit */}
      <section className="py-24 bg-brand-gray border-y border-gray-200">
         <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
               <h2 className="text-4xl font-black italic text-brand-dark tracking-tighter mb-4">
                  The Toolkit
               </h2>
               <p className="text-gray-600 font-serif text-lg max-w-2xl mx-auto">
                  A curated ecosystem of models, software, and strategic designs used to build the AI-enriched environment.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
               
               {/* Left Column: Tech Stack */}
               <div className="space-y-10">
                  <div>
                     <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-6 border-b border-brand-dark/10 pb-4">
                       <Cpu className="text-brand-red" size={24} /> Models & Workspaces
                     </h3>
                     
                     <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-red mb-6 group hover:shadow-md transition-all">
                        <h4 className="font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">AI Enhanced Workspaces</h4>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                           We utilize <strong>NotebookLM</strong> as a primary RAG (Retrieval-Augmented Generation) system. This provides students with a safe, grounded environment where they can study uploaded course materials, generate summaries, and clear doubts without the risk of open-web hallucinations.
                        </p>
                        <div className="flex gap-2">
                           <span className="text-[10px] font-bold uppercase bg-brand-gray px-2 py-1 text-gray-500 rounded-sm">RAG System</span>
                           <span className="text-[10px] font-bold uppercase bg-brand-gray px-2 py-1 text-gray-500 rounded-sm">Study Assistant</span>
                        </div>
                     </div>

                     <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-dark group hover:shadow-md transition-all">
                        <h4 className="font-bold text-lg mb-2">Generative Models</h4>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                           An agnostic approach selecting models based on specific task performance. Used for content generation, coding assistance, and image creation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                           <span className="px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-widest rounded-sm text-gray-500">ChatGPT</span>
                           <span className="px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-widest rounded-sm text-gray-500">Claude</span>
                           <span className="px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-widest rounded-sm text-gray-500">Gemini</span>
                        </div>
                     </div>
                  </div>

                  <div>
                      <h3 className="text-xl font-bold text-brand-dark flex items-center gap-3 mb-4">
                         <Layers size={20} className="text-gray-400" /> Supporting Software
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                         Integration with open-source tools like <strong>R</strong> and <strong>Quarto</strong> for creating interactive simulators, deployed via <strong>Moodle</strong> or institutional LMS.
                      </p>
                  </div>
               </div>

               {/* Right Column: Design & Strategy */}
               <div className="space-y-10">
                  <h3 className="text-2xl font-bold text-brand-dark flex items-center gap-3 mb-6 border-b border-brand-dark/10 pb-4">
                    <PenTool className="text-brand-red" size={24} /> Design & Strategy
                  </h3>

                  <div className="space-y-6">
                     <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center shrink-0 font-bold text-sm mt-1">01</div>
                        <div>
                           <h4 className="font-bold text-lg mb-2">Teaching Materials</h4>
                           <p className="text-sm text-gray-600 leading-relaxed">
                              Design of diverse assets including <strong>podcasts</strong> for auditory learning, <strong>simulators</strong> for variable manipulation, and <strong>assessments</strong> that challenge critical thinking rather than rote memorization.
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center shrink-0 font-bold text-sm mt-1">02</div>
                         <div>
                           <h4 className="font-bold text-lg mb-2">Strategic Prompts</h4>
                           <p className="text-sm text-gray-600 leading-relaxed">
                              Engineering complex prompts not just for creation, but for <strong>evaluation and feedback</strong>. These prompts instruct the AI to act as a Socratic tutor or a strict grader based on specific rubrics.
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 font-bold text-sm mt-1">03</div>
                         <div>
                           <h4 className="font-bold text-lg mb-2">Early Identification</h4>
                           <p className="text-sm text-gray-600 leading-relaxed">
                              Deployment of safety-layer prompts designed to detect students struggling with core concepts or those misusing the tools. This allows for <strong>early identification</strong> of sensitive cases requiring direct human intervention.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Section 3: Practical Applications (The 3 Examples) */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="mb-16">
               <h2 className="text-4xl font-black italic text-brand-dark tracking-tighter mb-4">
                  Methodology in Action
               </h2>
               <p className="text-gray-600 font-serif text-lg">
                  Three distinct assignment types designed to implement this framework in Social Sciences.
               </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
               {/* Example 1 */}
               <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-brand-red/30 transition-colors group">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                     <Mic size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Theoretical Concepts</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">The Podcast</p>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                     Using AI to generate a fable ("The Forest Assembly") and a debate between synthetic students. Converts passive listening into active analysis of complex concepts like the Iron Law of Oligarchy.
                  </p>
                  <div className="pt-6 border-t border-gray-100">
                     <span className="text-xs font-mono text-gray-400">Tools: ChatGPT + Gemini TTS</span>
                  </div>
               </div>

               {/* Example 2 */}
               <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-brand-red/30 transition-colors group">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                     <Code size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hybrid Measurement</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">The Simulator</p>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                     Overcoming mathematical barriers using "Vibe-Coding". AI generates interactive HTML simulators for concepts like "Effective Number of Parties", allowing students to visualize abstract formulas.
                  </p>
                  <div className="pt-6 border-t border-gray-100">
                     <span className="text-xs font-mono text-gray-400">Tools: Claude Sonnet + Quarto</span>
                  </div>
               </div>

               {/* Example 3 */}
               <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-brand-red/30 transition-colors group">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                     <Database size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">The Gamified Consultancy</p>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                     A role-play assignment where students act as analysts. AI generates the scenario and pre-validates the rubric, while students perform manual data cleaning and analysis.
                  </p>
                  <div className="pt-6 border-t border-gray-100">
                     <span className="text-xs font-mono text-gray-400">Tools: Excel + AI Rubrics</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Section 4: Ethical Traffic Light (Accordion Redesign) */}
      <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
         {/* Background Effects */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-brand-dark/0 via-brand-dark/0 to-brand-red/5 pointer-events-none"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
               <h2 className="text-5xl md:text-6xl font-black italic text-white tracking-tighter mb-6">
                  Ethical Traffic Light
               </h2>
               <p className="text-gray-400 font-serif italic max-w-2xl mx-auto text-lg">
                  Click on the lights to explore the guidelines.
               </p>
            </div>

            <div className="max-w-3xl mx-auto bg-[#111] rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl relative">
               <div className="flex flex-col gap-8 md:gap-12">
                  
                  {/* RED */}
                  <TrafficLightRow 
                    color="red" 
                    title="STOP" 
                    subtitle="Detrimental Use" 
                    isOpen={activeLight === 'red'} 
                    onClick={() => toggleLight('red')}
                    items={["Copy & paste AI work as your own", "Invent citations (Fabrication)", "Share personal/sensitive data", "Skip the original reading"]}
                  />

                  {/* YELLOW */}
                  <TrafficLightRow 
                    color="yellow" 
                    title="YIELD" 
                    subtitle="Critical Review" 
                    isOpen={activeLight === 'yellow'} 
                    onClick={() => toggleLight('yellow')}
                    items={["AI Summaries (Never replace reading)", "Source search (Hallucination risk)", "Theoretical explanations (Double-check)"]}
                  />

                  {/* GREEN */}
                  <TrafficLightRow 
                    color="green" 
                    title="GO" 
                    subtitle="Constructive Use" 
                    isOpen={activeLight === 'green'} 
                    onClick={() => toggleLight('green')}
                    items={["Reading support & examples", "Generating outlines & concept maps", "Technical assistance (Code/Format)", "Language & grammar correction"]}
                  />

               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

const PrincipleCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
   <div className="bg-gray-50 p-8 rounded-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-brand-dark hover:border-brand-red group">
      <div className="mb-4 text-brand-dark group-hover:text-brand-red transition-colors">
         <Icon size={32} />
      </div>
      <h3 className="font-bold text-lg mb-3 text-brand-dark">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
   </div>
);

const TrafficLightRow = ({ 
  color, 
  title, 
  subtitle, 
  isOpen, 
  onClick, 
  items 
}: { 
  color: 'red' | 'yellow' | 'green', 
  title: string, 
  subtitle: string, 
  isOpen: boolean, 
  onClick: () => void, 
  items: string[] 
}) => {
  
  const colorStyles = {
    red: {
      on: "bg-red-600 shadow-[0_0_40px_rgba(220,38,38,0.8)] border-red-500",
      off: "bg-red-950/50 border-red-900/30 opacity-50",
      text: "text-red-500"
    },
    yellow: {
      on: "bg-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.8)] border-yellow-300",
      off: "bg-yellow-950/50 border-yellow-900/30 opacity-50",
      text: "text-yellow-400"
    },
    green: {
      on: "bg-green-500 shadow-[0_0_40px_rgba(34,197,94,0.8)] border-green-400",
      off: "bg-green-950/50 border-green-900/30 opacity-50",
      text: "text-green-500"
    }
  };

  const currentStyle = colorStyles[color];

  return (
    <div className="flex gap-8 items-start group cursor-pointer" onClick={onClick}>
      {/* Light Circle */}
      <div className="relative shrink-0 pt-2">
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 transition-all duration-500 ease-out ${isOpen ? currentStyle.on : currentStyle.off} hover:scale-105`}></div>
        {/* Connector Line to next light (only for red and yellow) */}
        {color !== 'green' && (
             <div className="absolute left-1/2 -translate-x-1/2 top-20 md:top-24 w-1 h-20 md:h-24 bg-[#222] -z-10"></div>
        )}
      </div>

      {/* Text Content */}
      <div className={`flex-grow pt-2 md:pt-4 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'}`}>
        <h3 className={`text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-1 ${currentStyle.text}`}>
          {title}
        </h3>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
          {subtitle}
        </p>
        
        <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
           <div className="overflow-hidden">
              <ul className="space-y-3 border-t border-white/10 pt-4">
                {items.map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${currentStyle.text.replace('text-', 'bg-')}`}></span>
                      <span className="leading-relaxed">{item}</span>
                   </li>
                ))}
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};
