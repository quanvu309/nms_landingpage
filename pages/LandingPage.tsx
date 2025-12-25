
import React from 'react';
import { 
  ArrowRight, 
  Map, 
  Sparkles, 
  Heart, 
  Layers, 
  Zap, 
  Smartphone,
  ChevronRight,
  Globe
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen font-['Inter'] text-[#1A1A1A] selection:bg-[#E5E7EB]">
      {/* Navigation - Minimalist & Glassmorphism */}
      <nav className="fixed top-0 inset-x-0 z-[100] px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-serif italic text-lg">N</div>
          <span className="text-sm font-bold tracking-tighter uppercase">Nova Membership</span>
        </div>
        <div className="hidden md:flex items-center gap-10 bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-sm">
          <a href="#discovery" className="text-[10px] font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors">Cộng đồng</a>
          <a href="#planning" className="text-[10px] font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors">Công cụ thiết kế</a>
          <a href="#novapass" className="text-[10px] font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors">Đặc quyền Pass</a>
        </div>
        <button 
          onClick={onGetStarted}
          className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-800 transition-all active:scale-95 shadow-xl shadow-black/10"
        >
          Trải nghiệm ngay
        </button>
      </nav>

      {/* Hero Section - High Artistry */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-10 animate-fade-in">
            TÂM ĐIỂM <br/>
            <span className="italic font-serif font-light text-emerald-800">TRẢI NGHIỆM</span> <br/>
            MIỀN NAM.
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-medium leading-relaxed mb-12">
            Hệ sinh thái Lifestyle tích hợp, giúp bạn đi từ khát khao khám phá đến việc hiện thực hóa mọi hành trình chỉ trong một nền tảng duy nhất.
          </p>
          <button 
            onClick={onGetStarted}
            className="group relative inline-flex items-center gap-4 bg-[#1A1A1A] text-white pl-8 pr-3 py-3 rounded-full overflow-hidden transition-all hover:pr-8"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Khám phá ngay</span>
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* Ambient background visuals */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Pillar 1: Top of mind Discovery (The UGC Soul) */}
      <section id="discovery" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600">Pillar 01 / Discovery</span>
            <h2 className="text-5xl font-black tracking-tighter leading-tight">
              Cộng đồng chia sẻ <br/> 
              <span className="italic font-serif font-light">Những giá trị thật.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm">
              Tạm biệt những review dàn dựng. Nova Membership là nơi những tín đồ lifestyle thực thụ chia sẻ danh sách các điểm đến "Must-try" tại miền Nam. Từ bài viết, bạn có thể lưu ngay lịch trình tương tự chỉ với 1 chạm.
            </p>
            <div className="flex gap-4">
              <div className="bg-[#F8F8F6] p-6 rounded-[2rem] flex-1 border border-gray-100">
                <p className="text-2xl font-black mb-1">UGC</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nguồn cảm hứng vô tận</p>
              </div>
              <div className="bg-[#F8F8F6] p-6 rounded-[2rem] flex-1 border border-gray-100">
                <p className="text-2xl font-black mb-1">Viral</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Vòng lặp trải nghiệm</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1539367628448-4bc5c9d170c8?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel Community" />
             </div>
             {/* Floating UI Elements */}
             <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-gray-50 max-w-[280px]">
                <div className="flex items-center gap-3 mb-4">
                   <img src="https://i.pravatar.cc/100?u=u1" className="w-8 h-8 rounded-full" alt=""/>
                   <span className="text-[10px] font-bold">@thanhhang_traveler</span>
                </div>
                <h4 className="text-xs font-bold leading-tight mb-2">"Lịch trình 2 ngày 'sống chậm' tại Vũng Tàu cho cặp đôi"</h4>
                <div className="flex items-center justify-between">
                   <div className="flex -space-x-1">
                      {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-gray-100 border border-white" />)}
                   </div>
                   <button className="text-[10px] font-black text-emerald-600 flex items-center gap-1">Lưu lịch trình <ChevronRight className="w-3 h-3" /></button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Top of mind Planning (The Tool) */}
      <section id="planning" className="py-32 px-6 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-20 items-center">
          <div className="md:w-1/2 space-y-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600">Pillar 02 / Planning</span>
            <h2 className="text-5xl font-black tracking-tighter leading-tight">
              Thiết kế hành trình, <br/> 
              <span className="italic font-serif font-light">Gói trọn điểm đến.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm">
              Chúng tôi tích hợp công cụ lập kế hoạch chuyên sâu từ Wanderlog: Quản lý ngân sách, sơ đồ map thông minh và lưu trữ booking. Không cần mở 10 tabs để so sánh, tất cả đều sẵn sàng cho chuyến đi hoàn hảo.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Booking OTA Tích hợp', icon: <Globe className="w-4 h-4" /> },
                { label: 'Lịch trình cá nhân hóa theo Map', icon: <Map className="w-4 h-4" /> },
                { label: 'Quản lý điểm NPoint từ đầu hành trình', icon: <Sparkles className="w-4 h-4" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                   <div className="text-emerald-600">{item.icon}</div>
                   <span className="text-xs font-bold text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full">
             <div className="bg-white rounded-[3.5rem] p-10 shadow-3xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative space-y-8">
                   <div className="flex justify-between items-center">
                      <h5 className="font-serif italic text-2xl">Trip to Phan Thiet</h5>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">Planned</span>
                   </div>
                   <div className="space-y-6">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-start gap-4 pb-6 border-b border-gray-50 last:border-0 opacity-80 group-hover:opacity-100 transition-opacity">
                           <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5" />
                           <div className="flex-1">
                              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Day 0{i}</p>
                              <p className="text-xs font-bold text-gray-800 mt-1">Trải nghiệm Xe Jeep & Check-in Centara Mirage</p>
                              <div className="flex gap-2 mt-2">
                                 <span className="px-2 py-1 bg-gray-50 text-[8px] font-bold rounded-md">Activity</span>
                                 <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[8px] font-bold rounded-md">Hotel Booked</span>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Top of mind Value & Flexibility (The NovaPass) */}
      <section id="novapass" className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 mb-6 block">Pillar 03 / Value</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
            NovaPass: Tận hưởng <br className="hidden md:block" /> 
            <span className="italic font-serif font-light">Theo cách của riêng bạn.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Tạm biệt những gói combo gò bó. NovaPass cho phép bạn mua trọn gói trải nghiệm nhưng hoàn toàn linh hoạt lựa chọn dịch vụ từ hàng trăm thương hiệu F&B, Tour, Spa đẳng cấp nhất miền Nam.
          </p>
        </div>

        {/* The Beautiful NovaPass Showcase */}
        <div className="max-w-4xl mx-auto relative px-6">
          <div className="group relative aspect-[16/9] w-full rounded-[2.5rem] bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#0D0D0D] p-12 overflow-hidden shadow-3xl flex flex-col justify-between items-start text-white">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
            <div className="relative z-10 w-full flex justify-between items-start">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <span className="font-serif italic font-light text-xl">N</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase opacity-60">Nova Membership</h4>
                    <p className="text-lg font-serif italic">Southern Flexi Pass</p>
                  </div>
               </div>
               <div className="text-right">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-1">Status</p>
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Premium Active</p>
               </div>
            </div>

            <div className="relative z-10 w-full flex justify-between items-end">
               <div className="space-y-4">
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-emerald-500" />
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">Choose your journey</p>
               </div>
               <div className="text-right">
                  <p className="text-4xl font-black">₫1.290k</p>
                  <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Value up to ₫2.500k</p>
               </div>
            </div>
            
            {/* Animated grain effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </div>
          
          {/* Brand Scroll */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {['The Fork', 'Wanderlog', 'Centara', 'The Deck', 'Intercon', 'Jeep Tour'].map(brand => (
               <span key={brand} className="text-[10px] font-bold uppercase tracking-[0.3em]">{brand}</span>
             ))}
          </div>
        </div>
      </section>

      {/* CTA: Emotional & Clear */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            THẾ GIỚI CỦA <br/>
            <span className="italic font-serif font-light text-emerald-800">NHỮNG CHUYẾN ĐI.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={onGetStarted}
              className="bg-[#1A1A1A] text-white px-12 py-5 rounded-full font-bold text-sm shadow-2xl hover:scale-105 transition-all"
            >
              Bắt đầu hành trình của bạn
            </button>
            <div className="flex items-center gap-4 text-gray-400">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=u${i}`} className="w-10 h-10 rounded-full border-4 border-[#FCFCFA] shadow-sm" alt=""/>)}
               </div>
               <span className="text-xs font-bold tracking-tight text-gray-900">+12,000 thành viên</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-gray-100 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
         <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-serif italic text-xs">N</div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Nova Membership</span>
         </div>
         <div className="flex gap-10">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Privacy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Terms</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Support</a>
         </div>
         <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">© 2025 Lifestyle Ecosystem</p>
      </footer>
    </div>
  );
};

export default LandingPage;
