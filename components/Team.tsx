import React, { useRef } from 'react';
import { Github, Twitter, Linkedin, ChevronLeft, ChevronRight, Mail } from 'lucide-react';

interface Socials {
  twitter?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

interface Member {
  name: string;
  role: string;
  img: string;
  socials?: Socials;
}

const members: Member[] = [
  {
    name: "Rodrigo Rodrigues-Silveira",
    role: "Principal Investigator",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    socials: {
      email: "rodrodr@usal.es",
      github: "https://github.com/rodrodr"
    }
  },
  {
    name: "Rubén Cuéllar Rivero",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Carolina Plaza Colodro",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Nicolás Miranda Olivares",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Cristina María Rivas Pérez",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Mercedes García Montero",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Elena Martínez Barahona",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "José Manuel Rivas Otero",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Sofía Anabel Martínez Osorio",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1598550874175-4d7112ee6616?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Eduardo Barreto Martín",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Samantha Leonor Botica Fuentes",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Alejandro Sánchez Muñoz",
    role: "Researcher",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  }
];

const TeamMember = ({ name, role, img, socials }: { name: string, role: string, img: string, socials?: Socials }) => (
  <div className="bg-white rounded-sm p-6 text-center border-none shadow-none hover:shadow-lg transition-all duration-300 group flex flex-col h-full min-w-full">
    <div className="mb-6 overflow-hidden relative inline-block mx-auto">
      <img 
        src={img} 
        alt={name} 
        className="w-48 h-48 rounded-full object-cover border-2 border-transparent group-hover:border-brand-red transition-all duration-300 grayscale group-hover:grayscale-0"
      />
    </div>
    <h4 className="text-lg font-bold text-brand-dark italic min-h-[3.5rem] flex items-center justify-center mb-2">{name}</h4>
    <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-4">{role}</p>
    <div className="w-8 h-1 bg-brand-gray mx-auto mb-4 group-hover:bg-brand-red transition-colors"></div>
    
    <div className="mt-auto flex justify-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity pt-2">
      {socials?.twitter && (
        <a href={socials.twitter} className="text-brand-dark hover:text-brand-red" aria-label="Twitter">
          <Twitter size={16} />
        </a>
      )}
      {socials?.linkedin && (
        <a href={socials.linkedin} className="text-brand-dark hover:text-brand-red" aria-label="LinkedIn">
          <Linkedin size={16} />
        </a>
      )}
      {socials?.github && (
        <a href={socials.github} className="text-brand-dark hover:text-brand-red" aria-label="GitHub">
          <Github size={16} />
        </a>
      )}
      {socials?.email && (
        <a href={`mailto:${socials.email}`} className="text-brand-dark hover:text-brand-red" aria-label="Email">
          <Mail size={16} />
        </a>
      )}
    </div>
  </div>
);

export const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by the width of the first item roughly, plus gap
      const itemWidth = current.firstElementChild?.clientWidth || 300;
      const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
      
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="team" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="text-4xl font-black italic text-brand-dark mb-4 tracking-tighter">the team</h2>
            <p className="text-gray-500 font-serif italic max-w-2xl">
              Our diverse team of educators and researchers committed to innovation.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-3 hidden md:flex">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 focus:outline-none"
              aria-label="Previous team member"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 focus:outline-none"
              aria-label="Next team member"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar"
            style={{ 
              scrollbarWidth: 'none',  /* Firefox */
              msOverflowStyle: 'none'  /* IE and Edge */
            }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}} />
            
            {members.map((member, index) => (
              <div 
                key={index} 
                className="min-w-[85%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] snap-start flex-shrink-0"
              >
                <TeamMember 
                  name={member.name} 
                  role={member.role} 
                  img={member.img} 
                  socials={member.socials}
                />
              </div>
            ))}
          </div>

          {/* Mobile Navigation Overlay (if desired, otherwise rely on swipe) */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
             <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-gray-100 text-brand-dark"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-gray-100 text-brand-dark"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};