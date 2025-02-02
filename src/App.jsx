import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { generateBooks } from './utils/generateBooks';
import { BookCard } from './components/BookCard';

const ITEMS_PER_PAGE = 12;
const TOTAL_BOOKS = 2000;

function App() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generatedBooks = generateBooks(TOTAL_BOOKS);
    setBooks(generatedBooks);
    setLoading(false);
  }, []);

  // Filter books for different sections
  const bestsellers = books.filter(book => book.isBestseller);
  const newReleases = books.filter(book => book.isNewRelease);
  const topRated = books.filter(book => book.rating >= 4.5);

  // Pagination logic
  const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBooks = books.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: document.getElementById('all-books').offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <a href="/" className="flex items-center">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">BookStore</span>
            </a>
          </div>
        </div>
      </header>
      
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
              className="container mx-auto px-4"
            >
              {/* Featured Sections */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Bestsellers</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {bestsellers.slice(0, 6).map(book => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">New Releases</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {newReleases.slice(0, 6).map(book => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Top Rated</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {topRated.slice(0, 6).map(book => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </section>

              {/* All Books with Pagination */}
              <section id="all-books" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">All Books</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {currentBooks.map(book => (
                    <motion.div
                      key={book.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BookCard book={book} />
                    </motion.div>
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i;
                    } else {
                      pageNumber = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-10 h-10 rounded-full ${
                          currentPage === pageNumber
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;