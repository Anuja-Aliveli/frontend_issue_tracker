// App.js
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Card,
  CardContent,
  CardMedia,
  Switch,
  Typography,
} from '@mui/material';

export default function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <p>Hello</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh', // Ensure the container takes up the full viewport height
          justifyContent: 'center', // Center the content vertically
          backgroundColor: darkTheme.palette.background.default, // Set background color
        }}>
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        <Card sx={{ width: '30%', borderRadius: 3, padding: 1 }}>
          <CardContent>
            <CardMedia
              sx={{ height: 180, borderRadius: 3 }}
              image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
              title="semaphore"
            />
            <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
              Programming Blogs
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              by Semaphore
            </Typography>
            <Typography variant="body1">
              Checkout the latest blogs on Semaphore. Semaphore provides you the
              best CI/CD solution for high-performance engineering teams.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}
