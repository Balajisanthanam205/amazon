import React from 'react';
import { Star, BookOpen, Headphones, Book as BookIcon } from 'lucide-react';
import { Book } from '../data/books';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={book.coverUrl} 
        alt={book.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
        <p className="text-sm text-gray-600">by {book.author}</p>
        
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-700">{book.rating.toFixed(1)}</span>
          <span className="ml-1 text-sm text-gray-500">({book.reviewCount})</span>
        </div>

        <div className="flex gap-2 mt-2">
          {book.formats.map((format, index) => (
            <span key={`${format}-${index}`} className="inline-flex items-center">
              {format === 'eBook' && <BookOpen className="w-4 h-4 mr-1" />}
              {format === 'Audiobook' && <Headphones className="w-4 h-4 mr-1" />}
              {format === 'Paperback' && <BookIcon className="w-4 h-4 mr-1" />}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {book.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">${book.price.toFixed(2)}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}