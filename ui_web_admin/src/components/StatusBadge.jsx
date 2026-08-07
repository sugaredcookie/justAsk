import React from 'react';

const statusConfig = {
  OPEN: { label: 'Open', className: 'bg-red-500/20 text-red-500 border-red-500/20' },
  UNDER_REVIEW: { label: 'Under Review', className: 'bg-amber-500/20 text-amber-500 border-amber-500/20' },
  RESOLVED: { label: 'Resolved', className: 'bg-[#22C55E]/20 text-[#22C55E] border-[#22C55E]/20' },
  DISMISSED: { label: 'Dismissed', className: 'bg-gray-500/20 text-gray-400 border-gray-500/20' }
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig.OPEN;

  return (
    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${config.className}`}>
      {config.label}
    </span>
  );
}