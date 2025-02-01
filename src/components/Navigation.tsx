import React from 'react';
import { NavLink } from 'react-router-dom';
import { Book, ShoppingCart, Search } from 'lucide-react';

export function Navigation() {
  const navItems = [
    { path: '/bestsellers', label: 'Bestsellers' },
    { path: '/new-releases', label: 'New Releases' },
    { path: '/fiction', label: 'Fiction' },
    { path: '/coming-soon', label: 'Coming Soon' },
    { path: '/special-offers', label: 'Special Offers' },
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Book className="w-8 h-8" />
            <span>BookStore</span>
          </NavLink>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="w-64 px-4 py-2 rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <button className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
        
        {/* Navigation bar */}
        <nav className="border-t border-gray-800">
          <ul className="flex items-center gap-8 py-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-blue-400 transition-colors ${
                      isActive ? 'text-blue-400' : 'text-gray-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}