import React from 'react';
import { Container, Typography } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" align="justify">
      A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.
      </Typography>
    </Container>
  );
}

export default About;