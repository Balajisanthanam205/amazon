import React from 'react';
import { useParams } from 'react-router-dom';
import { Book } from '../types/book';
import { BookCard } from '../components/BookCard';
import { Pagination } from '../components/Pagination';

interface CategoryPageProps {
  books: Book[];
}

export function CategoryPage({ books }: CategoryPageProps) {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = React.useState(1);
  const booksPerPage = 20;

  const getCategoryBooks = () => {
    switch (category) {
      case 'bestsellers':
        return books.filter(book => book.isBestseller);
      case 'new-releases':
        return books.filter(book => book.isNewRelease);
      case 'fiction':
        return books.filter(book => book.category === 'Fiction');
      case 'coming-soon':
        return books.filter(book => book.isComingSoon);
      case 'special-offers':
        return books.filter(book => book.isSpecialOffer);
      default:
        return [];
    }
  };

  const categoryBooks = getCategoryBooks();
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const currentBooks = categoryBooks.slice(startIndex, endIndex);
  const totalPages = Math.ceil(categoryBooks.length / booksPerPage);

  const getCategoryTitle = () => {
    switch (category) {
      case 'bestsellers':
        return 'Bestsellers';
      case 'new-releases':
        return 'New Releases';
      case 'fiction':
        return 'Fiction Books';
      case 'coming-soon':
        return 'Coming Soon';
      case 'special-offers':
        return 'Special Offers';
      default:
        return '';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{getCategoryTitle()}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {currentBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}