
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
    category: "GlobalX Elite"
  },
  {
    id: '2',
    name: "Phố Ngon 37 - Vietnamese Street Food",
    location: "Saigon Centre, Quận 1",
    rating: 4.6,
    reviews: 2100,
    price: "250,000",
    imageUrl: "https://images.unsplash.com/photo-1567129937968-cdad8f04a236?q=80&w=800&auto=format&fit=crop",
    category: "GlobalX Casual"
  },
  {
    id: '3',
    name: "Dragon Hotpot - Authentic Taste",
    location: "Phan Xích Long, Phú Nhuận",
    rating: 4.7,
    reviews: 850,
    price: "350,000",
    imageUrl: "https://images.unsplash.com/photo-1547928576-a4a33237ce35?q=80&w=800&auto=format&fit=crop",
    category: "GlobalX Casual"
  },
  {
    id: '4',
    name: "The Dome - Fine Dining",
    location: "NovaWorld Ho Tram",
    rating: 4.9,
    reviews: 540,
    price: "1,500,000",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    category: "GlobalX Elite"
  },
  {
    id: '5',
    name: "Marina Club - Beachside Vibes",
    location: "Hạ Long, Vũng Tàu",
    rating: 4.7,
    reviews: 980,
    price: "650,000",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    category: "GlobalX Lifestyle"
  }
];

export const MOCK_USER_LISTS: UserList[] = [
  {
    id: 'list1',
    title: "GlobalX Flavors: Từ Dimsum đến Lẩu Rồng",
    itemCount: 12,
    updatedAt: "T12 2025",
    creator: {
      name: "thanh_pho_foodie",
      avatar: "https://i.pravatar.cc/150?u=tp"
    },
    places: [MOCK_PLACES[0], MOCK_PLACES[2], MOCK_PLACES[1]]
  },
  {
    id: 'list2',
    title: "Weekend Escapes tại NovaWorld",
    itemCount: 5,
    updatedAt: "T11 2025",
    creator: {
      name: "nova_explorer",
      avatar: "https://i.pravatar.cc/150?u=exp"
    },
    places: [MOCK_PLACES[3], MOCK_PLACES[4]]
  }
];

export const MOCK_PASSES: NovaPass[] = [
  {
    id: 'p1',
    name: "GlobalX Epicurean Pass",
    location: "Saigon & Cities",
    price: 1290000,
    originalPrice: 2500000,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    benefits: ["Tiêu dùng x2 giá trị", "Dynasty House", "Phố Ngon 37", "Dragon Hotpot", "Crystal Jade"]
  },
  {
    id: 'p2',
    name: "NovaWorld Coastal Pass",
    location: "Hồ Tràm & Phan Thiết",
    price: 1590000,
    originalPrice: 3200000,
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=800&auto=format&fit=crop",
    benefits: ["Centara Mirage", "Wonderland Water Park", "Marina Club Dining", "Shuttle Bus"]
  }
];
