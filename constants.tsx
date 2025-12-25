
import { Place, UserList, NovaPass } from './types';

export const MOCK_PLACES: Place[] = [
  {
    id: '1',
    name: "Centara Mirage Resort Mui Ne",
    location: "NovaWorld Phan Thiet",
    rating: 4.9,
    reviews: 2450,
    price: "3,800,000",
    imageUrl: "https://images.unsplash.com/photo-1582610116397-edb318620fba?q=80&w=800&auto=format&fit=crop",
    category: "Resort"
  },
  {
    id: '2',
    name: "Marina Club - Vung Tau",
    location: "Bãi Dứa, Vũng Tàu",
    rating: 4.8,
    reviews: 1120,
    price: "850,000",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    category: "Dining"
  },
  {
    id: '3',
    name: "Anantara Mui Ne Resort",
    location: "Hàm Tiến, Phan Thiết",
    rating: 4.9,
    reviews: 1800,
    price: "5,200,000",
    imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop",
    category: "Resort"
  },
  {
    id: '4',
    name: "Dynasty House - Hong Kong Cuisine",
    location: "Saigon Center, Quận 1",
    rating: 4.6,
    reviews: 950,
    price: "600,000",
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    category: "Dining"
  }
];

export const MOCK_USER_LISTS: UserList[] = [
  {
    id: 'list1',
    title: "Hành trình nghỉ dưỡng 3N2Đ tại NovaWorld Phan Thiet",
    itemCount: 12,
    updatedAt: "T8 2025",
    creator: {
      name: "nova_traveler_vn",
      avatar: "https://i.pravatar.cc/150?u=nova1"
    },
    places: [MOCK_PLACES[0], MOCK_PLACES[2]]
  },
  {
    id: 'list2',
    title: "Top Dining Spots của Nova FnB tại Sài Gòn",
    itemCount: 6,
    updatedAt: "T7 2025",
    creator: {
      name: "saigon_foodie",
      avatar: "https://i.pravatar.cc/150?u=saigon"
    },
    places: [MOCK_PLACES[1], MOCK_PLACES[3]]
  }
];

export const MOCK_PASSES: NovaPass[] = [
  {
    id: 'p1',
    name: "NovaWorld Discovery Pass",
    location: "Phan Thiết & Hồ Tràm",
    price: 1590000,
    originalPrice: 3200000,
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=800&auto=format&fit=crop",
    benefits: ["Centara Mirage", "Circus Land", "Wonderland Water Park", "Marina Club Dining"]
  }
];
