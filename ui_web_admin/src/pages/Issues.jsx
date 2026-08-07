import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import IssueCard from '../components/IssueCard';
import IssueDrawer from '../components/IssueDrawer';
import IssueFilter from '../components/IssueFilter';
import IssueSearch from '../components/IssueSearch';
import { getIssues } from '../services/issuesService';
import { RefreshCw } from 'lucide-react';

export default function Issues() {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filter, setFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    setLoading(true);
    const data = await getIssues();
    setIssues(data);
    setFilteredIssues(data);
    setLoading(false);
  };

  useEffect(() => {
    let result = issues;

    // Apply filter
    if (filter !== 'ALL') {
      result = result.filter(issue => issue.status === filter);
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(issue =>
        issue.poster.toLowerCase().includes(query) ||
        issue.solver.toLowerCase().includes(query) ||
        issue.id.toString().includes(query) ||
        issue.problemId.toString().includes(query)
      );
    }

    setFilteredIssues(result);
  }, [filter, searchQuery, issues]);

  const handleView = (issue) => {
    setSelectedIssue(issue);
    setIsDrawerOpen(true);
  };

  const handleResolve = (issueId) => {
    setIssues(prev =>
      prev.map(issue =>
        issue.id === issueId
          ? { ...issue, status: 'RESOLVED', resolvedAt: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) }
          : issue
      )
    );
  };

  const handleUpdateStatus = (issueId, newStatus) => {
    setIssues(prev =>
      prev.map(issue =>
        issue.id === issueId
          ? { 
              ...issue, 
              status: newStatus,
              resolvedAt: newStatus === 'RESOLVED' ? new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : issue.resolvedAt
            }
          : issue
      )
    );
    if (selectedIssue && selectedIssue.id === issueId) {
      setSelectedIssue(prev => ({
        ...prev,
        status: newStatus,
        resolvedAt: newStatus === 'RESOLVED' ? new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : prev.resolvedAt
      }));
    }
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedIssue(null);
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] flex">
      <Sidebar isMobileOpen={isMobileMenuOpen} setIsMobileOpen={setIsMobileMenuOpen} />
      
      <div className="flex-1 ml-0 lg:ml-64 min-h-screen">
        <Topbar 
          title="Issues" 
          subtitle="Manage user conflicts and dispute resolution"
          onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        <main className="p-4 md:p-6 mt-16">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <IssueSearch value={searchQuery} onChange={setSearchQuery} />
            <div className="flex gap-3">
              <IssueFilter value={filter} onChange={setFilter} />
              <button
                onClick={fetchIssues}
                className="px-4 py-2 bg-[#151B23] border border-[#26303D] rounded-xl text-[#94A3B8] hover:text-white hover:border-[#22C55E]/30 transition-all duration-200 flex items-center gap-2"
              >
                <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>
          </div>

          {/* Issues Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-[#94A3B8]">Loading issues...</div>
            </div>
          ) : filteredIssues.length === 0 ? (
            <div className="bg-[#151B23] rounded-2xl border border-[#26303D] p-12 text-center">
              <p className="text-[#94A3B8]">No issues found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredIssues.map((issue) => (
                <IssueCard
                  key={issue.id}
                  issue={issue}
                  onView={handleView}
                  onResolve={handleResolve}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Drawer */}
      <IssueDrawer
        isOpen={isDrawerOpen}
        issue={selectedIssue}
        onClose={handleCloseDrawer}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
}