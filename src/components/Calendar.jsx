import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mockCalendarData } from '../utils/mockData';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getStudyDataForDay = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return mockCalendarData.find(data => data.date === dateStr);
  };

  const getIntensityClass = (minutes) => {
    if (!minutes) return 'bg-gray-100 dark:bg-gray-700';
    if (minutes < 30) return 'bg-green-200 dark:bg-green-800';
    if (minutes < 60) return 'bg-green-300 dark:bg-green-700';
    if (minutes < 120) return 'bg-green-400 dark:bg-green-600';
    return 'bg-green-500 dark:bg-green-500';
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Study Calendar
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ChevronLeft size={16} className="text-gray-600 dark:text-gray-300" />
          </button>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[120px] text-center">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button
            onClick={() => navigateMonth(1)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ChevronRight size={16} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const studyData = day ? getStudyDataForDay(day) : null;
          const intensityClass = studyData ? getIntensityClass(studyData.minutes) : 'bg-gray-100 dark:bg-gray-700';
          
          return (
            <div
              key={index}
              className={`aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors duration-200 ${
                day 
                  ? `${intensityClass} hover:opacity-80 text-gray-700 dark:text-gray-300`
                  : ''
              }`}
              title={studyData ? `${studyData.minutes} minutes studied` : ''}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>Less</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 rounded"></div>
          <div className="w-3 h-3 bg-green-200 dark:bg-green-800 rounded"></div>
          <div className="w-3 h-3 bg-green-300 dark:bg-green-700 rounded"></div>
          <div className="w-3 h-3 bg-green-400 dark:bg-green-600 rounded"></div>
          <div className="w-3 h-3 bg-green-500 dark:bg-green-500 rounded"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default Calendar;