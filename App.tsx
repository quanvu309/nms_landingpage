
import React, { useState, useEffect } from 'react';
import { NavItem } from './types';
import Layout from './components/Layout';
import HomeFeed from './pages/HomeFeed';
import Explore from './pages/Explore';
import Rewards from './pages/Rewards';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavItem>(NavItem.HOME);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('nova_has_visited');
    if (hasVisited) {
      // setShowLanding(false);
    }
  }, []);

  const handleGetStarted = () => {
    localStorage.setItem('nova_has_visited', 'true');
    setShowLanding(false);
  };

  if (showLanding) {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case NavItem.HOME:
        return <HomeFeed />;
      case NavItem.EXPLORE:
        return <Explore />;
      case NavItem.REWARDS:
        return <Rewards />;
      case NavItem.BOOKINGS:
        return (
          <div className="p-12 text-center animate-fadeIn min-h-[70vh] flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-emerald-50 rounded-[2.5rem] flex items-center justify-center mb-6 text-emerald-400">
              <span className="text-4xl">🗓️</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Chưa có lịch trình</h2>
            <p className="text-sm text-gray-500 mt-2 max-w-[240px] mx-auto">Hành trình tuyệt vời nhất là hành trình chưa được thực hiện. Bắt đầu ngay!</p>
            <button 
              onClick={() => setActiveTab(NavItem.EXPLORE)}
              className="mt-8 bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-2xl text-xs shadow-xl shadow-emerald-600/20"
            >
              Thiết kế lịch trình ngay
            </button>
          </div>
        );
      case NavItem.ACCOUNT:
        return (
          <div className="p-6 animate-fadeIn bg-white">
            <div className="flex items-center gap-6 mb-10">
              <div className="relative">
                <img src="https://i.pravatar.cc/150?u=me" className="w-24 h-24 rounded-[2.5rem] border-4 border-white shadow-2xl object-cover" alt="" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-900">Quốc Anh</h2>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Gold Member • 12,450 NP</p>
                <div className="flex gap-2 mt-3">
                  <div className="px-3 py-1 bg-amber-50 text-amber-600 border border-amber-100 rounded-full text-[9px] font-bold uppercase tracking-wider">Thành viên ưu tú</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-emerald-50/50 p-5 rounded-[2rem] border border-emerald-100 text-center shadow-sm">
                <p className="text-2xl font-black text-emerald-700">4,617</p>
                <p className="text-[9px] text-emerald-600/60 font-bold uppercase tracking-widest mt-1">Người theo dõi</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-[2rem] border border-gray-100 text-center shadow-sm">
                <p className="text-2xl font-black text-gray-800">12</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Lịch trình đã tạo</p>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Bộ sưu tập của tôi</h3>
              <button className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Tạo mới</button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-[2rem] border border-gray-100 p-5 flex items-center gap-5 cursor-pointer hover:bg-gray-50 transition-all shadow-sm">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-900">Places I want to eat at...</h4>
                  <p className="text-[10px] text-gray-400 font-medium">10 địa điểm • Cập nhật T8 2025</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">›</div>
              </div>
            </div>

            <button 
              onClick={() => setShowLanding(true)}
              className="w-full mt-16 py-4 text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-600 transition-colors"
            >
              Xem trang giới thiệu sản phẩm
            </button>
          </div>
        );
      default:
        return <HomeFeed />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
