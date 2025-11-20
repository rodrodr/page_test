import React from 'react';
import { CheckCircle2, Search, PenTool, Users, BarChart, ArrowRight, BookOpen } from 'lucide-react';

export const Project: React.FC = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
       {/* Header */}
       <div className="container mx-auto px-6 mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic text-brand-dark mb-6 tracking-tighter">
            the project
          </h1>
          <p className="text-xl text-gray-500 font-serif italic max-w-3xl mx-auto leading-relaxed">
             <span className="font-bold text-brand-dark not-italic">D-IA-CRÍTICA:</span> A comprehensive framework for AI-assisted teaching with critical orientation and human control.
          </p>
       </div>

       {/* Section 1: The Vision (Objectives) */}
       <section className="container mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row gap-16 items-start">
             <div className="w-full md:w-1/2 md:sticky md:top-32">
                <div className="relative mb-10">
                   <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red/10 rounded-full z-0"></div>
                   <img 
                     src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" 
                     className="relative w-full rounded-sm shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700" 
                     alt="Classroom discussion" 
                   />
                   <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 max-w-xs z-20 shadow-xl hidden lg:block">
                      <p className="font-serif italic text-sm">"Moving away from technocratic visions to focus on critical methodology."</p>
                   </div>
                </div>

                {/* Project Metadata Card */}
                <div className="bg-gray-50 border-l-4 border-brand-red p-8 rounded-sm shadow-sm relative overflow-hidden mt-12">
                   {/* Decorative background element */}
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 rounded-bl-full -z-0"></div>
                   
                   <div className="relative z-10 space-y-6">
                      <div>
                         <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Project ID</p>
                         <p className="font-mono text-brand-dark font-bold">ID2025/275</p>
                      </div>
                      
                      <div>
                         <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Official Title</p>
                         <p className="text-brand-dark font-bold text-sm leading-relaxed">
                            D-IA-CRÍTICA: MARCO METODOLÓGICO PARA UNA DOCENCIA ASISTIDA POR IA CON ORIENTACIÓN CRÍTICA Y CONTROL HUMANO
                         </p>
                      </div>
                      
                      <div className="flex justify-between items-end pt-4 border-t border-gray-200">
                         <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Institution</p>
                            <p className="text-brand-dark font-serif italic">Universidad de Salamanca</p>
                         </div>
                         <div className="text-right">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Funding</p>
                            <p className="text-brand-red font-mono font-bold">700€</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold text-brand-dark mb-8 leading-tight">
                   Reflexive & Responsible <br/><span className="text-brand-red">AI Integration</span>
                </h2>
                <p className="text-gray-600 leading-loose mb-8 font-serif text-lg">
                   We respond to the urgent need to integrate artificial intelligence in university teaching not as a crutch, but as a catalyst for critical thinking. The project proposes a methodological incorporation that reinforces ethics and knowledge construction throughout the educational process.
                </p>
                
                <div className="space-y-8">
                   <div className="group">
                      <h4 className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm mb-2 text-brand-dark group-hover:text-brand-red transition-colors">
                        <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs">01</span>
                        Human Supervision
                      </h4>
                      <p className="text-sm text-gray-500 pl-11">Developing a framework where AI serves as a complementary tool under strict human oversight to favor central skills.</p>
                   </div>
                   
                   <div className="group">
                      <h4 className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm mb-2 text-brand-dark group-hover:text-brand-red transition-colors">
                        <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs">02</span>
                        Critical Skills
                      </h4>
                      <p className="text-sm text-gray-500 pl-11">Fostering central skills like critical thinking, digital literacy, and the ethical management of new technologies.</p>
                   </div>
                   
                   <div className="group">
                      <h4 className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm mb-2 text-brand-dark group-hover:text-brand-red transition-colors">
                        <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs">03</span>
                        Standardization
                      </h4>
                      <p className="text-sm text-gray-500 pl-11">Creating rigorous protocols for material preparation, feedback, and objective evaluation assisted by AI.</p>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* Quote Section */}
       <section className="bg-gray-50 py-32 mb-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 text-[20rem] leading-none font-serif text-gray-100 -translate-y-1/2 translate-x-10 select-none">“</div>
          <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
             <blockquote className="text-3xl md:text-5xl font-serif italic text-brand-dark leading-tight mb-10">
                We champion the 'Brain-to-Machine' dynamic: where human critical thinking leads and Artificial Intelligence follows. Our goal is not to bypass the cognitive struggle of learning, but to elevate it—ensuring that while the tools may be artificial, the understanding remains authentically human.
             </blockquote>
             <div className="flex flex-col items-center gap-2">
                <cite className="text-brand-red font-bold uppercase tracking-widest not-italic text-sm">
                   D-IA-Crítica
                </cite>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Teaching Innovation Project</span>
             </div>
          </div>
       </section>

       {/* Section 2: Innovation Pillars */}
       <section className="container mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
             <div>
               <h2 className="text-4xl font-bold text-brand-dark mb-2">Innovation Pillars</h2>
               <p className="font-serif italic text-gray-500">Transversal integration throughout the teaching process.</p>
             </div>
             <div className="hidden md:block text-right">
               <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Level of Innovation</p>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
                { icon: Search, title: "Teaching Material", desc: "Using AI to generate notes, summaries, and multimedia content under supervision." },
                { icon: Users, title: "Work Dynamics", desc: "Creating enriched spaces supervised by teachers to guide pre-class learning." },
                { icon: PenTool, title: "AI Feedback", desc: "AI assists in task correction and individualized reporting, validated by teachers." },
                { icon: BarChart, title: "Monitoring", desc: "Using partial performance reports to improve tutoring and detect difficulties early." }
             ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 group rounded-sm">
                   <div className="w-12 h-12 bg-gray-100 text-brand-dark flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <item.icon size={20} />
                   </div>
                   <h3 className="font-bold text-lg mb-3 text-brand-dark">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
       </section>

       {/* NEW SECTION: Courses */}
       <section className="container mx-auto px-6 mb-32">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-brand-dark mb-6">Impacted Courses</h2>
                <p className="font-serif italic text-gray-500 max-w-2xl mx-auto">
                  The methodology is being implemented across various subjects in the curriculum, benefiting a diverse student body.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { code: "140506", name: "Methods and Techniques (Grado en Global Studies)" },
                  { code: "109951", name: "Tecnologías, poder político y gobierno (Grado en Ciencia Política y Administración Pública)" },
                  { code: "109927", name: "Conceptos y Métodos de Política Comparada (Grado en Ciencia Política y Administración Pública)" },
                  { code: "304792", name: "Comparative Public Policy (Máster en Ciencia Política y Administración Pública)" },
                  { code: "109929", name: "Sistemas políticos de América Latina (Grado en Ciencia Política y Administración Pública)" },
                  { code: "109931", name: "Partidos y sistemas de partidos (Grado en Ciencia Política y Administración Pública)" },
                  { code: "208435", name: "Avanced Methods and Techniques (Máster en Global and International Studies)" },
                  { code: "100424", name: "Política y gobierno de España (Grado en Ciencia Política y Administración Pública)" },
                  { code: "140536", name: "Transitional Justice and Democratization (Grado en Global Studies)" },
                  { code: "100428", name: "Políticas Públicas (Grado en Ciencia Política y Administración/Derecho)" },
                  { code: "109608", name: "Sistemas Políticos (Grado en Sociología)" }
                ].map((course, idx) => (
                   <div key={idx} className="flex items-center justify-between p-6 transition-all duration-300 group rounded-sm bg-brand-dark text-white border border-white/10 hover:bg-white hover:text-brand-dark hover:border-gray-100 hover:shadow-lg">
                      <div className="flex items-center gap-4 pr-4">
                         <div className="p-3 rounded-full transition-colors shrink-0 bg-brand-red text-white group-hover:bg-brand-gray group-hover:text-brand-dark">
                            <BookOpen size={20} />
                         </div>
                         <span className="font-bold text-sm text-white group-hover:text-brand-dark">{course.name}</span>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded border whitespace-nowrap shrink-0 transition-colors bg-white/10 text-gray-300 border-white/20 group-hover:text-gray-400 group-hover:bg-gray-50 group-hover:border-gray-200">
                        {course.code}
                      </span>
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* Section 3: Work Plan (Timeline) */}
       <section className="bg-brand-dark text-white py-32">
          <div className="container mx-auto px-6">
             <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                   <div className="sticky top-32">
                      <h2 className="text-5xl font-black italic mb-6 tracking-tighter">
                         Project <br /> <span className="text-brand-red">Roadmap</span>
                      </h2>
                      <p className="text-gray-400 text-lg font-serif mb-8">
                         A structured four-phase plan guaranteeing logical development from conceptualization to dissemination.
                      </p>
                      <div className="h-1 w-20 bg-white/20"></div>
                   </div>
                </div>
                
                <div className="lg:w-2/3 space-y-20 relative">
                   {/* Vertical Line */}
                   <div className="absolute left-[15px] top-2 bottom-0 w-px bg-white/20 md:left-[15px]"></div>

                   {/* Phase 1 */}
                   <div className="relative pl-16">
                      <span className="absolute left-0 top-1 w-8 h-8 bg-brand-red text-white flex items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-brand-dark">01</span>
                      <h3 className="text-3xl font-bold mb-2">Design & Planning</h3>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Months 1 - 2</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">Definition of scope, roles, and detailed calendar. Comprehensive bibliographic review on AI in higher education and ethical frameworks.</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                         {['Inaugural meeting', 'State of the art review', 'Methodological framework'].map(li => (
                           <li key={li} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle2 size={14} className="text-brand-red" /> {li}
                           </li>
                         ))}
                      </ul>
                   </div>

                   {/* Phase 2 */}
                   <div className="relative pl-16">
                      <span className="absolute left-0 top-1 w-8 h-8 bg-white text-brand-dark flex items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-brand-dark">02</span>
                      <h3 className="text-3xl font-bold mb-2">Development</h3>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Months 3 - 4</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">Creation of step-by-step guides for teachers, AI-assisted study resources, and optimized evaluation rubrics.</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                         {['Integration Protocols', 'Teaching materials', 'Evaluation rubrics', 'NotebookLM setup'].map(li => (
                           <li key={li} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle2 size={14} className="text-brand-red" /> {li}
                           </li>
                         ))}
                      </ul>
                   </div>

                   {/* Phase 3 */}
                   <div className="relative pl-16">
                      <span className="absolute left-0 top-1 w-8 h-8 bg-white text-brand-dark flex items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-brand-dark">03</span>
                      <h3 className="text-3xl font-bold mb-2">Implementation</h3>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Months 5 - 9</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">Active use in the classroom. Ethics training for students, followed by session-by-session application of the methodology.</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                         {['Ethics code session', 'Human-reviewed feedback', 'Proactive tutoring'].map(li => (
                           <li key={li} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle2 size={14} className="text-brand-red" /> {li}
                           </li>
                         ))}
                      </ul>
                   </div>

                    {/* Phase 4 */}
                    <div className="relative pl-16">
                      <span className="absolute left-0 top-1 w-8 h-8 bg-white text-brand-dark flex items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-brand-dark">04</span>
                      <h3 className="text-3xl font-bold mb-2">Evaluation</h3>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Months 10 - 12</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">Collection of quantitative (logs, grades) and qualitative (surveys, interviews) data to refine the model.</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                         {['Data analysis', 'Focus groups', 'Framework v2.0', 'Dissemination'].map(li => (
                           <li key={li} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle2 size={14} className="text-brand-red" /> {li}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* Evaluation Section */}
       <section className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-brand-dark mb-12">Evaluation Strategy</h2>
             <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-gray-50 p-8 rounded-sm border-t-4 border-brand-red">
                   <h3 className="font-bold text-xl mb-4">Objective Compliance</h3>
                   <ul className="space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-red shrink-0 mt-1"/> Coherence and applicability analysis</li>
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-red shrink-0 mt-1"/> Student perception surveys</li>
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-red shrink-0 mt-1"/> Critical thinking development assessment</li>
                   </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-sm border-t-4 border-brand-dark">
                   <h3 className="font-bold text-xl mb-4">Protocol & Materials</h3>
                   <ul className="space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-dark shrink-0 mt-1"/> Reduction in mechanical correction time</li>
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-dark shrink-0 mt-1"/> Quality and detail of feedback</li>
                      <li className="flex items-start gap-2"><ArrowRight size={16} className="text-brand-dark shrink-0 mt-1"/> Usage analytics of notebookLM</li>
                   </ul>
                </div>
             </div>
          </div>
       </section>

    </div>
  );
};