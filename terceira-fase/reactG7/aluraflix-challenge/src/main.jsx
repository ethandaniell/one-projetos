import React from "react";
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.jsx'
import GlobalStyles from "./styles/GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme.js";
import { VideoProvider } from "./contexts/VideoContext.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <VideoProvider>
        <AppRoutes />
      </VideoProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
