import './App.css';
import TopBar from './components/Top-bar/top-bar';
import AboutMe from './components/AboutMe/AboutMe';
import Project from './components/Projects/Projects';
import { useLocalStorage } from './components/hooks/useLocalStorage';
import ThemeToggle from './components/toggle-button/ToggleButton';
import GhStats from './components/Github-Stats/GhStats';
import FollowMe from './components/FollowMe/FollowMe';
import EmptySpace from './components/EmptySpace.tsx/EmptySpace';

function App() {
  const [isDark, setIsDark] = useLocalStorage("theme", false);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <div className='App' data-theme={isDark ? 'dark' : 'light'}>
      
      <div className='topbar-container2'>
      <TopBar />
      <ThemeToggle handleChange={toggleTheme} isChecked={isDark} />
      </div>

      <AboutMe />
      <Project />
      <GhStats />
      <FollowMe />
      <EmptySpace height={40} />
    </div>
  );
}

export default App;
