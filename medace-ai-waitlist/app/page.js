"use client"; // Ensure this is the first line in the file

import { useState } from 'react';
import { Box, Typography, Button, Container, TextField } from '@mui/material';
import { firestore } from '@/firebase'; // Adjust the import path if necessary
import { collection, addDoc } from 'firebase/firestore';
import Navbar from './components/Navbar';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Define handleSubmit as an async function
  const handleSubmit = async () => {
    if (email) {
      try {
        // Add email to Firestore
        await addDoc(collection(firestore, 'waitlist'), { email });
        setSubmitted(true);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <Box>
      <Navbar />
      <Container
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly lighter background for contrast
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: 4,
          padding: 4,
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Zero Anxiety, Full Confidence: Show Up Ready and Ace Your Med School Interview
        </Typography>
        <Typography variant="body1" gutterBottom>
          Imagine this, you are sitting down, having a real face to face conversation with an AI Interviewer, tailored to mimic the exact style and question of the med school you are aiming for. You'll get feedback and a score, helping you improve with every session. Make this a reality with MedAce: Your AI-Powered Path to Acceptance!
        </Typography>
        {submitted ? (
          <Typography variant="h6" color="primary">
            Thank you for signing up! We'll keep you updated.
          </Typography>
        ) : (
          <>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                padding: '10px 20px',
                fontSize: '1rem',
              }}
            >
              Join Waitlist
            </Button>
          </>
        )}
      </Container>
    </Box>
  );
}
