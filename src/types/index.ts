export interface Destination {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviewCount?: number;
  image: string;
  isTrending?: boolean;
  isFavorite?: boolean;
  description?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  avatar: string;
  isVerified?: boolean;
}

export interface Region {
  id: string;
  name: string;
}

export interface Stat {
  label: string;
  value: string | number;
  trend?: number;
  trendDirection?: 'up' | 'down';
  icon: string;
  color: string;
}

export interface Booking {
  id: string;
  customerName: string;
  serviceName: string;
  date: string;
  status: 'Berhasil' | 'Pending' | 'Dibatalkan';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'admin';
}
