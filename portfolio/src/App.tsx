import './App.css';
import { useState } from 'react';
import TopBar from './components/Top-bar/top-bar';
import AboutMe from './components/AboutMe/AboutMe';
import Project from './components/Projects/Projects';
import { useLocalStorage } from './components/hooks/useLocalStorage';
import ThemeToggle from './components/toggle-button/ToggleButton';
import GhStats from './components/Github-Stats/GhStats';
import FollowMe from './components/FollowMe/FollowMe';
import EmptySpace from './components/EmptySpace.tsx/EmptySpace';
import TechStack from './components/TechStack/TechStack';

function App() {
  const [isDark, setIsDark] = useLocalStorage("theme", false);
  const [showPopup, setShowPopup] = useState(true);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (

    

    <div id='App' className='App' data-theme={isDark ? 'dark' : 'light'}>

      <div>
            {showPopup && (
              <div style={{
                position: "fixed",
                top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(0,0,0,0.6)",
                display: "flex", justifyContent: "center", alignItems: "center",
                zIndex: 9999   // 👈 ensures popup is above everything
              }}>
                <div style={{
                  background: "#f5f5f5ff",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                  maxWidth: "300px",
                  zIndex: 10000
                }}>
                  <h2> Work in Progress</h2>
                  <p>This Portfolio is not complete yet</p>
                  <button onClick={() => setShowPopup(false)}>👍</button>
                </div>
              </div>
            )}

          </div>


      <div className='topbar-container2'>
      <TopBar />
      <ThemeToggle handleChange={toggleTheme} isChecked={isDark} />
      </div>

      <AboutMe />
      <Project />
      <TechStack arr={["mongoDB", "express", "react", "nodejs", "typescript", "javascript", "html", "css", "git", "github", "redis"]} />
      <GhStats />
      <FollowMe />
      <EmptySpace height={40} />
    </div>
  );
}

export default App;
