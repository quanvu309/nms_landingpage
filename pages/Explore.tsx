
import React, { useState } from 'react';
import { 
  Search, Map, Calendar, Plane, Building2, Car, 
  MoreHorizontal, ChevronRight, PlayCircle, Sparkles, 
  Compass, Heart, Star, MapPin, Camera, Coffee,
  Umbrella, Mountain, Landmark
} from 'lucide-react';

const Explore: React.FC = () => {
  const [activeView, setActiveView] = useState<'discover' | 'plan'>('discover');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { icon: <Umbrella />, label: 'Biển đảo', color: 'bg-cyan-50 text-cyan-600' },
    { icon: <Mountain />, label: 'Leo núi', color: 'bg-emerald-50 text-emerald-600' },
    { icon: <Landmark />, label: 'Di tích', color: 'bg-amber-50 text-amber-600' },
    { icon: <Coffee />, label: 'Ẩm thực', color: 'bg-orange-50 text-orange-600' },
    { icon: <Camera />, label: 'Sống ảo', color: 'bg-purple-50 text-purple-600' },
    { icon: <Building2 />, label: 'Khách sạn', color: 'bg-blue-50 text-blue-600' },
  ];

  const trendingDestinations = [
    { id: 1, name: 'Phú Quốc', image: 'https://picsum.photos/seed/phuquoc/400/500', tags: ['Biển', 'Nghỉ dưỡng'], rating: 4.9 },
    { id: 2, name: 'Đà Lạt', image: 'https://picsum.photos/seed/dalat/400/500', tags: ['Lãng mạn', 'Núi'], rating: 4.8 },
    { id: 3, name: 'Hà Giang', image: 'https://picsum.photos/seed/hagiang/400/500', tags: ['Phượt', 'Văn hóa'], rating: 4.7 },
  ];

  return (
    <div className="animate-fadeIn min-h-full bg-white">
      {/* Search & Toggle Header */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-gray-100">
        <div className="p-4 pb-0">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Bạn muốn đi đâu chơi?" 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>
        
        <div className="flex px-4 pb-2">
          <button 
            onClick={() => setActiveView('discover')}
            className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${activeView === 'discover' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400'}`}
          >
            <Compass className="w-4 h-4" /> Khám phá
          </button>
          <button 
            onClick={() => setActiveView('plan')}
            className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${activeView === 'plan' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400'}`}
          >
            <Calendar className="w-4 h-4" /> Lịch trình
          </button>
        </div>
      </div>

      {activeView === 'discover' ? (
        <div className="pb-10">
          {/* Hero Banner */}
          <div className="p-4">
            <div className="relative rounded-[2rem] overflow-hidden h-72 shadow-xl group">
              <img 
                src="https://picsum.photos/seed/travel-main/800/600" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" 
                alt="Banner" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">Mới nhất</span>
                  <span className="text-white/80 text-[10px] font-medium flex items-center gap-1">
                    <PlayCircle className="w-3 h-3" /> 2.4k views
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white leading-tight mb-2">Hành trình 48 giờ <br/>tại Hội An cổ kính</h2>
                <p className="text-white/60 text-xs mb-4 line-clamp-2">Khám phá những góc nhỏ ít người biết và thưởng thức ẩm thực đường phố đặc sắc nhất tại di sản văn hóa thế giới.</p>
                <button className="bg-white text-gray-900 text-xs font-bold w-full py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                  Xem ngay bài viết
                </button>
              </div>
            </div>
          </div>

          {/* Icon Categories */}
          <div className="px-4 py-2">
            <h3 className="text-sm font-bold text-gray-800 mb-4">Tìm theo sở thích</h3>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {categories.map((cat, i) => (
                <button key={i} className="flex-shrink-0 flex flex-col items-center gap-2 w-16">
                  <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center shadow-sm border border-black/5`}>
                    {React.cloneElement(cat.icon as React.ReactElement, { className: 'w-6 h-6' })}
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 whitespace-nowrap">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Trending Destinations */}
          <section className="mt-6 px-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 text-lg">Đang thịnh hành</h3>
              <button className="text-xs text-blue-600 font-bold">Xem tất cả</button>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
              {trendingDestinations.map(dest => (
                <div key={dest.id} className="flex-shrink-0 w-48 relative group">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-3 shadow-md">
                    <img src={dest.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={dest.name} />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white">
                      <Heart className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-3 left-3 flex gap-1">
                      {dest.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-black/40 backdrop-blur-sm text-white text-[8px] font-bold rounded-full border border-white/10 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800 flex justify-between items-center">
                    {dest.name}
                    <span className="flex items-center gap-1 text-[10px] text-amber-500">
                      <Star className="w-3 h-3 fill-amber-500" /> {dest.rating}
                    </span>
                  </h4>
                  <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" /> Việt Nam
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Guided Tours Section */}
          <section className="mt-4 p-4">
            <div className="bg-gray-900 rounded-[2rem] p-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
               <div className="relative z-10">
                  <h3 className="text-white font-bold text-lg mb-2">Tour hướng dẫn bởi địa phương</h3>
                  <p className="text-white/50 text-xs mb-6">Trải nghiệm chân thực nhất qua con mắt của những người dân bản địa.</p>
                  <div className="space-y-4">
                    {[1, 2].map(i => (
                      <div key={i} className="flex gap-4 items-center bg-white/5 border border-white/10 p-3 rounded-2xl">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-xl object-cover" alt="" />
                        <div className="flex-1">
                          <p className="text-white font-bold text-xs">Cùng Minh đi chợ nổi Cái Răng</p>
                          <p className="text-white/40 text-[10px]">Cần Thơ • 4.5 giờ</p>
                        </div>
                        <div className="text-right">
                          <p className="text-blue-400 font-bold text-xs">₫ 450k</p>
                          <p className="text-white/30 text-[8px]">/người</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="p-4 pb-10 space-y-6">
          {/* AI Assistance Promo */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2rem] p-6 text-white relative overflow-hidden shadow-xl shadow-blue-500/20">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Nova Assistant</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Lập kế hoạch với AI</h3>
              <p className="text-white/60 text-xs mb-6">Gợi ý địa điểm, đặt vé và sắp xếp thời gian tự động chỉ với một yêu cầu.</p>
              <button className="bg-white text-blue-700 font-bold px-6 py-3 rounded-2xl text-xs w-full shadow-lg">Bắt đầu ngay</button>
            </div>
          </div>

          {/* Active Trip Timeline */}
          <section>
            <div className="flex justify-between items-center mb-4">
               <h3 className="font-bold text-gray-800">Chuyến đi sắp tới</h3>
               <button className="text-xs text-blue-600 font-bold">Chỉnh sửa</button>
            </div>
            
            <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
              <div className="relative h-44">
                <img src="https://picsum.photos/seed/travel-plan/600/400" className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-black/40 p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">3 Ngày 2 Đêm</span>
                    <button className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/20 text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-2xl mb-1">Hành trình Phan Thiết</h4>
                    <p className="text-white/70 text-[10px] flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> 20 thg 8 - 22 thg 8, 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=group${i}`} className="w-7 h-7 rounded-full border-2 border-white" alt="" />
                    ))}
                    <div className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-gray-400">+2</div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tiến độ</p>
                    <p className="text-xs font-bold text-gray-800">4 / 12 Địa điểm</p>
                  </div>
                </div>

                {/* Vertical Timeline Preview */}
                <div className="space-y-6 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-blue-100">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                      <Plane className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-[10px] font-bold text-blue-600">08:00 AM</p>
                    <h5 className="text-xs font-bold text-gray-800">Bay đến Cam Ranh (VJ622)</h5>
                    <p className="text-[10px] text-gray-400 mt-1">Đã xác nhận • Ghế 12A, 12B</p>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-gray-200 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                      <Car className="w-3 h-3 text-gray-400" />
                    </div>
                    <p className="text-[10px] font-bold text-gray-400">10:30 AM</p>
                    <h5 className="text-xs font-bold text-gray-500">Đón xe về Resort Centara</h5>
                    <p className="text-[10px] text-blue-600 font-bold mt-1 flex items-center gap-1">
                       Cần đặt ngay <ChevronRight className="w-3 h-3" />
                    </p>
                  </div>
                </div>

                <button className="w-full mt-8 bg-gray-50 border border-gray-100 text-gray-600 font-bold py-3 rounded-2xl text-xs flex items-center justify-center gap-2">
                  Xem chi tiết lịch trình đầy đủ
                </button>
              </div>
            </div>
          </section>

          {/* Drafts Section */}
          <section>
            <h3 className="font-bold text-gray-800 mb-4">Bản nháp & Ý tưởng</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-dashed border-gray-200 rounded-3xl p-4 flex flex-col items-center justify-center gap-2 h-32">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                  <MoreHorizontal className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-gray-400">Tạo bản nháp mới</span>
              </div>
              <div className="bg-white border border-gray-100 rounded-3xl p-3 shadow-sm h-32 relative overflow-hidden">
                <img src="https://picsum.photos/seed/draft/200/200" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <h5 className="text-xs font-bold text-gray-800">Hè Phú Quốc 2026</h5>
                  <p className="text-[8px] text-gray-400">8 Địa điểm đã lưu</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Explore;
