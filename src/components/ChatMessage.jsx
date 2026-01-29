import React from 'react';

const ChatMessage = ({ message, isOwn }) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-xs lg:max-w-md ${isOwn ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
        <img
          src={message.avatar}
          alt={message.user}
          className="w-8 h-8 rounded-full"
        />
        <div className={`px-4 py-2 rounded-lg ${
          isOwn 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
        }`}>
          {!isOwn && (
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
              {message.user}
            </p>
          )}
          <p className="text-sm">{message.message}</p>
          <p className={`text-xs mt-1 ${
            isOwn ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
          }`}>
            {message.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;