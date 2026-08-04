import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function QuickActions({ actions }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-[#151B23] rounded-2xl border border-[#26303D] p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Zap size={20} className="text-[#22C55E]" />
        <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="bg-[#0B0F14] hover:bg-[#22C55E]/10 border border-[#26303D] hover:border-[#22C55E]/30 rounded-xl px-4 py-3 text-sm font-medium text-[#F8FAFC] transition-all duration-200 hover:scale-[1.02]"
          >
            {action.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}