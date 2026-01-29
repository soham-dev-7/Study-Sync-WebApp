import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import StudyCard from '../components/StudyCard';
import PomodoroTimer from '../components/PomodoroTimer';
import Calendar from '../components/Calendar';
import { mockUser, mockStudyData } from '../utils/mockData';
import { Clock, Target, Calendar as CalendarIcon, TrendingUp, Users, BookOpen } from 'lucide-react';

const Dashboard = () => {
  const [todayStudyTime, setTodayStudyTime] = useState(85);

  const handleTimeUpdate = (minutes) => {
    setTodayStudyTime(prev => prev + minutes);
  };

  const weeklyTotal = mockStudyData.reduce((sum, day) => sum + day.minutes, 0);
  const dailyAverage = Math.round(weeklyTotal / 7);
  const goalProgress = Math.round((todayStudyTime / mockUser.studyGoal) * 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back, {mockUser.name.split(' ')[0]}!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Ready to crush your study goals today?
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StudyCard
            title="Today's Study Time"
            value={`${todayStudyTime} min`}
            subtitle={`${goalProgress}% of daily goal`}
            icon="clock"
            color="blue"
            trend={12}
          />
          <StudyCard
            title="Current Streak"
            value={`${mockUser.currentStreak} days`}
            subtitle="Keep it going!"
            icon="target"
            color="green"
            trend={8}
          />
          <StudyCard
            title="Weekly Total"
            value={`${Math.round(weeklyTotal / 60)}h ${weeklyTotal % 60}m`}
            subtitle={`${dailyAverage} min/day avg`}
            icon="calendar"
            color="purple"
            trend={-3}
          />
          <StudyCard
            title="Total Study Time"
            value={`${Math.round(mockUser.totalStudyTime / 60)}h`}
            subtitle="All time"
            icon="trending"
            color="orange"
            trend={25}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Timer and Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pomodoro Timer */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Focus Session
              </h2>
              <PomodoroTimer onTimeUpdate={handleTimeUpdate} />
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-left group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-blue-500 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <Users className="text-white" size={20} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Join Study Group</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Connect with other students
                  </p>
                </button>

                <button className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-left group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-green-500 rounded-lg group-hover:bg-green-600 transition-colors">
                      <BookOpen className="text-white" size={20} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Study Resources</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Access your materials
                  </p>
                </button>

                <button className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-left group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-purple-500 rounded-lg group-hover:bg-purple-600 transition-colors">
                      <Target className="text-white" size={20} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Set Goals</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Plan your study sessions
                  </p>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Recent Activity
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Completed 25-minute focus session
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Joined CS Study Group
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Achieved 7-day study streak
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Calendar and Progress */}
          <div className="space-y-8">
            {/* Calendar */}
            <Calendar />

            {/* Progress Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Weekly Progress
              </h3>
              <div className="space-y-3">
                {mockStudyData.map((day, index) => {
                  const progress = (day.minutes / mockUser.studyGoal) * 100;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                        {day.date}
                      </div>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-sm text-gray-600 dark:text-gray-300 text-right">
                        {day.minutes}m
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Study Goal */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Today's Goal</h3>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  {Math.round(goalProgress)}%
                </div>
                <div className="text-blue-100 mb-4">
                  {todayStudyTime} / {mockUser.studyGoal} minutes
                </div>
                <div className="bg-white/20 rounded-full h-2 mb-4">
                  <div
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(goalProgress, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-blue-100">
                  {goalProgress >= 100 ? 'Goal achieved! 🎉' : `${mockUser.studyGoal - todayStudyTime} minutes to go`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;