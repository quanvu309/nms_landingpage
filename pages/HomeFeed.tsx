
import React from 'react';
/* Added Layers to the imports from lucide-react */
import { Search, MapPin, Star, MoreHorizontal, UserPlus, Heart, MessageCircle, Share2, Plus, Layers } from 'lucide-react';
import { MOCK_PLACES, MOCK_USER_LISTS } from '../constants';

const HomeFeed: React.FC = () => {
  return (
    <div className="animate-fadeIn pb-10 bg-[#FCFCFA]">
      {/* Header Search - Minimalist */}
      <div className="p-6 bg-[#FCFCFA] sticky top-0 z-40 border-b border-black/5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
          <input 
            type="text" 
            placeholder="Khám phá NovaWorld, NovaDreams..." 
            className="w-full bg-white border border-black/5 rounded-2xl py-4 pl-12 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/10 shadow-sm"
          />
        </div>
      </div>

      {/* Tabs - Understated */}
      <div className="flex px-6 pt-6 pb-2 gap-10">
        <button className="pb-3 text-[10px] font-black uppercase tracking-widest text-gray-900 border-b-2 border-emerald-600">Dành cho bạn</button>
        <button className="pb-3 text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-gray-500 transition-colors">Đang theo dõi</button>
        <button className="pb-3 text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-gray-500 transition-colors">Nova+ Feed</button>
      </div>

      {/* Growth Hack: Community Connection */}
      <div className="px-6 py-6">
        <div className="bg-[#1A1A1A] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-3xl">
          <div className="relative z-10">
            <h3 className="text-xl font-serif italic mb-1">Nova Community</h3>
            <p className="text-emerald-400 text-[8px] font-black uppercase tracking-[0.3em] mb-8">Kết nối & Tích lũy NPoint</p>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex-shrink-0 bg-white/5 backdrop-blur-xl rounded-2xl p-4 w-36 border border-white/10 flex flex-col items-center">
                  <img src={`https://i.pravatar.cc/100?u=nova_u${i}`} className="w-14 h-14 rounded-full border-2 border-emerald-500/30 shadow-2xl mb-3 object-cover" alt=""/>
                  <p className="text-[9px] font-bold truncate w-full text-center opacity-80">member_{i}502</p>
                  <button className="mt-4 bg-white text-black text-[8px] font-black uppercase tracking-widest px-4 py-2 rounded-xl w-full hover:bg-emerald-500 hover:text-white transition-all">Follow</button>
                </div>
              ))}
              <div className="flex-shrink-0 bg-white/5 rounded-2xl p-4 w-20 border border-dashed border-white/10 flex flex-col items-center justify-center opacity-40">
                 <Plus className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>

      {/* Main Feed: UGC Artistry */}
      <div className="px-6 space-y-12 py-6">
        {MOCK_USER_LISTS.map(list => (
          <div key={list.id} className="group">
            <div className="flex items-center justify-between mb-5">
               <div className="flex items-center gap-4">
                  <img src={list.creator.avatar} className="w-11 h-11 rounded-full border border-black/5 shadow-sm object-cover" alt=""/>
                  <div>
                     <p className="text-[10px] font-black text-gray-900 uppercase tracking-tight">{list.creator.name}</p>
                     <p className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">Đăng tại {list.updatedAt}</p>
                  </div>
               </div>
               <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-300 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
               </button>
            </div>
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-black/5 transition-all duration-700 hover:shadow-emerald-500/5">
               <div className="relative h-72 overflow-hidden">
                  <img src={list.places[0].imageUrl} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt=""/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                     <h3 className="text-white font-serif italic text-3xl leading-tight mb-3">{list.title}</h3>
                     <div className="flex items-center gap-6 text-white/50 text-[9px] font-black uppercase tracking-[0.2em]">
                        <span className="flex items-center gap-2"><Layers className="w-3.5 h-3.5"/> {list.itemCount} Địa điểm</span>
                        <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5"/> Southern Vietnam</span>
                     </div>
                  </div>
               </div>
               <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-8">
                     <button className="flex items-center gap-2 text-gray-400 hover:text-rose-500 transition-colors">
                        <Heart className="w-5 h-5 stroke-[1.5px]" />
                        <span className="text-[10px] font-bold tracking-tight">1.8k</span>
                     </button>
                     <button className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors">
                        <MessageCircle className="w-5 h-5 stroke-[1.5px]" />
                        <span className="text-[10px] font-bold tracking-tight">120</span>
                     </button>
                     <button className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors">
                        <Share2 className="w-5 h-5 stroke-[1.5px]" />
                     </button>
                  </div>
                  <button className="bg-[#1A1A1A] text-white text-[9px] font-black uppercase tracking-widest px-8 py-3 rounded-2xl shadow-xl hover:bg-emerald-800 transition-all">Lưu Trip</button>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Editor's Pick: Horizontal Scroll */}
      <div className="px-6 py-12">
        <div className="flex items-end justify-between mb-10 border-l-2 border-emerald-600 pl-4">
           <div>
              <h3 className="text-xl font-black tracking-tighter text-gray-900 uppercase">Editor's Pick</h3>
              <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mt-1">Gợi ý từ Nova Lifestyle</p>
           </div>
           <button className="text-[10px] font-black text-emerald-600 uppercase tracking-widest border-b border-emerald-600 pb-0.5">Tất cả</button>
        </div>
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-6">
           {MOCK_PLACES.map(place => (
             <div key={place.id} className="flex-shrink-0 w-64 group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-5 shadow-xl border border-black/5">
                   <img src={place.imageUrl} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt=""/>
                   <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span className="text-[10px] font-black text-gray-900">{place.rating}</span>
                   </div>
                   <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-[#1A1A1A] text-white text-[8px] font-black rounded-lg uppercase tracking-widest">{place.category}</span>
                   </div>
                </div>
                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1 group-hover:text-emerald-700 transition-colors">{place.name}</h4>
                <div className="flex items-center justify-between">
                   <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1"><MapPin className="w-3 h-3"/> {place.location}</span>
                   <span className="text-[10px] font-black text-emerald-700 tracking-tight">₫{place.price}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
