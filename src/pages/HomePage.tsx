import React from 'react';
import { Book } from '../types/book';
import { BookGrid } from '../components/BookGrid';

interface HomePageProps {
  books: Book[];
}

export function HomePage({ books }: HomePageProps) {
  const specialOffers = books.filter(book => book.isSpecialOffer);
  const bestsellers = books.filter(book => book.isBestseller);
  const newReleases = books.filter(book => book.isNewRelease);

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
        {specialOffers.length > 0 && (
          <BookGrid books={specialOffers.slice(0, 5)} title="Special Offers" />
        )}
        {bestsellers.length > 0 && (
          <BookGrid books={bestsellers.slice(0, 5)} title="Trending Bestsellers" />
        )}
        {newReleases.length > 0 && (
          <BookGrid books={newReleases.slice(0, 5)} title="Just Arrived" />
        )}
      </section>
    </main>
  );
}