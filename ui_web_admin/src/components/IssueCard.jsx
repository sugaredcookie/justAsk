import React from 'react';
import { motion } from 'framer-motion';
import StatusBadge from './StatusBadge';
import { Eye, CheckCircle, Clock, BookOpen, User, Hash } from 'lucide-react';

export default function IssueCard({ issue, onView, onResolve }) {
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#151B23] rounded-2xl border border-[#26303D] p-5 hover:border-[#22C55E]/30 transition-all duration-300 card-hover"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Hash size={14} className="text-[#94A3B8]" />
            <span className="text-xs text-[#94A3B8]">Conflict #{issue.id}</span>
          </div>
          <h4 className="text-base font-semibold text-white leading-tight">
            {issue.title}
          </h4>
        </div>
        <StatusBadge status={issue.status} />
      </div>

      {/* Related Post */}
      <div className="mb-3 p-3 bg-[#0B0F14] rounded-xl border border-[#26303D]/50">
        <div className="flex items-center gap-2 text-sm">
          <BookOpen size={14} className="text-[#22C55E] flex-shrink-0" />
          <span className="text-[#94A3B8]">Related Post:</span>
          <span className="text-white font-medium truncate">{issue.relatedPost.title}</span>
        </div>
        <div className="flex items-center gap-2 mt-1 text-xs text-[#94A3B8]">
          <span>{issue.relatedPost.category}</span>
          <span>•</span>
          <div className="flex gap-1">
            {issue.relatedPost.tags.map((tag, i) => (
              <span key={i} className="px-1.5 py-0.5 bg-[#26303D]/30 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Users */}
      <div className="flex items-center justify-between text-sm mb-3">
        <div className="flex items-center gap-2">
          <User size={14} className="text-[#94A3B8]" />
          <span className="text-[#94A3B8]">Reporter:</span>
          <span className="text-white font-medium">@{issue.reporter}</span>
        </div>
        <div className="flex items-center gap-2">
          <User size={14} className="text-[#94A3B8]" />
          <span className="text-[#94A3B8]">Reported:</span>
          <span className="text-white font-medium">@{issue.reportedUser}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#94A3B8] mb-4">
        {truncateText(issue.description, 120)}
        {issue.description.length > 120 && (
          <span className="text-[#22C55E] ml-1 cursor-pointer hover:underline">
            Read More
          </span>
        )}
      </p>

      {/* Meta & Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-[#26303D]">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Clock size={14} />
          <span>{issue.createdAt}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onView(issue)}
            className="bg-[#0B0F14] hover:bg-[#22C55E]/10 border border-[#26303D] hover:border-[#22C55E]/30 rounded-xl px-3 py-1.5 text-sm font-medium text-[#F8FAFC] transition-all duration-200 flex items-center gap-1.5"
          >
            <Eye size={15} />
            View
          </button>
          {issue.status !== 'RESOLVED' && issue.status !== 'DISMISSED' && (
            <button
              onClick={() => onResolve(issue.id)}
              className="bg-[#22C55E] hover:bg-[#16A34A] rounded-xl px-3 py-1.5 text-sm font-medium text-white transition-all duration-200 flex items-center gap-1.5"
            >
              <CheckCircle size={15} />
              Resolve
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}