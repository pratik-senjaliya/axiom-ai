"use client";

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogFilter({ categories, activeCategory, onCategoryChange }: BlogFilterProps) {
  const allCategories = ["All", ...categories.filter(c => c && c !== "All")];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200"
          style={
            activeCategory === category
              ? {
                  background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)',
                  color: '#0A0F1F',
                  border: 'none',
                  boxShadow: '0 0 15px rgba(0,229,255,0.4)',
                  transform: 'scale(1.05)',
                }
              : {
                  background: 'rgba(20,36,58,0.7)',
                  border: '1px solid rgba(0,229,255,0.2)',
                  color: '#8FA3BF',
                }
          }
          onMouseEnter={e => {
            if (activeCategory !== category) {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.5)';
              (e.currentTarget as HTMLElement).style.color = '#C5D1E0';
            }
          }}
          onMouseLeave={e => {
            if (activeCategory !== category) {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.2)';
              (e.currentTarget as HTMLElement).style.color = '#8FA3BF';
            }
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
