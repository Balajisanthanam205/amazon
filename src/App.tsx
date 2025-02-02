import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { BookSection } from './components/BookSection';
import { Pagination } from './components/Pagination';
import { Book } from './types';
import { generateBooks } from './utils/generateBooks';

const ITEMS_PER_PAGE = 12;
const TOTAL_BOOKS = 2000;

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate books on component mount
    const generatedBooks = generateBooks(TOTAL_BOOKS);
    setBooks(generatedBooks);
    setLoading(false);
  }, []);

  // Filter books for different sections
  const bestsellers = books.filter(book => book.isBestseller);
  const newReleases = books.filter(book => book.isNewRelease);
  const comingSoon = books.filter(book => book.isComingSoon);
  const specialOffers = books.filter(book => book.originalPrice && book.originalPrice > book.price);
  const topRated = books.filter(book => book.rating >= 4.5);
  const fiction = books.filter(book => book.category.includes('Books') || book.category.includes('Literature'));

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pb-12">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-600 text-white py-16 mb-8"
        >
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-4"
            >
              Welcome to BookStore
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl opacity-90"
            >
              Discover millions of eBooks, audiobooks, and more
            </motion.p>
          </div>
        </motion.section>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-64"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BookSection title="Bestsellers" books={bestsellers.slice(0, 6)} viewAllLink="/bestsellers" />
              <BookSection title="New Releases" books={newReleases.slice(0, 6)} viewAllLink="/new-releases" />
              <BookSection title="Top Rated" books={topRated.slice(0, 6)} viewAllLink="/top-rated" />
              <BookSection title="Fiction" books={fiction.slice(0, 6)} viewAllLink="/fiction" />
              <BookSection title="Coming Soon" books={comingSoon.slice(0, 6)} viewAllLink="/coming-soon" />
              <BookSection title="Special Offers" books={specialOffers.slice(0, 6)} viewAllLink="/special-offers" />

              <section className="py-8">
                <div className="container mx-auto px-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">All Books</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {books.slice(startIndex, endIndex).map((book) => (
                      <motion.div
                        key={book.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <BookCard book={book} />
                      </motion.div>
                    ))}
                  </div>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About BookStore</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Policy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 BookStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;