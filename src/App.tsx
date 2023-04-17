import React, { useState } from 'react';
import PromptInput from './components/Prompt';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { solarizedLightTheme, solarizedDarkTheme } from './themes/solarized';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

const App: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');

  const handleThemeChange = () => {
    setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light');
  };

  const theme = createTheme(selectedTheme === 'light' ? solarizedLightTheme : solarizedDarkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: theme.palette.background.default }}>
        <PromptInput />
        <FormControlLabel
          control={<Switch checked={selectedTheme === 'dark'} onChange={handleThemeChange} />}
          label="Switch theme"
        />
      </div>
    </ThemeProvider>
  );
};

export default App;

