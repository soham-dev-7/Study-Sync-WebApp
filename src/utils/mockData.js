export const mockUser = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  bio: 'Computer Science student passionate about productivity and learning.',
  totalStudyTime: 1250, // minutes
  currentStreak: 7,
  studyGoal: 120, // minutes per day
  joinDate: '2024-01-15',
};

export const mockStudyGroups = [
  {
    id: '1',
    name: 'CS Study Group',
    description: 'Computer Science students studying together for finals',
    members: 12,
    isJoined: true,
    avatar: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastActivity: '2 minutes ago',
    onlineMembers: 5,
    category: 'Computer Science',
  },
  {
    id: '2',
    name: 'Math Masters',
    description: 'Advanced mathematics problem solving and discussion',
    members: 8,
    isJoined: true,
    avatar: 'https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastActivity: '15 minutes ago',
    onlineMembers: 3,
    category: 'Mathematics',
  },
  {
    id: '3',
    name: 'Literature Circle',
    description: 'Discussing classic and modern literature',
    members: 15,
    isJoined: false,
    avatar: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastActivity: '1 hour ago',
    onlineMembers: 2,
    category: 'Literature',
  },
  {
    id: '4',
    name: 'Physics Study Hall',
    description: 'Exploring the wonders of physics together',
    members: 10,
    isJoined: false,
    avatar: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=150',
    lastActivity: '3 hours ago',
    onlineMembers: 1,
    category: 'Physics',
  },
];

export const mockChatMessages = [
  {
    id: '1',
    user: 'Sarah Kim',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    message: 'Hey everyone! Ready for today\'s study session?',
    timestamp: '10:30 AM',
    isOwn: false,
  },
  {
    id: '2',
    user: 'Mike Chen',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
    message: 'Absolutely! I\'ve got my notes ready for the algorithm chapter.',
    timestamp: '10:32 AM',
    isOwn: false,
  },
  {
    id: '3',
    user: 'You',
    avatar: mockUser.avatar,
    message: 'Same here! Let\'s start with the sorting algorithms.',
    timestamp: '10:35 AM',
    isOwn: true,
  },
  {
    id: '4',
    user: 'Emma Wilson',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    message: 'I have some great resources to share. Let me upload them.',
    timestamp: '10:38 AM',
    isOwn: false,
  },
];

export const mockStudyData = [
  { date: 'Mon', minutes: 95, day: 'Monday' },
  { date: 'Tue', minutes: 120, day: 'Tuesday' },
  { date: 'Wed', minutes: 85, day: 'Wednesday' },
  { date: 'Thu', minutes: 140, day: 'Thursday' },
  { date: 'Fri', minutes: 110, day: 'Friday' },
  { date: 'Sat', minutes: 75, day: 'Saturday' },
  { date: 'Sun', minutes: 90, day: 'Sunday' },
];

export const mockMonthlyData = [
  { month: 'Jan', hours: 45 },
  { month: 'Feb', hours: 52 },
  { month: 'Mar', hours: 38 },
  { month: 'Apr', hours: 61 },
  { month: 'May', hours: 55 },
  { month: 'Jun', hours: 67 },
];

export const mockSubjectData = [
  { subject: 'Computer Science', hours: 45, color: '#3B82F6' },
  { subject: 'Mathematics', hours: 32, color: '#8B5CF6' },
  { subject: 'Physics', hours: 28, color: '#10B981' },
  { subject: 'Literature', hours: 18, color: '#F59E0B' },
];

export const mockCalendarData = [
  { date: '2024-01-15', minutes: 120 },
  { date: '2024-01-16', minutes: 95 },
  { date: '2024-01-17', minutes: 140 },
  { date: '2024-01-18', minutes: 85 },
  { date: '2024-01-19', minutes: 110 },
  { date: '2024-01-20', minutes: 75 },
  { date: '2024-01-21', minutes: 90 },
];