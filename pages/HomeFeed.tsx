
import React from 'react';
import { Search, MapPin, Star, MoreHorizontal, UserPlus, Heart, MessageCircle, Share2, Plus, Layers, Utensils, Flame } from 'lucide-react';
import { MOCK_PLACES, MOCK_USER_LISTS } from '../constants';

const HomeFeed: React.FC = () => {
  return (
    <div className="animate-fadeIn pb-10 bg-[#FCFCFA]">
      {/* Header Search */}
      <div className="p-6 bg-[#FCFCFA] sticky top-0 z-40 border-b border-black/5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
          <input 
            type="text" 
            placeholder="Tìm món ngon GlobalX, NovaWorld..." 
            className="w-full bg-white border border-black/5 rounded-2xl py-4 pl-12 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/10 shadow-sm"
          />
        </div>
      </div>

      {/* GlobalX Featured Product - Promotional Banner */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#333] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
           <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-[8px] font-black uppercase tracking-widest rounded-full mb-6">Hot Promotion</span>
              <h3 className="text-2xl font-serif italic mb-2">GlobalX Flavor Week</h3>
              <p className="text-white/50 text-[10px] font-medium max-w-[200px] mb-8">Ưu đãi 30% cho thực đơn trà chiều tại Dynasty House và lẩu tại Dragon Hotpot.</p>
              <button className="bg-white text-black text-[9px] font-black uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-xl hover:bg-emerald-500 hover:text-white transition-all">Săn ngay</button>
           </div>
           <Utensils className="absolute -bottom-6 -right-6 w-48 h-48 text-white/5 rotate-12" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-6 pt-6 pb-2 gap-10">
        <button className="pb-3 text-[10px] font-black uppercase tracking-widest text-gray-900 border-b-2 border-emerald-600">Khám phá</button>
        <button className="pb-3 text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-gray-500 transition-colors">GlobalX+ Feed</button>
        <button className="pb-3 text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-gray-500 transition-colors">NovaWorld</button>
      </div>

      {/* Horizontal Scroll: Diverse Brands */}
      <div className="px-6 py-6">
         <div className="flex items-center justify-between mb-8">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Hương vị nổi bật</h3>
            <Flame className="w-4 h-4 text-orange-500" />
         </div>
         <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
            {MOCK_PLACES.map(place => (
               <div key={place.id} className="flex-shrink-0 w-48 group">
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-4 shadow-lg">
                     <img src={place.imageUrl} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="" />
                     <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-lg">
                        <span className="text-[8px] font-black text-gray-900">★ {place.rating}</span>
                     </div>
                  </div>
                  <h4 className="text-[10px] font-bold text-gray-900 truncate">{place.name}</h4>
                  <p className="text-[8px] text-emerald-600 font-black uppercase tracking-widest mt-1">{place.category}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Main Social Feed (Retained UGC) */}
      <div className="px-6 space-y-12 py-6">
        {MOCK_USER_LISTS.map(list => (
          <div key={list.id} className="group">
            <div className="flex items-center justify-between mb-5">
               <div className="flex items-center gap-4">
                  <img src={list.creator.avatar} className="w-11 h-11 rounded-full border border-black/5 shadow-sm object-cover" alt=""/>
                  <div>
                     <p className="text-[10px] font-black text-gray-900 uppercase tracking-tight">{list.creator.name}</p>
                     <p className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">Gợi ý từ cộng đồng</p>
                  </div>
               </div>
               <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-300 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
               </button>
            </div>
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-black/5 transition-all duration-700">
               <div className="relative h-64 overflow-hidden">
                  <img src={list.places[0].imageUrl} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" alt=""/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                     <h3 className="text-white font-serif italic text-2xl leading-tight mb-3">{list.title}</h3>
                     <div className="flex items-center gap-6 text-white/50 text-[9px] font-black uppercase tracking-[0.2em]">
                        <span className="flex items-center gap-2"><Layers className="w-3.5 h-3.5"/> {list.itemCount} Địa điểm</span>
                        <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5"/> Southern VN</span>
                     </div>
                  </div>
               </div>
               <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-8">
                     <button className="flex items-center gap-2 text-gray-400 hover:text-rose-500 transition-colors">
                        <Heart className="w-5 h-5 stroke-[1.5px]" />
                        <span className="text-[10px] font-bold tracking-tight">1.2k</span>
                     </button>
                     <button className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors">
                        <MessageCircle className="w-5 h-5 stroke-[1.5px]" />
                        <span className="text-[10px] font-bold tracking-tight">85</span>
                     </button>
                  </div>
                  <button className="bg-[#1A1A1A] text-white text-[9px] font-black uppercase tracking-widest px-8 py-3 rounded-2xl shadow-xl hover:bg-emerald-800 transition-all">Xem Trip</button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;
