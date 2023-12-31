import React, { useEffect, useState } from 'react';
import './App.css';
import '@mui/material/styles';
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'light' ? 'rgba(203, 214, 211, 0.715)' : 'text-primary',
        paper: mode === 'light' ? 'rgba(203, 214, 211, 0.715)' : 'text-primary',
      },
    },
  });

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleMode={toggleMode} mode={mode} />
      <div className="max-w-7xl mx-auto">
        <Home toggleMode={toggleMode} mode={mode} />
        <About toggleMode={toggleMode} mode={mode} />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
