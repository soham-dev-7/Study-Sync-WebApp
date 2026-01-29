import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Coffee } from 'lucide-react';

const PomodoroTimer = ({ onTimeUpdate }) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Timer finished
          setIsActive(false);
          if (!isBreak) {
            setCompletedPomodoros(prev => prev + 1);
            onTimeUpdate?.(25);
            // Start break
            setIsBreak(true);
            setMinutes(5);
            setSeconds(0);
          } else {
            // Break finished, back to work
            setIsBreak(false);
            setMinutes(25);
            setSeconds(0);
          }
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds, isBreak, onTimeUpdate]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  const formatTime = (mins, secs) => {
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = isBreak 
    ? ((5 * 60 - (minutes * 60 + seconds)) / (5 * 60)) * 100
    : ((25 * 60 - (minutes * 60 + seconds)) / (25 * 60)) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          {isBreak ? (
            <Coffee className="text-green-500 mr-2" size={24} />
          ) : (
            <div className="w-6 h-6 bg-red-500 rounded-full mr-2"></div>
          )}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {isBreak ? 'Break Time' : 'Focus Time'}
          </h3>
        </div>

        <div className="relative w-48 h-48 mx-auto mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-200 dark:text-gray-700"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
              className={`transition-all duration-1000 ${
                isBreak ? 'text-green-500' : 'text-blue-500'
              }`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {formatTime(minutes, seconds)}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {completedPomodoros} completed
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleTimer}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
              isActive
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isActive ? <Pause size={18} /> : <Play size={18} />}
            <span>{isActive ? 'Pause' : 'Start'}</span>
          </button>
          <button
            onClick={resetTimer}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <RotateCcw size={18} />
            <span>Reset</span>
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {isBreak ? 'Take a short break!' : 'Stay focused and productive!'}
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;