# 📚 StudySync

<div align="center">

**The ultimate productivity platform for students. Track your study time, join study groups, and achieve your academic goals with our community-powered tools.**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure)

</div>

---

## ✨ Features

### 🎯 Core Features

- **⏱️ Pomodoro Timer** - Built-in focus timer with customizable work and break sessions to boost productivity
- **👥 Study Groups** - Join or create study groups with real-time chat and collaborative learning features
- **📊 Progress Analytics** - Track your study time, streaks, and progress with detailed charts and insights
- **🎯 Goal Setting** - Set daily and weekly study goals to stay motivated and on track
- **📅 Calendar Integration** - Visualize your study schedule and track your consistency
- **📈 Data Visualization** - Beautiful charts and graphs powered by Recharts
- **🌙 Dark Mode** - Seamless dark mode support for comfortable studying at any time
- **🏆 Achievement System** - Earn badges and maintain streaks to gamify your learning experience

### 📱 Pages

- **Landing Page** - Beautiful, modern landing page with feature highlights
- **Dashboard** - Comprehensive overview of your study progress and quick actions
- **Analytics** - Detailed insights into your study patterns and performance
- **Study Groups** - Browse and join study groups or create your own
- **Group Room** - Real-time collaborative study sessions with chat
- **Settings** - Customize your preferences and account settings
- **Authentication** - Secure login and signup pages

---

## 🚀 Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/studysync.git
   cd studysync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

---

## 💻 Usage

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check code quality |

---

## 🛠️ Tech Stack

### Frontend Framework & Libraries

- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **React Router DOM 6.26.1** - Client-side routing
- **Vite 5.4.2** - Build tool and dev server

### Styling

- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixing

### Data Visualization

- **Recharts 2.12.7** - Chart library for React

### Icons

- **Lucide React 0.344.0** - Beautiful icon library

### Development Tools

- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules

---

## 📁 Project Structure

```
studysync/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Calendar.jsx
│   │   ├── ChatMessage.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── PomodoroTimer.jsx
│   │   ├── StudyCard.jsx
│   │   └── StudyChart.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useTheme.jsx
│   ├── pages/             # Page components
│   │   ├── Analytics.jsx
│   │   ├── Dashboard.jsx
│   │   ├── GroupRoom.jsx
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── Settings.jsx
│   │   ├── SignupPage.jsx
│   │   └── StudyGroups.jsx
│   ├── utils/             # Utility functions and data
│   │   └── mockData.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   ├── main.tsx           # TypeScript entry point
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # Vite type definitions
├── .gitignore             # Git ignore rules
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Project dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # TypeScript app config
├── tsconfig.node.json     # TypeScript node config
└── vite.config.ts         # Vite configuration
```

---

## 🎨 Features in Detail

### Pomodoro Timer
- 25-minute focus sessions with 5-minute breaks
- Visual progress indicator
- Session tracking and completion counter
- Automatic break/work cycle switching

### Study Analytics
- Weekly, monthly, and yearly progress tracking
- Interactive charts (line, bar, and pie charts)
- Study pattern analysis
- Goal progress visualization
- Export functionality (PDF/CSV)

### Study Groups
- Create and join study groups
- Real-time chat functionality
- Resource sharing capabilities
- Collaborative learning environment

### Dashboard
- Quick stats overview
- Today's study time tracking
- Current streak display
- Weekly progress visualization
- Quick action buttons

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
# Example environment variables
VITE_API_URL=your_api_url_here
VITE_APP_NAME=StudySync
```

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### TypeScript

TypeScript configuration files:
- `tsconfig.json` - Main configuration
- `tsconfig.app.json` - Application-specific config
- `tsconfig.node.json` - Node.js-specific config

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow ESLint rules
- Use TypeScript for type safety
- Follow React best practices
- Write meaningful commit messages

---

## 📝 License

This project is private and not licensed for public use.

---

## 👤 Author

**Soham Wani**

- GitHub: [soham-dev-7](https://github.com/soham-dev-7?tab=repositories)
- Email: sohamwani020@gmail.com

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Recharts](https://recharts.org/) - Chart library
- [Lucide](https://lucide.dev/) - Icon library

---

## 📊 Project Status

🚧 **In Development** - This project is currently under active development.

---

<div align="center">

**Soham Wani Creation**

⭐ Star this repo if you find it helpful!

</div>
