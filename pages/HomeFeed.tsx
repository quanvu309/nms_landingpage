
import React from 'react';
import { Search, MapPin, Star, MoreHorizontal, UserPlus, Heart, MessageCircle, Share2, Plus } from 'lucide-react';
import { MOCK_PLACES, MOCK_USER_LISTS } from '../constants';

const HomeFeed: React.FC = () => {
  return (
    <div className="animate-fadeIn pb-10 bg-white">
      {/* Header Search */}
      <div className="p-4 bg-white sticky top-[72px] z-40 border-b border-gray-50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Tìm địa điểm ăn uống, nghỉ dưỡng..." 
            className="w-full bg-gray-50 border border-gray-100 rounded-[1.5rem] py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-4 pt-4 pb-2 bg-white gap-6">
        <button className="pb-2 text-sm font-bold text-gray-900 border-b-2 border-emerald-600">Dành cho bạn</button>
        <button className="pb-2 text-sm font-bold text-gray-400">Đang theo dõi <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full ml-0.5"></span></button>
        <button className="pb-2 text-sm font-bold text-gray-400">Mới nhất</button>
      </div>

      {/* Growth Hack: Find Friends */}
      <div className="p-4">
        <div className="bg-emerald-600 rounded-[2rem] p-6 text-white relative overflow-hidden shadow-xl shadow-emerald-600/20">
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-1">Kết nối bạn bè</h3>
            <p className="text-emerald-100 text-[10px] mb-6 opacity-80 uppercase tracking-widest">Tương tác để nhận NPoint mỗi ngày</p>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex-shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-3 w-32 border border-white/20 flex flex-col items-center">
                  <img src={`https://i.pravatar.cc/100?u=f${i}`} className="w-12 h-12 rounded-full border-2 border-emerald-400 shadow-lg mb-2" alt=""/>
                  <p className="text-[10px] font-bold truncate w-full text-center">user_traveler_{i}</p>
                  <button className="mt-3 bg-white text-emerald-700 text-[9px] font-bold px-3 py-1.5 rounded-lg w-full">Theo dõi</button>
                </div>
              ))}
              <div className="flex-shrink-0 bg-white/5 rounded-2xl p-3 w-16 border border-dashed border-white/20 flex flex-col items-center justify-center">
                 <Plus className="w-5 h-5 text-white/40" />
              </div>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Feed Content: UGC Lists */}
      <div className="p-4 space-y-8">
        {MOCK_USER_LISTS.map(list => (
          <div key={list.id} className="group">
            <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-3">
                  <img src={list.creator.avatar} className="w-10 h-10 rounded-full border-2 border-gray-50 shadow-sm" alt=""/>
                  <div>
                     <p className="text-xs font-bold text-gray-900">{list.creator.name} <span className="font-normal text-gray-400 ml-1">đã chia sẻ</span></p>
                     <p className="text-[10px] text-gray-400">{list.updatedAt}</p>
                  </div>
               </div>
               <button className="w-8 h-8 rounded-full hover:bg-gray-50 flex items-center justify-center text-gray-400">
                  <MoreHorizontal className="w-5 h-5" />
               </button>
            </div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/5 bg-gray-50 border border-gray-100 group">
               <div className="relative h-64 overflow-hidden">
                  <img src={list.places[0].imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt=""/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                     <h3 className="text-white font-bold text-2xl leading-tight mb-2">{list.title}</h3>
                     <div className="flex items-center gap-4 text-white/70 text-[10px] font-bold uppercase tracking-widest">
                        <span>{list.itemCount} Địa điểm</span>
                        <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> Miền Nam</span>
                     </div>
                  </div>
               </div>
               <div className="p-5 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-6">
                     <button className="flex items-center gap-1.5 text-gray-400 hover:text-rose-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="text-[11px] font-bold">1.2k</span>
                     </button>
                     <button className="flex items-center gap-1.5 text-gray-400 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-[11px] font-bold">45</span>
                     </button>
                     <button className="flex items-center gap-1.5 text-gray-400 hover:text-emerald-500 transition-colors">
                        <Share2 className="w-5 h-5" />
                     </button>
                  </div>
                  <button className="bg-gray-900 text-white text-[10px] font-bold px-6 py-2.5 rounded-full shadow-lg shadow-black/10 hover:scale-105 transition-all">Lưu lịch trình</button>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation Grid */}
      <div className="px-4 py-4">
        <h3 className="text-sm font-bold text-gray-900 mb-6 flex items-center justify-between">
           Gợi ý cho bạn hôm nay
           <button className="text-[10px] text-emerald-600 uppercase tracking-widest font-bold">Xem thêm</button>
        </h3>
        <div className="grid grid-cols-2 gap-4">
           {MOCK_PLACES.map(place => (
             <div key={place.id} className="cursor-pointer group">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-3 shadow-md border border-gray-50">
                   <img src={place.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt=""/>
                   <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/80 backdrop-blur-md rounded-full text-[9px] font-bold text-gray-900">
                      <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" /> {place.rating}
                   </div>
                   <div className="absolute bottom-3 left-3 flex gap-1">
                      <span className="px-2 py-0.5 bg-emerald-600 text-white text-[7px] font-bold rounded-full uppercase">{place.category}</span>
                   </div>
                </div>
                <h4 className="text-xs font-bold text-gray-900 line-clamp-1 leading-snug">{place.name}</h4>
                <div className="flex items-center justify-between mt-1">
                   <span className="text-[10px] text-gray-400 flex items-center gap-0.5 font-medium"><MapPin className="w-2.5 h-2.5"/> {place.location}</span>
                   <span className="text-[10px] font-bold text-emerald-600">₫{place.price}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
