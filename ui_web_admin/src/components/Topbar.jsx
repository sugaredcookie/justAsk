import React, { useState } from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

export default function Topbar({ title, subtitle, onMenuClick }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 lg:left-64 bg-[#0B0F14]/95 backdrop-blur-xl border-b border-[#26303D] z-20">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden text-[#94A3B8] hover:text-white transition-colors"
            onClick={onMenuClick}
          >
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-white">{title}</h1>
            <p className="text-xs text-[#94A3B8]">{subtitle}</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center bg-[#151B23] rounded-xl px-3 py-2 border border-[#26303D] focus-within:ring-2 focus-within:ring-[#22C55E]/50 focus-within:border-[#22C55E] transition-all duration-200">
            <Search size={18} className="text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white text-sm ml-2 outline-none w-40 placeholder:text-[#94A3B8]"
            />
          </div>

          {/* Notification */}
          <button className="relative p-2 rounded-xl hover:bg-[#151B23] transition-colors">
            <Bell size={20} className="text-[#94A3B8] hover:text-white transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#22C55E] rounded-full"></span>
          </button>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-[#22C55E]/20 flex items-center justify-center cursor-pointer hover:bg-[#22C55E]/30 transition-colors">
            <User size={16} className="text-[#22C55E]" />
          </div>
        </div>
      </div>
    </header>
  );
}