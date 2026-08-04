import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ icon, label, value, trend, delay = 0 }) {
  const isPositive = trend?.startsWith('+');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-[#151B23] rounded-2xl border border-[#26303D] p-6 hover:border-[#22C55E]/30 transition-all duration-300 card-hover"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#94A3B8] mb-1">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
        <div className="bg-[#22C55E]/10 p-2.5 rounded-xl">
          {icon}
        </div>
      </div>
      {trend && (
        <div className="flex items-center gap-1 mt-3">
          {isPositive ? (
            <TrendingUp size={14} className="text-[#22C55E]" />
          ) : (
            <TrendingDown size={14} className="text-red-400" />
          )}
          <span className={`text-xs font-medium ${isPositive ? 'text-[#22C55E]' : 'text-red-400'}`}>
            {trend}
          </span>
          <span className="text-xs text-[#94A3B8]">from last month</span>
        </div>
      )}
    </motion.div>
  );
}