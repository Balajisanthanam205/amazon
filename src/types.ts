export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  rating: number;
  reviewCount: number;
  category: string[];
  isNewRelease?: boolean;
  isBestseller?: boolean;
  isComingSoon?: boolean;
  releaseDate?: string;
  description: string;
}