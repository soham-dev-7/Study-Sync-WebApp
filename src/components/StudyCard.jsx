import React from 'react';
import { Clock, Calendar, Target, TrendingUp } from 'lucide-react';

const StudyCard = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  color = 'blue',
  trend 
}) => {
  const icons = {
    clock: Clock,
    calendar: Calendar,
    target: Target,
    trending: TrendingUp,
  };

  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  };

  const Icon = icons[icon];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className={`p-2 rounded-lg ${colors[color]}`}>
              <Icon className="text-white" size={20} />
            </div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {title}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {value}
            </p>
            {subtitle && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {trend && (
          <div className={`text-sm font-medium ${
            trend > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend > 0 ? '+' : ''}{trend}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyCard;