import React from 'react';

interface ItemGridProps {
  onCategorySelect?: (category: string) => void;
}

const items = [
  {
    category: "Audio Content",
    title: "podcasts",
    repoCategory: "Podcasts",
    desc: "Expert discussions on AI pedagogy",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "Teacher Tools",
    title: "prompts",
    repoCategory: "Prompts",
    desc: "Curated interaction guides",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "Interactive",
    title: "simulators",
    repoCategory: "Simulations",
    desc: "Role-play scenarios",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "Assessment",
    title: "assignments",
    repoCategory: "Assessments",
    desc: "AI-assisted evaluation frameworks",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
  }
];

export const ItemGrid: React.FC<ItemGridProps> = ({ onCategorySelect }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark border-b-2 border-brand-dark inline-block pb-1 uppercase tracking-tighter">
            Materials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer"
              onClick={() => onCategorySelect?.(item.repoCategory)}
            >
              <div className="overflow-hidden mb-6 relative aspect-[4/5]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                 {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-colors duration-300"></div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.category}</p>
                <h3 className="text-xl font-bold text-brand-dark mb-1 lowercase first-letter:capitalize">{item.title}</h3>
                <p className="text-sm text-gray-600 font-serif italic">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};