import React from 'react';
import { Search, ShoppingCart, User, Menu, BookOpen } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="w-6 h-6 mr-4 lg:hidden" />
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Kindle Store</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books, authors, or genres..."
                className="w-full px-4 py-2 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => onSearch(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden lg:flex items-center">
              <ShoppingCart className="w-6 h-6" />
              <span className="ml-2">Cart</span>
            </button>
            <button className="hidden lg:flex items-center">
              <User className="w-6 h-6" />
              <span className="ml-2">Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}