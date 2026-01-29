import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ChatMessage from '../components/ChatMessage';
import { mockStudyGroups, mockChatMessages } from '../utils/mockData';
import { 
  Send, 
  Paperclip, 
  Users, 
  Clock, 
  Play, 
  Pause,
  Upload,
  Download,
  Mic,
  Video,
  Settings
} from 'lucide-react';

const GroupRoom = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [isStudySessionActive, setIsStudySessionActive] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [showFileUpload, setShowFileUpload] = useState(false);

  const group = mockStudyGroups.find(g => g.id === id);
  
  if (!group) {
    return <div>Group not found</div>;
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const toggleStudySession = () => {
    setIsStudySessionActive(!isStudySessionActive);
    if (!isStudySessionActive) {
      // Start timer simulation
      const interval = setInterval(() => {
        setSessionTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Group Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={group.avatar}
                alt={group.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {group.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  {group.description}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{group.members} members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{group.onlineMembers} online</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Mic size={20} className="text-gray-600 dark:text-gray-300" />
              </button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Video size={20} className="text-gray-600 dark:text-gray-300" />
              </button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Settings size={20} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Study Session Control */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Study Session
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock size={16} />
                  <span>{formatTime(sessionTime)}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={toggleStudySession}
                  className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                    isStudySessionActive
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {isStudySessionActive ? <Pause size={20} /> : <Play size={20} />}
                  <span>{isStudySessionActive ? 'End Session' : 'Start Study Session'}</span>
                </button>
                
                {isStudySessionActive && (
                  <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Session Active</span>
                  </div>
                )}
              </div>
            </div>

            {/* Chat Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-96 flex flex-col">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Group Chat
                </h2>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {mockChatMessages.map((message) => (
                  <ChatMessage key={message.id} message={message} isOwn={message.isOwn} />
                ))}
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowFileUpload(true)}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <Paperclip size={20} />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Online Members */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Online Members ({group.onlineMembers})
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Sarah Kim', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'studying' },
                  { name: 'Mike Chen', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'online' },
                  { name: 'Emma Wilson', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150', status: 'break' },
                ].map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                        member.status === 'studying' ? 'bg-blue-500' :
                        member.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {member.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {member.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shared Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Shared Resources
                </h3>
                <button
                  onClick={() => setShowFileUpload(true)}
                  className="p-1 text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Upload size={16} />
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Algorithm Notes.pdf', size: '2.4 MB', type: 'pdf' },
                  { name: 'Practice Problems.docx', size: '1.8 MB', type: 'doc' },
                  { name: 'Study Guide.md', size: '156 KB', type: 'text' },
                ].map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {file.size}
                      </p>
                    </div>
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* File Upload Modal */}
      {showFileUpload && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Upload File
            </h3>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Drag and drop your file here, or click to browse
              </p>
              <input type="file" className="hidden" />
              <button className="text-blue-500 hover:text-blue-600 transition-colors">
                Choose File
              </button>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowFileUpload(false)}
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowFileUpload(false)}
                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupRoom;