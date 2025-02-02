import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
    if (totalPages <= 5) return i + 1;
    if (currentPage <= 3) return i + 1;
    if (currentPage >= totalPages - 2) return totalPages - 4 + i;
    return currentPage - 2 + i;
  });

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pages[0] > 1 && (
        <>
          <PaginationButton page={1} currentPage={currentPage} onClick={() => onPageChange(1)} />
          <span className="px-2">...</span>
        </>
      )}

      {pages.map(page => (
        <PaginationButton
          key={page}
          page={page}
          currentPage={currentPage}
          onClick={() => onPageChange(page)}
        />
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          <span className="px-2">...</span>
          <PaginationButton
            page={totalPages}
            currentPage={currentPage}
            onClick={() => onPageChange(totalPages)}
          />
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function PaginationButton({ page, currentPage, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`w-10 h-10 rounded-full ${
        currentPage === page
          ? 'bg-blue-600 text-white'
          : 'hover:bg-gray-100'
      }`}
    >
      {page}
    </motion.button>
  );
}