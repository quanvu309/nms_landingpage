
import { Place, UserList, NovaPass } from './types';

export const MOCK_PLACES: Place[] = [
  {
    id: '1',
    name: "Dynasty House - Hong Kong Cuisine",
    location: "Saigon Center, Quận 1",
    rating: 4.8,
    reviews: 1250,
    price: "850,000",
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    category: "GlobalX Dining"
  },
  {
    id: '2',
    name: "Jumbo Seafood Vietnam",
    location: "Trần Hưng Đạo, Quận 1",
    rating: 4.9,
    reviews: 3100,
    price: "1,200,000",
    imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    category: "GlobalX Dining"
  },
  {
    id: '3',
    name: "Marina Club - Vung Tau",
    location: "Hạ Long, Vũng Tàu",
    rating: 4.7,
    reviews: 980,
    price: "650,000",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    category: "Beach Club"
  },
  {
    id: '4',
    name: "The Dome - Dining & Lounge",
    location: "NovaWorld Ho Tram",
    rating: 4.9,
    reviews: 540,
    price: "1,500,000",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    category: "Fine Dining"
  },
  {
    id: '5',
    name: "Centara Mirage Resort Mui Ne",
    location: "NovaWorld Phan Thiet",
    rating: 4.9,
    reviews: 2450,
    price: "3,800,000",
    imageUrl: "https://images.unsplash.com/photo-1582610116397-edb318620fba?q=80&w=800&auto=format&fit=crop",
    category: "Resort"
  }
];

export const MOCK_USER_LISTS: UserList[] = [
  {
    id: 'list1',
    title: "Food Tour: Tinh hoa ẩm thực GlobalX tại Sài Gòn",
    itemCount: 8,
    updatedAt: "T12 2025",
    creator: {
      name: "saigon_epicure",
      avatar: "https://i.pravatar.cc/150?u=epic"
    },
    places: [MOCK_PLACES[0], MOCK_PLACES[1]]
  },
  {
    id: 'list2',
    title: "Weekend Getaway: NovaWorld Ho Tram & The Dome",
    itemCount: 5,
    updatedAt: "T11 2025",
    creator: {
      name: "lifestyle_vn",
      avatar: "https://i.pravatar.cc/150?u=life"
    },
    places: [MOCK_PLACES[3], MOCK_PLACES[4]]
  }
];

export const MOCK_PASSES: NovaPass[] = [
  {
    id: 'p1',
    name: "GlobalX Epicurean Pass",
    location: "Hệ thống Dining toàn quốc",
    price: 1290000,
    originalPrice: 2500000,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    benefits: ["Dynasty House", "Jumbo Seafood", "Dragon Hotpot", "Marina Club", "Crystal Jade"]
  },
  {
    id: 'p2',
    name: "NovaWorld Discovery Pass",
    location: "Phan Thiết & Hồ Tràm",
    price: 1590000,
    originalPrice: 3200000,
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=800&auto=format&fit=crop",
    benefits: ["Centara Mirage", "Circus Land", "Wonderland Water Park", "GlobalX Dining Voucher"]
  }
];
