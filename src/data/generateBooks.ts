import { faker } from '@faker-js/faker';
import type { Book } from '../types/book';

const BOOK_COVERS = [
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop'
];

export function generateBooks(count: number): Book[] {
  const books: Book[] = [];
  const categories = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Romance', 'Biography'];

  for (let i = 0; i < count; i++) {
    const publishDate = faker.date.between({ 
      from: '2023-01-01', 
      to: '2024-12-31' 
    });
    const price = parseFloat(faker.commerce.price({ min: 9.99, max: 29.99 }));
    const hasDiscount = faker.datatype.boolean(0.3);

    const book: Book = {
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      author: faker.person.fullName(),
      price,
      originalPrice: hasDiscount ? price * 1.2 : undefined,
      coverImage: BOOK_COVERS[i % BOOK_COVERS.length], // Cycle through the fixed set of images
      rating: faker.number.float({ min: 3.5, max: 5, precision: 0.1 }),
      reviewCount: faker.number.int({ min: 1, max: 5000 }),
      description: faker.lorem.paragraph(),
      category: faker.helpers.arrayElement(categories),
      publishDate,
      isNewRelease: publishDate > new Date('2024-01-01'),
      isBestseller: faker.datatype.boolean(0.1),
      isComingSoon: publishDate > new Date(),
      isSpecialOffer: hasDiscount
    };

    books.push(book);
  }

  return books;
}