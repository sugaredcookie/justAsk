import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileText, Flag, 
  ShieldCheck, Megaphone, Calendar, BarChart,
  Bot, Settings, LogOut, User, X, AlertCircle
} from 'lucide-react';

const menuItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', id: 'dashboard', path: '/dashboard' },
  { icon: <Users size={20} />, label: 'Users', id: 'users', path: '/users' },
  { icon: <FileText size={20} />, label: 'Posts', id: 'posts', path: '/posts' },
  { icon: <AlertCircle size={20} />, label: 'Issues', id: 'issues', path: '/issues' },
  { icon: <ShieldCheck size={20} />, label: 'Verification', id: 'verification', path: '/verification' },
  { icon: <Megaphone size={20} />, label: 'Announcements', id: 'announcements', path: '/announcements' },
  { icon: <Calendar size={20} />, label: 'Events', id: 'events', path: '/events' },
  { icon: <BarChart size={20} />, label: 'Analytics', id: 'analytics', path: '/analytics' },
  { icon: <Bot size={20} />, label: 'AI Moderation', id: 'ai-moderation', path: '/ai-moderation' },
  { icon: <Settings size={20} />, label: 'Settings', id: 'settings', path: '/settings' },
];

export default function Sidebar({ isMobileOpen, setIsMobileOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    const currentPath = location.pathname;
    const active = menuItems.find(item => item.path === currentPath);
    return active ? active.id : 'dashboard';
  });

  const handleNavigation = (item) => {
    setActiveItem(item.id);
    navigate(item.path);
    if (isMobileOpen) setIsMobileOpen(false);
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-6 border-b border-[#26303D]">
        <span className="text-2xl font-bold text-white tracking-tight">JustAsk</span>
        <span className="text-xs font-medium text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded-full border border-[#22C55E]/20">
          Admin
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeItem === item.id
                ? 'bg-[#22C55E]/10 text-[#22C55E]'
                : 'text-[#94A3B8] hover:text-white hover:bg-[#151B23]'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-[#26303D] p-4">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#151B23] mb-2">
          <div className="w-8 h-8 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
            <User size={16} className="text-[#22C55E]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-[#94A3B8]">admin@justask.com</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-[#151B23] transition-all duration-200"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col fixed left-0 top-0 bottom-0 w-64 bg-[#0B0F14] border-r border-[#26303D] z-30">
        <SidebarContent />
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`lg:hidden fixed left-0 top-0 bottom-0 w-64 bg-[#0B0F14] border-r border-[#26303D] z-50 transform transition-transform duration-300 ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="absolute right-4 top-4">
          <button onClick={() => setIsMobileOpen(false)} className="text-[#94A3B8] hover:text-white">
            <X size={24} />
          </button>
        </div>
        <SidebarContent />
      </aside>
    </>
  );
}