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
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border ${
            activeCategory === category
              ? "bg-[#26201D] border-[#26201D] text-white scale-105 shadow-md"
              : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
