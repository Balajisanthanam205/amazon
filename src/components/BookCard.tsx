import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const discount = book.originalPrice 
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : 0;

  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="aspect-[2/3] relative overflow-hidden">
        <img
          src={book.coverImage}
          alt={book.title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
        {book.isNewRelease && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            New
          </div>
        )}
        {book.isBestseller && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Bestseller
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg leading-snug mb-1 line-clamp-2">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{book.author}</p>
        <div className="flex items-center mb-2">
          {renderRatingStars(book.rating)}
          <span className="text-sm text-gray-500 ml-2">({book.reviewCount})</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">${book.price.toFixed(2)}</span>
          {book.originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through">${book.originalPrice.toFixed(2)}</span>
              <span className="text-sm text-green-600 font-semibold">Save {discount}%</span>
            </>
          )}
        </div>
        {book.isComingSoon && (
          <div className="mt-2 text-sm text-gray-600">
            Release Date: {book.releaseDate}
          </div>
        )}
      </div>
    </div>
  );
}