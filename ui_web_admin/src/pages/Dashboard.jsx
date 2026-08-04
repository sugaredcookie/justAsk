import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import StatCard from '../components/StatCard';
import RecentActivity from '../components/RecentActivity';
import QuickActions from '../components/QuickActions';
import AIInsights from '../components/AIInsights';
import ReportsTable from '../components/ReportsTable';
import { getDashboardData } from '../services/dashboardService';
import { 
  Users, FileText, AlertTriangle, UserCheck, 
  Activity, Zap, TrendingUp, BarChart
} from 'lucide-react';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDashboardData();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center">
        <div className="text-[#94A3B8]">Loading dashboard...</div>
      </div>
    );
  }

  const statIcons = {
    'Total Users': <Users size={20} className="text-[#22C55E]" />,
    'Open Posts': <FileText size={20} className="text-[#22C55E]" />,
    'Pending Reports': <AlertTriangle size={20} className="text-[#22C55E]" />,
    'Verified Students': <UserCheck size={20} className="text-[#22C55E]" />
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] flex">
      {/* Sidebar */}
      <Sidebar isMobileOpen={isMobileMenuOpen} setIsMobileOpen={setIsMobileMenuOpen} />

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-64 min-h-screen">
        <Topbar 
          title="Dashboard" 
          subtitle="System Overview" 
          onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        <main className="p-4 md:p-6 mt-16">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {data.statistics.map((stat, index) => (
              <StatCard
                key={index}
                icon={statIcons[stat.label]}
                label={stat.label}
                value={stat.value}
                trend={stat.trend}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <RecentActivity activities={data.activities} />
            <QuickActions actions={data.quickActions} />
          </div>

          {/* AI Insights */}
          <div className="mb-6">
            <AIInsights insights={data.insights} />
          </div>

          {/* Reports Table */}
          <div>
            <ReportsTable reports={data.reports} />
          </div>
        </main>
      </div>
    </div>
  );
}