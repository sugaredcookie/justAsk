// src/components/AIInsights.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, TrendingUp, BarChart } from 'lucide-react';

export default function AIInsights({ insights }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="bg-[#151B23] rounded-2xl border border-[#26303D] p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Bot size={20} className="text-[#22C55E]" />
        <h3 className="text-lg font-semibold text-white">AI Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {insights.map((insight, index) => (
          <div key={index} className="bg-[#0B0F14] rounded-xl p-4">
            <p className="text-xs text-[#94A3B8] mb-1">{insight.label}</p>
            <p className="text-2xl font-bold text-white mb-2">{insight.value}</p>
            <div className="w-full bg-[#26303D] rounded-full h-1.5">
              <div 
                className="bg-[#22C55E] rounded-full h-1.5 transition-all duration-1000"
                style={{ width: `${insight.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}