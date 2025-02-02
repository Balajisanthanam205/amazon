import { faker } from '@faker-js/faker';

const BOOK_IMAGES = [
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800'
];

export function generateBooks(count) {
  return Array.from({ length: count }, (_, index) => {
    const price = parseFloat(faker.commerce.price({ min: 9.99, max: 49.99 }));
    const hasDiscount = faker.datatype.boolean(0.3);
    const originalPrice = hasDiscount ? price * (1 + faker.number.float({ min: 0.2, max: 0.5 })) : undefined;
    const rating = faker.number.float({ min: 3.5, max: 5, precision: 0.1 });
    const isNewRelease = faker.datatype.boolean(0.15);
    const isBestseller = !isNewRelease && rating > 4.5 && faker.datatype.boolean(0.2);

    return {
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      author: faker.person.fullName(),
      price,
      originalPrice,
      coverImage: BOOK_IMAGES[index % BOOK_IMAGES.length],
      rating,
      reviewCount: faker.number.int({ min: 10, max: 50000 }),
      isNewRelease,
      isBestseller
    };
  });
}