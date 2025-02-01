import { motion } from 'framer-motion';
import type { Book } from '../types/book';
import { BookCard } from './BookCard';

interface BookGridProps {
  books: Book[];
  title: string;
}

export function BookGrid({ books, title }: BookGridProps) {
  return (
    <section className="py-8">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold mb-6"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}