"use client"; // Ensure this is the first line in the file

import { useState } from 'react';
import { Box, Typography, Button, Container, TextField, CssBaseline, AppBar, Toolbar, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { firestore } from '@/firebase'; // Adjust the import path if necessary
import { collection, addDoc } from 'firebase/firestore';
import Image from 'next/image'; // Importing Next.js Image component
import '@fontsource/raleway'; // Importing Raleway font
import '@fontsource/roboto'; // Importing Roboto font
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Doctor/Medical blue
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#E3F2FD', // Light blue background to fit medical theme
    },
    text: {
      primary: '#000000',
      secondary: '#565656',
    },
  },
  typography: {
    fontFamily: 'Raleway, Roboto, sans-serif',
    h1: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 800,
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#1976d2',
    },
    h6: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 500,
      color: '#565656',
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      lineHeight: 1.6,
      color: '#565656',
    },
    button: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
});

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (email) {
      try {
        await addDoc(collection(firestore, 'waitlist'), { email });
        setSubmitted(true);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', backgroundColor: theme.palette.background.default }}>
        <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none', padding: '0.5rem 2rem' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
              MedAce AI
            </Typography>
            <Box>
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
                style={{ height: 'auto' }}  // Keep custom styles if necessary
              />
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #6B73FF 10%, #000DFF 100%)',
            animation: 'bg-animation 15s ease infinite',
            '@keyframes bg-animation': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
        >
          <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, overflow: 'hidden' }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: '2px',
                  height: '100px',
                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
                  opacity: 0.8,
                  transform: 'rotate(-45deg)',
                  animation: `shootingStar 2s ${Math.random() * 5}s linear infinite`,
                  '@keyframes shootingStar': {
                    '0%': { opacity: 0, transform: 'translateY(0) translateX(0) rotate(-45deg)' },
                    '50%': { opacity: 1 },
                    '100%': { opacity: 0, transform: 'translateY(-100px) translateX(100px) rotate(-45deg)' },
                  },
                }}
              />
            ))}
          </Box>
          <Container
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              borderRadius: 4,
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '600px',
              animation: 'fadeIn 1s ease-in-out',
              '@keyframes fadeIn': {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            <Typography variant="h1" component="h1" gutterBottom>
              Zero Anxiety, Full Confidence
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              Show Up Ready and Ace Your Med School Interview
            </Typography>
            <Typography variant="body1" gutterBottom>
              Imagine this: you&apos;re having a face-to-face conversation with an AI Interviewer, perfectly tailored to mirror the style and questions of your dream med school. Receive instant feedback and scores to elevate your performance with every session. Turn this vision into reality with MedAce: Your AI-Powered Path to Success!
            </Typography>
            {submitted ? (
              <Typography variant="h6" color="primary" sx={{ marginTop: 2 }}>
                Thank you for signing up! We will keep you updated.
              </Typography>
            ) : (
              <>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    marginBottom: 2,
                    maxWidth: '400px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#1976d2',
                      },
                      '&:hover fieldset': {
                        borderColor: '#004182',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{
                    padding: '12px 24px',
                    fontSize: '1rem',
                    marginTop: 2,
                    borderRadius: '999px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#004182',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Join Waitlist
                </Button>
              </>
            )}
          </Container>
        </Box>
        <Box sx={{ backgroundColor: '#FFFFFF', padding: 2, marginTop: 'auto', boxShadow: '0 -1px 5px rgba(0,0,0,0.1)' }}>
          <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ color: '#565656' }}>
              &copy; 2024 MedAce AI. All rights reserved.
            </Typography>
            <IconButton
              href="https://www.linkedin.com/company/medace-ai" // Replace with your actual LinkedIn URL
              target="_blank"
              rel="noopener"
              sx={{ color: '#1976d2' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
