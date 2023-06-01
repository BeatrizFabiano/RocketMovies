import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';
import { Signin } from './pages/Signin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Signin />
    </ThemeProvider>
  </React.StrictMode>
);
