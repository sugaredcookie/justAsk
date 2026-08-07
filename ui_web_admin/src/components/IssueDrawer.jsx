import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Clock, User, Hash, FileText, CheckCircle, 
  AlertCircle, Archive, BookOpen, Tag, Calendar,
  Users, UserCheck
} from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function IssueDrawer({ isOpen, issue, onClose, onUpdateStatus }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!issue) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-[#151B23] border-l border-[#26303D] z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#26303D]">
              <div>
                <div className="flex items-center gap-2">
                  <Hash size={16} className="text-[#94A3B8]" />
                  <span className="text-xs text-[#94A3B8]">Conflict #{issue.id}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mt-1">{issue.title}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-[#0B0F14] transition-colors text-[#94A3B8] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto h-[calc(100vh-80px)]">
              <div className="space-y-6">
                {/* Status */}
                <div className="flex items-center justify-between p-4 bg-[#0B0F14] rounded-xl">
                  <span className="text-sm text-[#94A3B8]">Status</span>
                  <StatusBadge status={issue.status} />
                </div>

                {/* Users */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#0B0F14] rounded-xl">
                    <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-1">
                      <User size={14} />
                      <span>Reporter</span>
                    </div>
                    <p className="text-white font-medium">@{issue.reporter}</p>
                  </div>
                  <div className="p-4 bg-[#0B0F14] rounded-xl">
                    <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-1">
                      <User size={14} />
                      <span>Reported User</span>
                    </div>
                    <p className="text-white font-medium">@{issue.reportedUser}</p>
                  </div>
                </div>

                {/* Related Post */}
                <div className="p-4 bg-[#0B0F14] rounded-xl">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-2">
                    <BookOpen size={14} />
                    <span>Related Post</span>
                  </div>
                  <p className="text-white font-medium mb-2">{issue.relatedPost.title}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="text-[#94A3B8]">Category:</span>
                    <span className="text-white">{issue.relatedPost.category}</span>
                    <span className="text-[#26303D]">|</span>
                    <div className="flex items-center gap-1">
                      <Tag size={14} className="text-[#94A3B8]" />
                      {issue.relatedPost.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-[#94A3B8] bg-[#26303D]/30 px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-sm text-[#94A3B8] mb-2">Conflict Description</p>
                  <div className="p-4 bg-[#0B0F14] rounded-xl">
                    <p className="text-sm text-white leading-relaxed">{issue.description}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="p-4 bg-[#0B0F14] rounded-xl">
                  <p className="text-sm text-[#94A3B8] mb-3">Timeline</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#94A3B8]">Created At</span>
                      <span className="text-white">{issue.createdAt}</span>
                    </div>
                    {issue.resolvedAt && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#94A3B8]">Resolved At</span>
                        <span className="text-white">{issue.resolvedAt}</span>
                      </div>
                    )}
                    {issue.moderator && (
                      <div className="flex items-center justify-between text-sm pt-2 border-t border-[#26303D]">
                        <span className="text-[#94A3B8]">Moderator</span>
                        <span className="text-white flex items-center gap-1">
                          <UserCheck size={14} className="text-[#22C55E]" />
                          {issue.moderator}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#26303D]">
                  <p className="text-sm text-[#94A3B8] mb-3">Actions</p>
                  <div className="space-y-2">
                    {issue.status === 'OPEN' && (
                      <button
                        onClick={() => onUpdateStatus(issue.id, 'UNDER_REVIEW')}
                        className="w-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/20 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <AlertCircle size={18} />
                        Mark Under Review
                      </button>
                    )}
                    {(issue.status === 'OPEN' || issue.status === 'UNDER_REVIEW') && (
                      <>
                        <button
                          onClick={() => onUpdateStatus(issue.id, 'RESOLVED')}
                          className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <CheckCircle size={18} />
                          Resolve Conflict
                        </button>
                        <button
                          onClick={() => onUpdateStatus(issue.id, 'DISMISSED')}
                          className="w-full bg-gray-500/10 hover:bg-gray-500/20 text-gray-400 border border-gray-500/20 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <Archive size={18} />
                          Dismiss
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}