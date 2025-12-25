
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
  Globe,
  Star
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-[#FCFCFA] min-h-screen font-['Inter'] text-[#1A1A1A] selection:bg-[#E5E7EB] overflow-x-hidden">
      {/* Navigation - Sophisticated & Minimal */}
      <nav className="fixed top-0 inset-x-0 z-[100] px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-white font-serif italic text-xl shadow-lg">N</div>
          <span className="text-xs font-black tracking-widest uppercase">Nova Membership</span>
        </div>
        <div className="hidden md:flex items-center gap-10 bg-white/60 backdrop-blur-lg px-10 py-3.5 rounded-full border border-black/5 shadow-sm">
          <a href="#discovery" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-700 transition-colors">Cộng đồng</a>
          <a href="#planning" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-700 transition-colors">Lập lịch trình</a>
          <a href="#novapass" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-700 transition-colors">NovaPass</a>
        </div>
        <button 
          onClick={onGetStarted}
          className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-900 transition-all active:scale-95 shadow-xl shadow-black/10"
        >
          Trải nghiệm
        </button>
      </nav>

      {/* Hero Section - Conceptual Art */}
      <section className="relative pt-52 pb-40 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-800 text-[9px] font-bold uppercase tracking-[0.3em] mb-12 animate-fade-in-up">
            <Star className="w-3 h-3 fill-emerald-600" /> Hệ sinh thái trải nghiệm Nova
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter mb-12">
            ĐỊNH NGHĨA <br/>
            <span className="italic font-serif font-light text-emerald-900">LIFESTYLE</span> <br/>
            MỚI.
          </h1>
          <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-16 opacity-80">
            Từ NovaWorld Phan Thiết rực rỡ đến những bữa tiệc Fine Dining tại Saigon. <br className="hidden md:block"/> 
            Nova Membership là chìa khóa mở ra vạn đặc quyền dành riêng cho bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={onGetStarted}
              className="group relative inline-flex items-center gap-6 bg-[#1A1A1A] text-white pl-10 pr-4 py-4 rounded-full transition-all hover:pr-10 shadow-2xl shadow-black/20"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Bắt đầu khám phá</span>
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/40 backdrop-blur-md rounded-full border border-black/5">
               <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">NPoint+</span>
               <div className="w-px h-4 bg-black/10"></div>
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tích lũy vô hạn</span>
            </div>
          </div>
        </div>

        {/* Artistic background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Value 1: Discovery (UGC & Social Feed) */}
      <section id="discovery" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 block">Top of Mind 01 / Discovery</span>
               <h2 className="text-6xl font-black tracking-tighter leading-[0.9]">
                 Cộng đồng <br/> 
                 <span className="italic font-serif font-light text-gray-400">Trải nghiệm thật.</span>
               </h2>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Không chỉ là những tấm ảnh đẹp, Nova Membership là nơi cư dân và thành viên chia sẻ những góc nhìn chân thực nhất về hệ sinh thái NovaWorld, NovaDreams. Từ một bài review, bạn có thể lập tức book lịch trình tương tự.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-3xl font-black tracking-tighter">UGC</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">User Generated Content</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-black tracking-tighter">Viral</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Hành trình tiếp nối</p>
              </div>
            </div>
          </div>
          <div className="relative group">
             <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-3xl bg-gray-100 transition-transform duration-1000 group-hover:scale-[1.02]">
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="NovaWorld Discovery" />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-white/95 backdrop-blur-xl p-8 rounded-[3rem] shadow-2xl border border-black/5 max-w-[300px] animate-bounce-slow">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs italic">N</div>
                   <div>
                      <p className="text-[10px] font-black">Nova Community</p>
                      <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">12 phút trước</p>
                   </div>
                </div>
                <h4 className="text-xs font-bold leading-tight mb-4">"Chưa bao giờ thấy Phan Thiết rực rỡ như lúc này tại Circus Land!"</h4>
                <div className="flex justify-between items-center">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />)}
                   </div>
                   <button className="text-[10px] font-black text-emerald-700 uppercase tracking-widest border-b-2 border-emerald-700 pb-0.5">Xem lịch trình</button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Value 2: Planning (Wanderlog Integration) */}
      <section id="planning" className="py-40 px-6 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-32 items-center">
          <div className="md:w-1/2 space-y-12">
            <div className="space-y-4">
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 block">Top of Mind 02 / Planning</span>
               <h2 className="text-6xl font-black tracking-tighter leading-[0.9]">
                 Thiết kế <br/> 
                 <span className="italic font-serif font-light text-gray-400">Trải nghiệm riêng.</span>
               </h2>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Tích hợp công cụ Wanderlog giúp bạn lên kế hoạch tổng thể từ nghỉ dưỡng tại Centara Mirage đến vui chơi tại Wonderland. Quản lý ngân sách, lịch trình và booking OTA chỉ trên một màn hình duy nhất.
            </p>
            <div className="space-y-6">
               {['Lên kế hoạch đa điểm: Phan Thiết - Hồ Tràm - Saigon', 'Tự động gợi ý package Nova FnB phù hợp', 'Tích lũy NPoint ngay khi đặt chỗ'].map((item, i) => (
                 <div key={i} className="flex items-center gap-6 group">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform"></div>
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">{item}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full">
             <div className="bg-white rounded-[4rem] p-12 shadow-3xl border border-black/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-600/10">
                   <div className="h-full bg-emerald-600 w-2/3"></div>
                </div>
                <div className="relative space-y-10">
                   <div className="flex justify-between items-center">
                      <h5 className="font-serif italic text-3xl">Summer at Ho Tram</h5>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                         <Map className="w-5 h-5 opacity-20" />
                      </div>
                   </div>
                   <div className="space-y-8">
                      {[
                        { time: '09:00 AM', event: 'Khởi hành từ Saigon', status: 'Confirmed' },
                        { time: '01:00 PM', event: 'Check-in NovaWorld Ho Tram', status: 'Need Booking' },
                        { time: '06:00 PM', event: 'Dinner at The Dome', status: 'Reserved' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 pb-6 border-b border-gray-50 last:border-0 opacity-80 group-hover:opacity-100 transition-opacity">
                           <p className="text-[10px] font-bold text-gray-400 w-16">{item.time}</p>
                           <div className="flex-1">
                              <p className="text-xs font-bold text-gray-900">{item.event}</p>
                              <p className={`text-[8px] font-black uppercase tracking-widest mt-1 ${item.status === 'Need Booking' ? 'text-rose-500' : 'text-emerald-600'}`}>
                                {item.status}
                              </p>
                           </div>
                        </div>
                      ))}
                   </div>
                   <button className="w-full bg-[#1A1A1A] text-white font-bold py-4 rounded-[1.5rem] text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-black/10">Book All Destinations</button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Value 3: Flexibility (NovaPass Art Showcase) */}
      <section id="novapass" className="py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-28">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 mb-6 block">Top of Mind 03 / Flexibility</span>
          <h2 className="text-7xl md:text-[8rem] font-black tracking-tighter leading-none mb-10">
            NOVAPASS <br/>
            <span className="italic font-serif font-light text-gray-300">UNLIMITED.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm font-medium">
            Một gói trải nghiệm, vạn sự lựa chọn. Bạn mua NovaPass và tự do quyết định sử dụng tại bất kỳ nhà hàng, khu vui chơi hay spa nào thuộc hệ sinh thái Nova Group.
          </p>
        </div>

        {/* The Premium Pass Card Design */}
        <div className="max-w-5xl mx-auto relative px-6">
          <div className="relative aspect-[16/9] w-full rounded-[3.5rem] bg-[#1A1A1A] p-16 overflow-hidden shadow-4xl flex flex-col justify-between items-start text-white group">
            {/* Grain & Gradient Overlays */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#10b981_0%,_transparent_60%)]"></div>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <div className="relative z-10 w-full flex justify-between items-start">
               <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-2xl flex items-center justify-center border border-white/10 shadow-2xl">
                    <span className="font-serif italic font-light text-3xl">N</span>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 mb-1">Nova Membership</h4>
                    <p className="text-2xl font-serif italic tracking-tight">The Southern Explorer Pass</p>
                  </div>
               </div>
               <div className="text-right">
                  <div className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Cross-sell Active</span>
                  </div>
               </div>
            </div>

            <div className="relative z-10 w-full flex justify-between items-end">
               <div className="space-y-6">
                  <div className="flex gap-3">
                     {[1,2,3,4].map(i => <div key={i} className={`h-1 rounded-full transition-all duration-700 ${i === 1 ? 'w-12 bg-emerald-500' : 'w-6 bg-white/10'}`} />)}
                  </div>
                  <div className="flex items-center gap-10">
                     <div className="space-y-1">
                        <p className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-30">Dining Brands</p>
                        <p className="text-xs font-bold">Dynasty House, Marina Club</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-30">Parks & Tours</p>
                        <p className="text-xs font-bold">Circus Land, Wonderland</p>
                     </div>
                  </div>
               </div>
               <div className="text-right">
                  <p className="text-5xl font-black tracking-tighter mb-1">₫1.590k</p>
                  <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Flexible All-in-one Pack</p>
               </div>
            </div>
          </div>
          
          {/* Subtle Decorative elements around card */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </section>

      {/* Statistics & Impact Section */}
      <section className="py-40 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-20">
           {[
             { val: '250+', label: 'Thương hiệu đối tác' },
             { val: '1.2M', label: 'Thành viên Nova' },
             { val: '12', label: 'Dự án nghỉ dưỡng' },
             { val: 'NPoint+', label: 'Điểm thưởng vô hạn' }
           ].map((stat, i) => (
             <div key={i} className="text-center space-y-3">
                <p className="text-4xl font-black tracking-tighter text-gray-900">{stat.val}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-60 px-6 bg-[#1A1A1A] relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#10b98115_0%,_transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-16">
          <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85]">
            BECOME <br/>
            <span className="italic font-serif font-light text-emerald-400">THE ICON.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <button 
              onClick={onGetStarted}
              className="bg-white text-black px-16 py-6 rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-4xl hover:bg-emerald-50 transition-all active:scale-95"
            >
              Kích hoạt thành viên
            </button>
            <div className="flex items-center gap-4 text-white/30">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=nova${i}`} className="w-12 h-12 rounded-full border-4 border-[#1A1A1A] shadow-2xl" alt=""/>)}
               </div>
               <span className="text-[10px] font-bold tracking-widest uppercase">Tham gia cùng cộng đồng</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Static Info */}
      <footer className="py-20 px-6 bg-white border-t border-black/5">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-serif italic text-sm">N</div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Nova Membership</span>
            </div>
            <div className="flex gap-12">
               {['Explore', 'Privilege', 'Support', 'Legal'].map(link => (
                 <a key={link} href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors">{link}</a>
               ))}
            </div>
            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.4em]">© 2025 Nova Group Lifestyle. Vietnam.</p>
         </div>
      </footer>
    </div>
  );
};

export default LandingPage;
