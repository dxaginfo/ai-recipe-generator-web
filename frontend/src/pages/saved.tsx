import { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import Head from 'next/head';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Mock saved recipes data - would come from API in real implementation
const mockSavedRecipes = [
  {
    title: 'Vegetable Stir Fry with Rice',
    imageUrl: 'https://source.unsplash.com/random/300x200/?stirfry',
    preparationTime: 15,
    cookingTime: 20,
    servings: 4,
    dietaryInfo: ['vegetarian', 'dairy-free'],
    nutrition: {
      calories: 320,
      protein: 12,
      carbs: 45,
      fat: 9
    }
  },
  {
    title: 'Spinach and Feta Omelette',
    imageUrl: 'https://source.unsplash.com/random/300x200/?omelette',
    preparationTime: 5,
    cookingTime: 10,
    servings: 1,
    dietaryInfo: ['vegetarian', 'gluten-free', 'keto'],
    nutrition: {
      calories: 280,
      protein: 18,
      carbs: 3,
      fat: 22
    }
  },
  {
    title: 'Chicken Quinoa Bowl',
    imageUrl: 'https://source.unsplash.com/random/300x200/?quinoa',
    preparationTime: 10,
    cookingTime: 25,
    servings: 2,
    dietaryInfo: ['gluten-free', 'dairy-free'],
    nutrition: {
      calories: 420,
      protein: 32,
      carbs: 45,
      fat: 12
    }
  }
];

export default function SavedRecipesPage() {
  const [savedRecipes, setSavedRecipes] = useState<any[]>([]);

  useEffect(() => {
    // Simulate API call to fetch saved recipes
    // In a real app, this would be an actual API call
    setTimeout(() => {
      setSavedRecipes(mockSavedRecipes);
    }, 500);
  }, []);

  const handleRemoveRecipe = (index: number) => {
    // Would implement actual removal in a real app
    const newSavedRecipes = [...savedRecipes];
    newSavedRecipes.splice(index, 1);
    setSavedRecipes(newSavedRecipes);
  };

  const handleViewDetails = (recipe: any) => {
    // Would navigate to recipe details page in a real app
    alert(`Viewing details for "${recipe.title}"`);
  };

  return (
    <>
      <Head>
        <title>Saved Recipes | AI Recipe Generator</title>
        <meta name="description" content="View and manage your saved recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Saved Recipes
        </Typography>
        
        {savedRecipes.length > 0 ? (
          <Grid container spacing={4}>
            {savedRecipes.map((recipe, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <RecipeCard 
                  recipe={recipe} 
                  onViewDetails={() => handleViewDetails(recipe)}
                  onSaveRecipe={() => handleRemoveRecipe(index)}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', my: 6 }}>
            <Typography variant="h6" gutterBottom>
              No saved recipes yet
            </Typography>
            <Typography variant="body1" paragraph>
              Generate some recipes and save your favorites to see them here.
            </Typography>
            <Button variant="contained" href="/generate">
              Generate Recipes
            </Button>
          </Box>
        )}
      </Container>
      
      <Footer />
    </>
  );
}
