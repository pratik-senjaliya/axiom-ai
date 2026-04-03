import Link from "next/link";

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
}

export function BlogFilter({ categories, activeCategory }: BlogFilterProps) {
  const allCategories = ["All", ...categories.filter(c => c && c !== "All")];

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16 max-w-[95rem] mx-auto w-full px-4">
      {allCategories.map((category) => (
        <Link
          key={category}
          href={category === "All" ? "/insights" : `/insights?category=${encodeURIComponent(category)}`}
          scroll={false}
          className="px-6 py-2.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest transition-all duration-300 border flex-shrink-0"
          style={
            activeCategory === category
              ? {
                  background: 'linear-gradient(135deg, #1DA1F2, #00E5FF)',
                  color: '#0A0F1F',
                  borderColor: 'transparent',
                  boxShadow: '0 0 20px rgba(0,229,255,0.3)',
                  transform: 'scale(1.05)',
                }
              : {
                  background: 'rgba(20,36,58,0.7)',
                  borderColor: 'rgba(0,229,255,0.1)',
                  color: '#8FA3BF',
                }
          }
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
