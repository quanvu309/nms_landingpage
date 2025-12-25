
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
  Star,
  Coffee,
  Utensils
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
          <a href="#gastronomy" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-700 transition-colors">GlobalX Gastronomy</a>
          <a href="#discovery" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-700 transition-colors">Discovery</a>
          <a href="#novapass" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-700 transition-colors">NovaPass</a>
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
            <Utensils className="w-3 h-3 fill-emerald-600" /> Tinh hoa ẩm thực GlobalX
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter mb-12">
            THƯỞNG LÃM <br/>
            <span className="italic font-serif font-light text-emerald-900">VỊ GIÁC</span> <br/>
            MỚI.
          </h1>
          <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-16 opacity-80">
            Từ Dynasty House, Jumbo Seafood đến The Dome. Nova Membership đưa bạn vào cuộc hành trình vị giác không biên giới cùng GlobalX - nhà vận hành F&B hàng đầu.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={onGetStarted}
              className="group relative inline-flex items-center gap-6 bg-[#1A1A1A] text-white pl-10 pr-4 py-4 rounded-full transition-all hover:pr-10 shadow-2xl shadow-black/20"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Khám phá ẩm thực</span>
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/40 backdrop-blur-md rounded-full border border-black/5">
               <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">GlobalX+</span>
               <div className="w-px h-4 bg-black/10"></div>
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Đặc quyền ưu đãi 20%</span>
            </div>
          </div>
        </div>

        {/* Artistic background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Value 1: Gastronomy Focus (GlobalX) */}
      <section id="gastronomy" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 block">GlobalX Gastronomy / Art of Dining</span>
               <h2 className="text-6xl font-black tracking-tighter leading-[0.9]">
                 Đặc quyền <br/> 
                 <span className="italic font-serif font-light text-gray-400">Ẩm thực đa vị.</span>
               </h2>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Sở hữu mạng lưới nhà hàng danh tiếng từ Hong Kong, Singapore đến các thương hiệu Fine Dining. Nova Membership không chỉ là tấm thẻ, mà là lời mời đến với những bàn tiệc xa hoa nhất tại trung tâm Sài Gòn và các đô thị NovaWorld.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-3xl font-black tracking-tighter">25+</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Thương hiệu F&B GlobalX</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-black tracking-tighter">-20%</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Ưu đãi độc quyền Gold Member</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
               {['Dynasty House', 'Jumbo Seafood', 'Crystal Jade', 'Dragon Hotpot', 'Marina Club'].map(b => (
                 <span key={b} className="text-[9px] font-black uppercase tracking-widest">{b}</span>
               ))}
            </div>
          </div>
          <div className="relative group">
             <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-3xl bg-gray-100 transition-transform duration-1000 group-hover:scale-[1.02]">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="GlobalX Dining" />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-white/95 backdrop-blur-xl p-8 rounded-[3rem] shadow-2xl border border-black/5 max-w-[300px] animate-bounce-slow">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs italic">G</div>
                   <div>
                      <p className="text-[10px] font-black">GlobalX Recommendations</p>
                      <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">Hôm nay</p>
                   </div>
                </div>
                <h4 className="text-xs font-bold leading-tight mb-4">"Dynasty House chính thức ra mắt thực đơn trà chiều Dimsum mới."</h4>
                <div className="flex justify-between items-center">
                   <button className="text-[10px] font-black text-amber-700 uppercase tracking-widest border-b-2 border-amber-700 pb-0.5">Đặt bàn ngay</button>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Quận 1, HCM</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* NovaPass Art Showcase - Gastronomy focus */}
      <section id="novapass" className="py-40 px-6 bg-[#F8F8F6] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-28">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 mb-6 block">Exclusive Product / NovaPass</span>
          <h2 className="text-7xl md:text-[8rem] font-black tracking-tighter leading-none mb-10">
            EPICUREAN <br/>
            <span className="italic font-serif font-light text-gray-300">PASS.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm font-medium">
            Sản phẩm thẻ chi tiêu ẩm thực thông minh. Nạp 1, nhận 2 - Tự do thanh toán tại hàng trăm điểm đến GlobalX trên toàn quốc với giá trị nhân đôi.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative px-6">
          <div className="relative aspect-[16/9] w-full rounded-[3.5rem] bg-[#1A1A1A] p-16 overflow-hidden shadow-4xl flex flex-col justify-between items-start text-white group">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#f59e0b_0%,_transparent_60%)]"></div>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <div className="relative z-10 w-full flex justify-between items-start">
               <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-2xl flex items-center justify-center border border-white/10 shadow-2xl">
                    <span className="font-serif italic font-light text-3xl">G</span>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 mb-1">GlobalX Premium</h4>
                    <p className="text-2xl font-serif italic tracking-tight">The Gastronomy NovaPass</p>
                  </div>
               </div>
               <div className="text-right">
                  <div className="px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                    <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest">Dining Privilege</span>
                  </div>
               </div>
            </div>

            <div className="relative z-10 w-full flex justify-between items-end">
               <div className="space-y-6">
                  <div className="flex gap-3">
                     {[1,2,3,4].map(i => <div key={i} className={`h-1 rounded-full transition-all duration-700 ${i === 1 ? 'w-12 bg-amber-500' : 'w-6 bg-white/10'}`} />)}
                  </div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Validated for all GlobalX Outlets</p>
               </div>
               <div className="text-right">
                  <p className="text-5xl font-black tracking-tighter mb-1">₫1.290k</p>
                  <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Actual Spending Value ₫2.5M</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-t border-black/5">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-serif italic text-sm">N</div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Nova Membership</span>
            </div>
            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.4em]">© 2025 Nova Group Lifestyle. GlobalX Gastronomy Partner.</p>
         </div>
      </footer>
    </div>
  );
};

export default LandingPage;
