import React, { useState } from 'react';
import { Search, Menu, ShoppingCart, BookOpen } from 'lucide-react';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <a href="/" className="flex items-center ml-2 lg:ml-0">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">BookStore</span>
            </a>
          </div>

          <div className="flex-1 max-w-3xl mx-4 hidden lg:block">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for books by title, author, or ISBN"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        <div className="lg:hidden py-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}