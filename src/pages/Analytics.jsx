import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import StudyChart from '../components/StudyChart';
import StudyCard from '../components/StudyCard';
import { mockStudyData, mockMonthlyData, mockSubjectData, mockUser } from '../utils/mockData';
import { Download, FileText, Calendar, TrendingUp, Clock, Target } from 'lucide-react';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const totalWeeklyMinutes = mockStudyData.reduce((sum, day) => sum + day.minutes, 0);
  const averageDaily = Math.round(totalWeeklyMinutes / 7);
  const totalMonthlyHours = mockMonthlyData.reduce((sum, month) => sum + month.hours, 0);
  const goalProgress = Math.round((averageDaily / mockUser.studyGoal) * 100);

  const handleExport = (format) => {
    console.log(`Exporting data as ${format}`);
    // In a real app, this would trigger file download
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Study Analytics
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Track your progress and identify patterns in your study habits
              </p>
            </div>
            
            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleExport('pdf')}
                  className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  <FileText size={16} />
                  <span>Export PDF</span>
                </button>
                <button
                  onClick={() => handleExport('csv')}
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  <Download size={16} />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StudyCard
            title="Weekly Total"
            value={`${Math.round(totalWeeklyMinutes / 60)}h ${totalWeeklyMinutes % 60}m`}
            subtitle="This week"
            icon="clock"
            color="blue"
            trend={15}
          />
          <StudyCard
            title="Daily Average"
            value={`${averageDaily} min`}
            subtitle="Per day this week"
            icon="calendar"
            color="green"
            trend={8}
          />
          <StudyCard
            title="Goal Progress"
            value={`${goalProgress}%`}
            subtitle="Daily goal completion"
            icon="target"
            color="purple"
            trend={goalProgress > 100 ? 25 : -5}
          />
          <StudyCard
            title="Current Streak"
            value={`${mockUser.currentStreak} days`}
            subtitle="Keep it going!"
            icon="trending"
            color="orange"
            trend={12}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Weekly Study Time */}
          <StudyChart
            type="line"
            data={mockStudyData}
            title="Weekly Study Time"
            color="#3B82F6"
          />

          {/* Monthly Progress */}
          <StudyChart
            type="bar"
            data={mockMonthlyData}
            title="Monthly Progress"
            color="#8B5CF6"
          />
        </div>

        {/* Subject Distribution and Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subject Distribution Pie Chart */}
          <div className="lg:col-span-1">
            <StudyChart
              type="pie"
              data={mockSubjectData}
              title="Study Time by Subject"
            />
          </div>

          {/* Detailed Statistics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Study Patterns */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Study Patterns
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Most Productive Day</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Thursday</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Preferred Study Time</span>
                  <span className="font-semibold text-gray-900 dark:text-white">2:00 PM - 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Average Session Length</span>
                  <span className="font-semibold text-gray-900 dark:text-white">45 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Focus Score</span>
                  <span className="font-semibold text-green-600">85%</span>
                </div>
              </div>
            </div>

            {/* Weekly Goals Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Weekly Goals Progress
              </h3>
              <div className="space-y-4">
                {mockStudyData.map((day, index) => {
                  const progress = (day.minutes / mockUser.studyGoal) * 100;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-16 text-sm font-medium text-gray-600 dark:text-gray-300">
                        {day.day}
                      </div>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-300 ${
                            progress >= 100 ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                      <div className="w-16 text-sm text-gray-600 dark:text-gray-300 text-right">
                        {Math.round(progress)}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Recent Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">7-Day Streak</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Consistency Champion</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">20+ Hours</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Monthly Goal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Target className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Goal Crusher</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Exceeded daily target</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Weekly Warrior</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Studied every day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;