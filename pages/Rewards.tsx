
import React from 'react';
import { MOCK_PASSES } from '../constants';
import { ChevronRight, Zap, Info, Star, CreditCard, Gift, TrendingUp, Layers } from 'lucide-react';

const Rewards: React.FC = () => {
  return (
    <div className="animate-fadeIn pb-24 bg-[#FCFCFA]">
      {/* Membership Card - Premium Minimalist */}
      <div className="p-6">
        <div className="relative rounded-[2.5rem] bg-[#1A1A1A] p-8 overflow-hidden shadow-2xl group">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#10b98120,_transparent_70%)]"></div>
          <div className="relative z-10 flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
               <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <span className="font-serif italic font-light text-white text-xl">N</span>
               </div>
               <div className="text-right">
                  <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Gold Status</p>
                  <p className="text-white/40 text-[8px] font-bold uppercase tracking-[0.2em] mt-1">ID: NV-2025-0841</p>
               </div>
            </div>
            
            <div className="flex justify-between items-end">
               <div className="space-y-1">
                  <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest">Available Balance</p>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-black text-white tracking-tighter">12,450</span>
                    <span className="text-emerald-400 font-bold text-xs">NP</span>
                  </div>
               </div>
               <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <TrendingUp className="w-4 h-4" />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Actions - Monochrome Icons */}
      <div className="grid grid-cols-4 gap-4 px-6 mb-12">
         {[
           { icon: <CreditCard />, label: 'Wallet' },
           { icon: <Gift />, label: 'Redeem' },
           { icon: <Star />, label: 'Tiers' },
           { icon: <Layers />, label: 'Passes' }
         ].map((item, i) => (
           <button key={i} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1A1A1A] shadow-sm border border-gray-100 hover:bg-emerald-50 transition-colors">
                 {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5 stroke-[1.5px]' })}
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</span>
           </button>
         ))}
      </div>

      {/* NovaPass Marketplace - Artistic Cards */}
      <div className="px-6 space-y-8">
        <div className="flex items-end justify-between border-l-2 border-emerald-600 pl-4">
          <div>
            <h3 className="text-2xl font-black tracking-tighter text-gray-900">NovaPass Exclusive</h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Gói trải nghiệm linh hoạt miền Nam</p>
          </div>
          <button className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Store</button>
        </div>
        
        <div className="space-y-10">
          {MOCK_PASSES.map(pass => (
            <div key={pass.id} className="group relative">
               <div className="absolute -inset-2 bg-emerald-100/30 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-60 overflow-hidden">
                     <img src={pass.imageUrl} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={pass.name} />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
                     <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[9px] font-bold rounded-full border border-white/20 uppercase tracking-widest">Southern Flexi</span>
                     </div>
                     <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-white font-serif italic text-3xl leading-none mb-1">{pass.name}</h4>
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                           <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                           Linh hoạt {pass.benefits.length} dịch vụ tự chọn
                        </p>
                     </div>
                  </div>
                  <div className="p-8">
                     <div className="flex flex-wrap gap-2 mb-8">
                        {pass.benefits.map((b, i) => (
                           <span key={i} className="px-3 py-1.5 bg-[#F8F8F6] text-[#1A1A1A] text-[9px] font-bold rounded-lg border border-gray-100 uppercase tracking-tight">{b}</span>
                        ))}
                     </div>
                     <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                        <div>
                           <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest line-through mb-0.5">₫{(pass.originalPrice/1000).toLocaleString()}k</p>
                           <p className="text-2xl font-black text-gray-900 leading-none">₫{(pass.price/1000).toLocaleString()}k</p>
                        </div>
                        <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-emerald-800 transition-all">
                           Activate Pass
                        </button>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 px-10 text-center">
         <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">Lifestyle Rewards Ecosystem • Miền Nam</p>
      </div>
    </div>
  );
};

export default Rewards;
