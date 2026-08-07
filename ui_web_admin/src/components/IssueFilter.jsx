import React from 'react';

const filters = [
  { value: 'ALL', label: 'All' },
  { value: 'OPEN', label: 'Open' },
  { value: 'UNDER_REVIEW', label: 'Under Review' },
  { value: 'RESOLVED', label: 'Resolved' },
  { value: 'DISMISSED', label: 'Dismissed' }
];

export default function IssueFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[#151B23] border border-[#26303D] rounded-xl px-4 py-2 text-sm text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E] transition-all duration-200"
    >
      {filters.map((filter) => (
        <option key={filter.value} value={filter.value}>
          {filter.label}
        </option>
      ))}
    </select>
  );
}