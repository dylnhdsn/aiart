import React from 'react';
import PromptInput from './components/Prompt';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import dylanTheme from './themes/dylan';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dylanTheme}>
      <CssBaseline />
      <PromptInput />
    </ThemeProvider>
  );
};

export default App;

