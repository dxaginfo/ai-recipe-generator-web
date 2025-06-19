import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Recipe Generator</title>
        <meta name="description" content="Generate recipes from your ingredients using AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            AI Recipe Generator
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
            Turn your ingredients into delicious meals with AI
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  How It Works
                </Typography>
                <Typography paragraph>
                  1. Enter the ingredients you have available
                </Typography>
                <Typography paragraph>
                  2. Specify any dietary preferences or restrictions
                </Typography>
                <Typography paragraph>
                  3. Let our AI create personalized recipes just for you
                </Typography>
                <Typography paragraph>
                  4. Enjoy your meal and save recipes you love
                </Typography>
                <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                  Get Started
                </Button>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Features
                </Typography>
                <Typography paragraph>
                  ✓ AI-powered recipe generation
                </Typography>
                <Typography paragraph>
                  ✓ Dietary customization (vegan, keto, gluten-free, etc.)
                </Typography>
                <Typography paragraph>
                  ✓ Nutritional information and analysis
                </Typography>
                <Typography paragraph>
                  ✓ Meal planning and ingredient optimization
                </Typography>
                <Button variant="outlined" color="primary" size="large" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
