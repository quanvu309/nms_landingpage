
import React from 'react';
import { Home, Compass, Gift, Calendar, User, Bell } from 'lucide-react';
import { NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: NavItem;
  setActiveTab: (tab: NavItem) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FCFCFA] max-w-md mx-auto relative shadow-2xl overflow-hidden border-x border-gray-100">
      {/* Header - Art Lifestyle Minimalist */}
      <header className="sticky top-0 z-[60] bg-white/80 backdrop-blur-xl border-b border-gray-50 p-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-serif italic text-lg shadow-lg">
            N
          </div>
          <div>
            <h1 className="text-xs font-black uppercase tracking-widest text-gray-900 leading-none">NovaLife</h1>
            <p className="text-[9px] text-emerald-600 font-bold uppercase tracking-widest mt-1">Gold Member</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Bell className="w-5 h-5 text-gray-400 stroke-[1.5px]" />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-emerald-500 rounded-full border border-white"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-28 hide-scrollbar">
        {children}
      </main>

      {/* Bottom Navigation - Aesthetic Float */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] bg-[#1A1A1A]/95 backdrop-blur-md rounded-[2.5rem] px-6 py-4 flex justify-between items-center z-[70] shadow-2xl border border-white/10">
        <NavButton icon={<Home />} label="Home" active={activeTab === NavItem.HOME} onClick={() => setActiveTab(NavItem.HOME)} />
        <NavButton icon={<Compass />} label="Explore" active={activeTab === NavItem.EXPLORE} onClick={() => setActiveTab(NavItem.EXPLORE)} />
        <NavButton icon={<Gift />} label="Pass" active={activeTab === NavItem.REWARDS} onClick={() => setActiveTab(NavItem.REWARDS)} />
        <NavButton icon={<Calendar />} label="Trips" active={activeTab === NavItem.BOOKINGS} onClick={() => setActiveTab(NavItem.BOOKINGS)} />
        <NavButton icon={<User />} label="Me" active={activeTab === NavItem.ACCOUNT} onClick={() => setActiveTab(NavItem.ACCOUNT)} />
      </nav>
    </div>
  );
};

const NavButton = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all duration-300 ${active ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}>
    <div className={`transition-colors ${active ? 'text-emerald-500' : 'text-white'}`}>
      {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5 stroke-[1.5px]' })}
    </div>
    <span className={`text-[8px] font-bold uppercase tracking-widest ${active ? 'text-emerald-500' : 'text-white'}`}>{label}</span>
  </button>
);

export default Layout;
