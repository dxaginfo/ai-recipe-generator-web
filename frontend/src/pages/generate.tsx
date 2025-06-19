import { useState } from 'react';
import { Container, Typography, Box, Grid, CircularProgress } from '@mui/material';
import Head from 'next/head';
import IngredientInput from '../components/IngredientInput/IngredientInput';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Mock recipe data - would come from API in real implementation
const mockRecipe = {
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
};

export default function GeneratePage() {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);

  const handleGenerateRecipe = async (ingredients: string[], preferences: string[]) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real implementation, this would be an API call to the backend
      setRecipes([mockRecipe, {...mockRecipe, title: 'Spicy Vegetable Curry'}]);
      setLoading(false);
    }, 2000);
  };

  const handleSaveRecipe = (recipe: any) => {
    // Would implement actual saving functionality in a real app
    alert(`Recipe "${recipe.title}" saved!`);
  };

  const handleViewDetails = (recipe: any) => {
    // Would navigate to recipe details page in a real app
    alert(`Viewing details for "${recipe.title}"`);
  };

  return (
    <>
      <Head>
        <title>Generate Recipes | AI Recipe Generator</title>
        <meta name="description" content="Generate personalized recipes from your available ingredients" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Generate Personalized Recipes
        </Typography>
        <Typography variant="body1" paragraph>
          Enter the ingredients you have on hand, and our AI will create customized recipes just for you.
        </Typography>
        
        <IngredientInput onGenerateRecipe={handleGenerateRecipe} />
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
            <Typography variant="body1" sx={{ ml: 2 }}>
              Generating delicious recipes...
            </Typography>
          </Box>
        ) : recipes.length > 0 ? (
          <>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              Generated Recipes
            </Typography>
            <Grid container spacing={4}>
              {recipes.map((recipe, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <RecipeCard 
                    recipe={recipe} 
                    onViewDetails={() => handleViewDetails(recipe)}
                    onSaveRecipe={() => handleSaveRecipe(recipe)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        ) : null}
      </Container>
      
      <Footer />
    </>
  );
}
