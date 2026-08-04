import React from 'react';
import { motion } from 'framer-motion';

const statusColors = {
  Pending: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/20',
  Resolved: 'bg-[#22C55E]/20 text-[#22C55E] border-[#22C55E]/20',
  Dismissed: 'bg-gray-500/20 text-gray-400 border-gray-500/20'
};

export default function ReportsTable({ reports }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="bg-[#151B23] rounded-2xl border border-[#26303D] p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Latest Reports</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-[#94A3B8] border-b border-[#26303D]">
              <th className="pb-3 font-medium">User</th>
              <th className="pb-3 font-medium">Reason</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Time</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="border-b border-[#26303D]/50 last:border-0">
                <td className="py-3 text-sm text-[#F8FAFC]">{report.user}</td>
                <td className="py-3 text-sm text-[#94A3B8]">{report.reason}</td>
                <td className="py-3">
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[report.status]}`}>
                    {report.status}
                  </span>
                </td>
                <td className="py-3 text-sm text-[#94A3B8]">{report.time}</td>
                <td className="py-3">
                  <button className="text-xs text-[#22C55E] hover:text-[#16A34A] font-medium transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}