
import { Place, UserList, NovaPass } from './types';

export const MOCK_PLACES: Place[] = [
  {
    id: '1',
    name: "Centara Mirage Resort Mui Ne",
    location: "Phan Thiết",
    rating: 4.9,
    reviews: 1250,
    price: "3,500,000",
    imageUrl: "https://images.unsplash.com/photo-1582610116397-edb318620fba?q=80&w=800&auto=format&fit=crop",
    category: "Resort"
  },
  {
    id: '2',
    name: "The Deck Saigon - Fine Dining",
    location: "TP. Hồ Chí Minh",
    rating: 4.7,
    reviews: 840,
    price: "1,200,000",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    category: "Dining"
  },
  {
    id: '3',
    name: "InterContinental Phu Quoc Long Beach",
    location: "Phú Quốc",
    rating: 4.9,
    reviews: 2100,
    price: "5,800,000",
    imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop",
    category: "Resort"
  }
];

export const MOCK_USER_LISTS: UserList[] = [
  {
    id: 'list1',
    title: "Top 10 quán Brunch sang chảnh tại Quận 1",
    itemCount: 10,
    updatedAt: "T8 2025",
    creator: {
      name: "thanh_hang_travel",
      avatar: "https://i.pravatar.cc/150?u=hang"
    },
    places: [MOCK_PLACES[1]]
  },
  {
    id: 'list2',
    title: "Lịch trình 3N2Đ săn hoàng hôn Phú Quốc",
    itemCount: 8,
    updatedAt: "T7 2025",
    creator: {
      name: "minh_khoa_vlog",
      avatar: "https://i.pravatar.cc/150?u=khoa"
    },
    places: [MOCK_PLACES[2]]
  }
];

export const MOCK_PASSES: NovaPass[] = [
  {
    id: 'p1',
    name: "Phan Thiet Flexi Pass",
    location: "Mũi Né - Phan Thiết",
    price: 1290000,
    originalPrice: 2500000,
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=800&auto=format&fit=crop",
    benefits: ["Nghỉ dưỡng tại Centara", "Ăn tối hải sản bờ biển", "Xe Jeep tham quan Bàu Trắng", "Trượt cát"]
  }
];
