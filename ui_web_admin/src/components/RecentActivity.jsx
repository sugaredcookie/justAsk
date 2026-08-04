import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function RecentActivity({ activities }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-[#151B23] rounded-2xl border border-[#26303D] p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Activity size={20} className="text-[#22C55E]" />
        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
      </div>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 pb-3 border-b border-[#26303D]/50 last:border-0 last:pb-0">
            <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm text-[#F8FAFC]">{activity.text}</p>
              <p className="text-xs text-[#94A3B8] mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}