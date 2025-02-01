export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  rating: number;
  reviewCount: number;
  description: string;
  category: string;
  publishDate: Date;
  isNewRelease: boolean;
  isBestseller: boolean;
  isComingSoon: boolean;
  isSpecialOffer: boolean;
}