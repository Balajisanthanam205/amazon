export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string[];
  publicationYear: number;
  rating: number;
  reviewCount: number;
  price: number;
  tags: string[];
  formats: ('eBook' | 'Paperback' | 'Audiobook')[];
  coverUrl: string;
  synopsis: string;
  isbn: string;
  fileSize: string;
  publisher: string;
  category: ('Bestsellers' | 'New Releases' | 'Fiction' | 'Top Rated' | 'Coming Soon' | 'Special Offers')[];
}

// Helper function to generate random books
function generateBooks(count: number, categories: Book['category']): Book[] {
  const titles = [
    'The Silent Echo', 'Beyond the Stars', 'Whispers in the Dark', 'The Last Journey',
    'Echoes of Tomorrow', 'The Hidden Path', 'Secrets of the Deep', 'The Forgotten Gate',
    'Shadows of Time', 'The Crystal Key', 'Beneath the Surface', 'The Lost City',
    'Dreams of Dawn', 'The Eternal Quest', 'Voices in the Wind', 'The Ancient Promise',
    'The Midnight Garden', 'Celestial Dreams', 'The Lost Symphony', 'The Winter\'s Tale',
    'The Quantum Paradox', 'Echoes of Eternity', 'The Emerald Crown', 'The Silver Path',
    'The Golden Thread', 'The Crimson Dawn', 'Whispers of Hope', 'The Azure Sky',
    'The Ivory Tower', 'The Obsidian Gate', 'The Ruby Chamber', 'The Sapphire Sea'
  ];
  
  const authors = [
    'Emma Rivers', 'James Mitchell', 'Sarah Blake', 'Michael Chen',
    'Laura Thompson', 'David Wilson', 'Maria Garcia', 'Robert Frost',
    'Anna Lee', 'John Smith', 'Lisa Wong', 'Chris Davis',
    'Elena Rodriguez', 'Thomas Wright', 'Sophie Martin', 'Daniel Kim',
    'Isabella Santos', 'William Turner', 'Olivia Brown', 'Alexander Grey',
    'Victoria Chase', 'Benjamin Park', 'Catherine Wells', 'Marcus Reed'
  ];

  const genres = ['Fiction', 'Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Thriller', 'Historical Fiction', 'Contemporary'];
  const publishers = ['Penguin', 'HarperCollins', 'Random House', 'Simon & Schuster', 'Macmillan', 'Hachette'];
  const tags = ['Bestseller', 'Editor\'s Pick', 'Featured', 'Award Winner', 'Most Popular', 'New Release', 'Staff Pick'];

  // Extended list of book-related images from Unsplash
  const bookCovers = [
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1495640452828-3df6795cf69b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=800',
    // Additional book images
    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1518744946-ae3801d1d281?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1512045482940-f37f5216f639?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1467951591042-f388365db261?auto=format&fit=crop&q=80&w=800'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    title: titles[Math.floor(Math.random() * titles.length)],
    author: authors[Math.floor(Math.random() * authors.length)],
    genre: [genres[Math.floor(Math.random() * genres.length)]],
    publicationYear: 2020 + Math.floor(Math.random() * 4),
    rating: 3.5 + Math.random() * 1.5,
    reviewCount: Math.floor(Math.random() * 5000) + 100,
    price: 4.99 + Math.floor(Math.random() * 20),
    tags: [tags[Math.floor(Math.random() * tags.length)]],
    formats: ['eBook', 'Paperback', Math.random() > 0.5 ? 'Audiobook' : 'Paperback'],
    coverUrl: bookCovers[i % bookCovers.length],
    synopsis: 'A captivating story that will keep you on the edge of your seat...',
    isbn: `978-${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    fileSize: `${Math.floor(Math.random() * 5) + 1}.${Math.floor(Math.random() * 9)}MB`,
    publisher: publishers[Math.floor(Math.random() * publishers.length)],
    category: categories
  }));
}

// Generate more books for each category
export const books: Book[] = [
  ...generateBooks(40, ['Bestsellers']),
  ...generateBooks(40, ['New Releases']),
  ...generateBooks(30, ['Fiction']),
  ...generateBooks(30, ['Top Rated']),
  ...generateBooks(30, ['Coming Soon']),
  ...generateBooks(30, ['Special Offers'])
];