
import React from 'react';
import { 
  ArrowRight, 
  Map, 
  Sparkles, 
  Heart, 
  Layers, 
  Utensils,
  ChevronRight,
  Star,
  Coffee,
  Globe,
  Navigation
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen font-['Inter'] text-[#1A1A1A] selection:bg-[#E5E7EB] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-[100] px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-white font-serif italic text-xl shadow-lg">N</div>
          <span className="text-xs font-black tracking-widest uppercase">Nova Membership</span>
        </div>
        <div className="hidden md:flex items-center gap-10 bg-white/60 backdrop-blur-lg px-10 py-3.5 rounded-full border border-black/5 shadow-sm">
          <a href="#gastronomy" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-700 transition-colors">GlobalX</a>
          <a href="#planning" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-700 transition-colors">Planning</a>
          <a href="#discovery" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-700 transition-colors">Community</a>
        </div>
        <button 
          onClick={onGetStarted}
          className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-900 transition-all active:scale-95 shadow-xl shadow-black/10"
        >
          Trải nghiệm
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-52 pb-40 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-800 text-[9px] font-bold uppercase tracking-[0.3em] mb-12 animate-fade-in-up">
            <Utensils className="w-3 h-3 fill-emerald-600" /> Hệ sinh thái ẩm thực GlobalX
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter mb-12">
            ĐA SẮC <br/>
            <span className="italic font-serif font-light text-emerald-900">VỊ GIÁC.</span> <br/>
            TRỌN HÀNH TRÌNH.
          </h1>
          <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-16 opacity-80">
            Từ tinh hoa ẩm thực GlobalX đến những hành trình nghỉ dưỡng bất tận tại NovaWorld. 
            Nova Membership là chìa khóa kết nối trọn vẹn phong cách sống của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={onGetStarted}
              className="group relative inline-flex items-center gap-6 bg-[#1A1A1A] text-white pl-10 pr-4 py-4 rounded-full transition-all hover:pr-10 shadow-2xl shadow-black/20"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Khám phá ngay</span>
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* GlobalX Focus - Diverse Positioning */}
      <section id="gastronomy" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 mb-6 block">The Heart of Lifestyle / GlobalX</span>
            <h2 className="text-6xl font-black tracking-tighter leading-tight">
              Ẩm thực đa dạng. <br/>
              <span className="italic font-serif font-light text-gray-400">Cho mọi khoảnh khắc.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
             {[
               { title: 'Elite Dining', brands: 'Dynasty House, Jumbo Seafood', desc: 'Tinh hoa ẩm thực quốc tế dành cho những bữa tiệc sang trọng.', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600' },
               { title: 'Casual Flavors', brands: 'Phố Ngon 37, Dragon Hotpot', desc: 'Hương vị thân quen, kết nối bạn bè và gia đình mỗi ngày.', img: 'https://images.unsplash.com/photo-1567129937968-cdad8f04a236?q=80&w=600' },
               { title: 'Beach & Lounge', brands: 'Marina Club, The Dome', desc: 'Không gian sống động, tận hưởng trọn vẹn hương vị biển cả.', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600' }
             ].map((item, i) => (
               <div key={i} className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-700">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={item.title} />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-3">{item.title}</h3>
                  <h4 className="text-xl font-bold mb-3">{item.brands}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Core Feature: Planning (Retained) */}
      <section id="planning" className="py-40 px-6 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-32 items-center">
           <div className="md:w-1/2 space-y-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600">Smart Tool / Planning</span>
              <h2 className="text-6xl font-black tracking-tighter leading-none">
                Thiết kế <br/>
                <span className="italic font-serif font-light text-gray-400">Hành trình riêng.</span>
              </h2>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                Tích hợp công cụ lập lịch trình thông minh, giúp bạn kết nối các điểm đến GlobalX và NovaWorld chỉ trong vài lần chạm.
              </p>
              <button onClick={onGetStarted} className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-widest border-b-2 border-emerald-600 pb-1">
                Bắt đầu lập lịch trình <Navigation className="w-4 h-4" />
              </button>
           </div>
           <div className="md:w-1/2 w-full">
              <div className="bg-white rounded-[4rem] p-10 shadow-3xl border border-black/5">
                 <div className="space-y-8">
                    {['Breakfast tại Phố Ngon 37', 'Check-in NovaWorld Phan Thiet', 'Dinner tại Dynasty House'].map((step, i) => (
                      <div key={i} className="flex gap-6 items-center border-b border-gray-50 pb-6 last:border-0">
                         <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xs">{i+1}</div>
                         <p className="text-xs font-bold text-gray-800">{step}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Discovery / Community Section (Retained) */}
      <section id="discovery" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 mb-6 block">Social / Discovery</span>
           <h2 className="text-7xl font-black tracking-tighter mb-20">CỘNG ĐỒNG <span className="italic font-serif font-light text-gray-300">NOVA.</span></h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-square rounded-[2rem] overflow-hidden shadow-lg hover:scale-95 transition-transform duration-500">
                   <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?q=80&w=400&auto=format&fit=crop`} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-t border-black/5">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-serif italic text-sm">N</div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Nova Membership x GlobalX</span>
            </div>
            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.4em]">© 2025 Nova Group Lifestyle. Partnered with GlobalX Gastronomy.</p>
         </div>
      </footer>
    </div>
  );
};

export default LandingPage;
