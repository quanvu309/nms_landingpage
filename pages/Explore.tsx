
import React, { useState } from 'react';
import { 
  Search, Map, Calendar, Plane, Building2, Car, 
  MoreHorizontal, ChevronRight, PlayCircle, Sparkles, 
  Compass, Heart, Star, MapPin, Camera, Coffee,
  Umbrella, Mountain, Landmark, Layers
} from 'lucide-react';

const Explore: React.FC = () => {
  const [activeView, setActiveView] = useState<'discover' | 'plan'>('discover');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    { name: 'NovaWorld Phan Thiet', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=400&auto=format&fit=crop', tags: ['Biển', 'Gia đình'], rating: 4.9 },
    { name: 'NovaWorld Ho Tram', image: 'https://images.unsplash.com/photo-1582610116397-edb318620fba?q=80&w=400&auto=format&fit=crop', tags: ['Rừng', 'Khoáng nóng'], rating: 4.8 },
    { name: 'Aqua City', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400&auto=format&fit=crop', tags: ['Sông', 'Đô thị'], rating: 4.7 },
  ];

  return (
    <div className="animate-fadeIn min-h-full bg-[#FCFCFA]">
      {/* Search & Mode Toggle */}
      <div className="sticky top-0 z-30 bg-[#FCFCFA] border-b border-black/5 p-6">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm dự án, điểm đến Nova..." 
            className="w-full bg-white border border-black/5 rounded-2xl py-4 pl-12 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/10 shadow-sm"
          />
        </div>
        
        <div className="flex p-1.5 bg-gray-100 rounded-2xl">
          <button 
            onClick={() => setActiveView('discover')}
            className={`flex-1 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-3 ${activeView === 'discover' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-400'}`}
          >
            <Compass className="w-4 h-4" /> Khám phá
          </button>
          <button 
            onClick={() => setActiveView('plan')}
            className={`flex-1 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-3 ${activeView === 'plan' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-400'}`}
          >
            <Calendar className="w-4 h-4" /> Lịch trình
          </button>
        </div>
      </div>

      {activeView === 'discover' ? (
        <div className="pb-24">
          {/* Spotlight Project */}
          <div className="p-6">
            <div className="relative rounded-[3.5rem] overflow-hidden aspect-[4/5] shadow-3xl group">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                alt="Spotlight" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-10 flex flex-col justify-end">
                <div className="space-y-4">
                  <span className="px-4 py-1.5 bg-emerald-600 text-white text-[9px] font-black rounded-full uppercase tracking-widest">Dự án trọng điểm</span>
                  <h2 className="text-4xl font-serif italic text-white leading-tight">NovaWorld <br/>Phan Thiết</h2>
                  <p className="text-white/60 text-xs font-medium max-w-[240px]">Siêu thành phố Biển - Du lịch - Sức khỏe đẳng cấp quốc tế.</p>
                  <button className="bg-white text-black text-[10px] font-black uppercase tracking-widest w-full py-5 rounded-[1.5rem] shadow-2xl active:scale-95 transition-all">Xem chi tiết hành trình</button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Filter Categories - Artistic Style */}
          <div className="px-6 py-6">
            <h3 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-8">Danh mục trải nghiệm</h3>
            <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-4">
              {[
                { label: 'NovaDreams', icon: <Sparkles />, color: 'text-emerald-600' },
                { label: 'Nova FnB', icon: <Coffee />, color: 'text-amber-600' },
                { label: 'Resorts', icon: <Building2 />, color: 'text-blue-600' },
                { label: 'Tours', icon: <Map />, color: 'text-purple-600' }
              ].map((cat, i) => (
                <button key={i} className="flex-shrink-0 flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 bg-white rounded-[1.8rem] flex items-center justify-center shadow-sm border border-black/5 group-hover:bg-emerald-50 transition-colors">
                    {React.cloneElement(cat.icon as React.ReactElement, { className: `w-6 h-6 stroke-[1.5px] ${cat.color}` })}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-black transition-colors">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Destinations Grid */}
          <section className="mt-10 px-6">
            <div className="flex justify-between items-end mb-10">
              <h3 className="font-black text-gray-900 text-xl uppercase tracking-tighter">Đang thịnh hành</h3>
              <button className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">Xem tất cả</button>
            </div>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10">
              {projects.map((proj, idx) => (
                <div key={idx} className="flex-shrink-0 w-60 group">
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-5 shadow-2xl border border-black/5">
                    <img src={proj.image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={proj.name} />
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-emerald-500 transition-colors">
                      <Heart className="w-5 h-5 stroke-[1.5px]" />
                    </button>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {proj.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[8px] font-black rounded-lg uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">{proj.name}</h4>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium mt-1">
                    <MapPin className="w-3 h-3"/> Việt Nam <span className="text-amber-500 font-black ml-auto flex items-center gap-1">★ {proj.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="p-6 pb-24 space-y-12">
          {/* Smart Tool Intro */}
          <div className="bg-[#1A1A1A] rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-3xl">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 backdrop-blur-2xl rounded-2xl flex items-center justify-center border border-white/10 mb-8">
                <Layers className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-serif italic mb-3">Lập kế hoạch đa điểm</h3>
              <p className="text-white/40 text-[10px] font-medium leading-relaxed mb-10 max-w-[240px]">Kết nối trọn vẹn từ Saigon đến Phan Thiết & Hồ Tràm chỉ với một hành trình thiết kế riêng.</p>
              <button className="bg-emerald-600 text-white font-black uppercase tracking-widest text-[9px] w-full py-5 rounded-[1.5rem] shadow-2xl shadow-emerald-600/20 active:scale-95 transition-all">Bắt đầu thiết kế</button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Active Trip Timeline - Minimalist Artistic */}
          <section>
            <div className="flex justify-between items-center mb-8 border-l-2 border-emerald-600 pl-4">
               <h3 className="font-black text-gray-900 uppercase tracking-tighter">Chuyến đi sắp tới</h3>
               <button className="text-[9px] text-gray-300 font-black uppercase tracking-widest">Lịch sử</button>
            </div>
            
            <div className="bg-white rounded-[3.5rem] border border-black/5 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 group">
              <div className="relative h-56">
                <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" />
                <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-emerald-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Active</span>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                  <div>
                    <h4 className="text-white font-serif italic text-3xl mb-1">Ho Tram Discovery</h4>
                    <p className="text-white/60 text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 opacity-40" /> 12 thg 8 - 14 thg 8, 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=g${i}`} className="w-8 h-8 rounded-full border-2 border-white shadow-xl" alt="" />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center text-[10px] font-black text-gray-300">+2</div>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Tiến độ</p>
                    <p className="text-xs font-black text-gray-900">4 / 12 Trải nghiệm</p>
                  </div>
                </div>

                <div className="space-y-10 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-emerald-100">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-6 h-6 bg-emerald-600 rounded-full border-4 border-[#FCFCFA] shadow-lg flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">09:00 AM</p>
                    <h5 className="text-xs font-bold text-gray-900 mt-1">Khởi hành từ Saigon City Center</h5>
                    <p className="text-[10px] text-gray-400 mt-1">Xe Limousine đón tại nhà</p>
                  </div>

                  <div className="relative pl-10 opacity-40">
                    <div className="absolute left-0 top-1.5 w-6 h-6 bg-gray-100 rounded-full border-4 border-[#FCFCFA] shadow-lg flex items-center justify-center">
                    </div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">01:30 PM</p>
                    <h5 className="text-xs font-bold text-gray-900 mt-1">Check-in Centara Mirage Mui Ne</h5>
                    <p className="text-[10px] text-rose-500 font-black uppercase tracking-widest mt-1 flex items-center gap-1">
                       Chưa đặt <ChevronRight className="w-3 h-3" />
                    </p>
                  </div>
                </div>

                <button className="w-full mt-12 bg-gray-50 border border-black/5 text-gray-500 font-black uppercase tracking-widest py-4 rounded-2xl text-[9px] shadow-sm active:scale-95 transition-all">Xem toàn bộ lịch trình</button>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Explore;
