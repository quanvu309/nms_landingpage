
export enum NavItem {
  HOME = 'home',
  EXPLORE = 'explore',
  REWARDS = 'rewards',
  BOOKINGS = 'bookings',
  ACCOUNT = 'account'
}

export interface Place {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  imageUrl: string;
  category: string;
}

export interface UserList {
  id: string;
  title: string;
  itemCount: number;
  updatedAt: string;
  creator: {
    name: string;
    avatar: string;
  };
  places: Place[];
}

export interface NovaPass {
  id: string;
  name: string;
  location: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  benefits: string[];
}
