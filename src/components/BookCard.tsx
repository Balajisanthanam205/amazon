import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Book } from '../types/book';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-[300px] object-cover"
        />
        {book.isNewRelease && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-semibold">
            New Release
          </span>
        )}
        {book.isSpecialOffer && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            Special Offer
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-2">{book.title}</h3>
        <p className="text-gray-600 mt-1">by {book.author}</p>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm">{book.rating}</span>
          <span className="text-gray-400 text-sm ml-1">({book.reviewCount})</span>
        </div>
        <div className="mt-2">
          {book.originalPrice ? (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-red-600">${book.price.toFixed(2)}</span>
              <span className="text-gray-400 line-through">${book.originalPrice.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-xl font-bold">${book.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}