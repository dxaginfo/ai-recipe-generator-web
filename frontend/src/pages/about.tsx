import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About | AI Recipe Generator</title>
        <meta name="description" content="Learn about the AI Recipe Generator platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About AI Recipe Generator
        </Typography>
        
        <Paper elevation={2} sx={{ p: 4, my: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            AI Recipe Generator was created to solve a common problem: You open your fridge and pantry, see a random assortment of ingredients, and wonder, "What can I make with this?"
          </Typography>
          <Typography variant="body1" paragraph>
            Our platform uses advanced artificial intelligence to create personalized recipes based on the ingredients you already have, while considering your dietary preferences, restrictions, and nutritional goals.
          </Typography>
          <Typography variant="body1">
            We believe that cooking should be accessible, flexible, and fun - without the need for last-minute grocery trips or food waste.
          </Typography>
        </Paper>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" component="h2" gutterBottom>
                How It Works
              </Typography>
              <Typography variant="body1" paragraph>
                1. <strong>Input your ingredients</strong> - Tell us what you have in your kitchen.
              </Typography>
              <Typography variant="body1" paragraph>
                2. <strong>Specify preferences</strong> - Let us know about any dietary restrictions or preferences.
              </Typography>
              <Typography variant="body1" paragraph>
                3. <strong>AI recipe generation</strong> - Our AI analyzes thousands of recipes and cooking techniques to create personalized recipes just for you.
              </Typography>
              <Typography variant="body1" paragraph>
                4. <strong>Nutritional analysis</strong> - View detailed nutritional information for each recipe.
              </Typography>
              <Typography variant="body1">
                5. <strong>Cook and enjoy</strong> - Follow the step-by-step instructions to prepare your meal.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" component="h2" gutterBottom>
                The Technology
              </Typography>
              <Typography variant="body1" paragraph>
                AI Recipe Generator uses state-of-the-art artificial intelligence and machine learning technologies to create unique, tasty recipes tailored to your specifications.
              </Typography>
              <Typography variant="body1" paragraph>
                Our AI model has been trained on thousands of recipes from diverse cuisines around the world, understanding the principles of flavor combinations, cooking techniques, and nutritional balance.
              </Typography>
              <Typography variant="body1">
                The result is a sophisticated system that can generate creative, practical, and delicious recipes from virtually any combination of ingredients.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      <Footer />
    </>
  );
}
