import React from 'react';
import { BookOpen, Star, Clock, TrendingUp, Gift, Sparkles } from 'lucide-react';

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { name: 'Bestsellers', icon: TrendingUp },
  { name: 'New Releases', icon: Sparkles },
  { name: 'Fiction', icon: BookOpen },
  { name: 'Top Rated', icon: Star },
  { name: 'Coming Soon', icon: Clock },
  { name: 'Special Offers', icon: Gift },
];

export function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-50 h-screen p-4 border-r">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
        {categories.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => onSelectCategory(name)}
            className={`flex items-center w-full p-2 rounded-md transition-colors ${
              selectedCategory === name
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}