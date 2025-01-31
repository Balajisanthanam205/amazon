import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BookCard } from './components/BookCard';
import { books } from './data/books';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Bestsellers');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  const filteredBooks = books.filter(book => {
    const matchesCategory = book.category.includes(selectedCategory as any);
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={setSearchQuery} />
      <div className="flex">
        <Sidebar selectedCategory={selectedCategory} onSelectCategory={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }} />
        <main className="flex-1 p-6 overflow-auto" style={{ height: 'calc(100vh - 64px)' }}>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{selectedCategory}</h1>
            <p className="text-gray-600">
              {searchQuery ? `Search results for "${searchQuery}"` : `Discover our latest collection of ${selectedCategory.toLowerCase()}`}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center gap-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-md bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === number
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;