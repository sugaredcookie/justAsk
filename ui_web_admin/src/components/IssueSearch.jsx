import React from 'react';
import { Search } from 'lucide-react';

export default function IssueSearch({ value, onChange }) {
  return (
    <div className="flex-1 flex items-center bg-[#151B23] rounded-xl px-3 py-2 border border-[#26303D] focus-within:ring-2 focus-within:ring-[#22C55E]/50 focus-within:border-[#22C55E] transition-all duration-200">
      <Search size={18} className="text-[#94A3B8]" />
      <input
        type="text"
        placeholder="Search by title, reporter, reported user, related post, or conflict ID..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-white text-sm ml-2 outline-none flex-1 placeholder:text-[#94A3B8]"
      />
    </div>
  );
}