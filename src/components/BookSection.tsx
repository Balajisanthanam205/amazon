import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Book } from '../types';
import { BookCard } from './BookCard';

interface BookSectionProps {
  title: string;
  books: Book[];
  viewAllLink?: string;
}

export function BookSection({ title, books, viewAllLink }: BookSectionProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {viewAllLink && (
            <a
              href={viewAllLink}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}