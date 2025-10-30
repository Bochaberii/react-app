# 🎨 React.js Task Manager - Week 3 Assignment

A modern, responsive task management application built with React.js, JSX, and Tailwind CSS. This project demonstrates component architecture, state management, hooks usage, and API integration.

## 🌐 Live Demo

🚀 **Deployed Application**: [Add your Vercel URL here]

_Example: https://your-app-name.vercel.app_

> **Note**: Replace the placeholder above with your actual Vercel deployment URL after deploying your application.

## 🚀 Features

### ✅ Completed Features

- **Task Management**: Add, complete, delete, and filter tasks
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **API Integration**: Displays curated programming articles
- **Local Storage**: Tasks persist between browser sessions
- **Component Architecture**: Reusable components with proper separation of concerns

### 🧩 Components

- **Button**: Customizable button with variants (primary, secondary, danger) and sizes
- **Card**: Flexible content container with optional titles
- **Header**: Navigation header with theme toggle
- **Footer**: Site footer with links and copyright information
- **TaskManager**: Complete task management interface with filtering
- **ApiData**: Displays programming articles with search functionality
- **ThemeContext**: Global theme state management

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## 📦 Project Structure

```
assignment-3/
├── public/
├── src/
│   ├── components/
│   │   ├── ApiData.jsx       # Programming articles display
│   │   ├── Button.jsx        # Reusable button component
│   │   ├── Card.jsx          # Content container component
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Home.jsx          # Home page content
│   │   └── TaskManager.jsx   # Task management interface
│   ├── contexts/
│   │   └── ThemeContext.jsx  # Theme state management
│   ├── lib/
│   │   └── api.js           # API utilities
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Assignment Requirements Fulfilled

### Task 1: Project Setup ✅

- ✅ React application created using Vite
- ✅ Tailwind CSS installed and configured
- ✅ Proper project structure with components and utility folders
- ⚠️ Basic routing (not implemented - using single page application)

### Task 2: Component Architecture ✅

- ✅ Button component with variants (primary, secondary, danger)
- ✅ Card component for content display
- ✅ Header component for navigation
- ✅ Footer component with links and copyright
- ✅ Components are reusable and customizable with props

### Task 3: State Management and Hooks ✅

- ✅ TaskManager with add, complete, delete, and filter functionality
- ✅ `useState` for component state management
- ✅ `useEffect` for side effects and localStorage
- ✅ `useContext` for theme management
- ✅ Custom hook `useLocalStorageTasks` for task persistence

### Task 4: API Integration ✅

- ✅ Displays curated programming-related content
- ✅ Loading and error states implemented
- ✅ Search functionality for filtering content
- ✅ Responsive grid layout for content display

### Task 5: Styling with Tailwind CSS ✅

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/light mode theme switcher
- ✅ Utility classes for layout, spacing, typography
- ✅ Smooth transitions and hover effects

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone [your-repository-url]
   cd assignment-3
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
   - Navigate to `http://localhost:5173`
   - The application should load automatically

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Usage

### Task Management

1. **Add Task**: Type in the input field and click "Add" or press Enter
2. **Complete Task**: Click the checkbox next to any task
3. **Delete Task**: Click the "Delete" button on any task
4. **Filter Tasks**: Use "All", "Active", or "Completed" filter buttons

### Theme Switching

- Click the theme toggle button in the header (🌙/☀️)
- Theme preference is automatically saved to localStorage
- All components support both light and dark modes

### Programming Articles

- Browse curated programming articles in the API section
- Use the search bar to filter articles by title, content, or category
- Articles include difficulty levels and read time estimates

## 🌟 Key Features Explained

### Dark Mode Implementation

The application uses Tailwind CSS's class-based dark mode:

- Theme state managed globally with React Context
- Dark class applied to document root element
- All components use `dark:` prefixed classes for dark mode styles

### Local Storage Persistence

Tasks are automatically saved to browser localStorage:

- Custom hook `useLocalStorageTasks` handles persistence
- Data survives page refreshes and browser restarts
- Error handling for localStorage failures

### Responsive Design

Mobile-first approach with Tailwind breakpoints:

- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)

## 🔧 Technical Decisions

### Why These Technologies?

- **Vite**: Fast development server and build tool
- **Tailwind CSS v4**: Latest version with improved performance
- **React Context**: Simple state management for theme
- **Custom Hooks**: Reusable logic for localStorage integration

### Code Organization

- Components are focused and single-responsibility
- Context providers wrap the entire application
- Styles use Tailwind utilities with minimal custom CSS
- PropTypes removed for simplicity (beginner-friendly)

## 📱 Screenshots

### Light Mode

![Light Mode Screenshot](screenshots/light-mode.png)

### Dark Mode

![Dark Mode Screenshot](screenshots/dark-mode.png)

### Mobile View

![Mobile View Screenshot](screenshots/mobile-view.png)

## 🌐 Deployment

### Quick Deploy to Vercel (Recommended)

1. **Push your code to GitHub** (if not already done)

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**

   - Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy" - that's it!

3. **Update your README with the live URL**
   - Copy the deployment URL from Vercel
   - Paste it in the "Live Demo" section at the top of this README
   - Example: `https://your-task-manager.vercel.app`

### Alternative Deployment Options

- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for deployment

### 🎯 After Deployment

**Remember to update the Live Demo URL at the top of this README!**

## 🤝 Contributing

This is an educational project for PLP Academy. If you'd like to suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is part of the PLP Academy curriculum and is for educational purposes.

## 🙏 Acknowledgments

- **PLP Academy** for the comprehensive curriculum
- **Tailwind CSS** for the utility-first CSS framework
- **React Team** for the amazing frontend library
- **Vite Team** for the lightning-fast build tool

---

**Built with ❤️ by Sandra as part of PLP Academy Week 3 Assignment**
