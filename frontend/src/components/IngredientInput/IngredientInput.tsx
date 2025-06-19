import { useState } from 'react';
import { 
  Paper, 
  TextField, 
  Button, 
  Chip, 
  Box, 
  Typography, 
  Autocomplete,
  Grid
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Mock data - would come from API in real implementation
const commonIngredients = [
  'Chicken',
  'Beef',
  'Rice',
  'Pasta',
  'Tomatoes',
  'Onions',
  'Garlic',
  'Potatoes',
  'Carrots',
  'Bell Peppers',
  'Broccoli',
  'Spinach',
  'Eggs',
  'Milk',
  'Cheese',
  'Butter',
  'Olive Oil',
  'Salt',
  'Pepper',
  'Flour'
];

interface IngredientInputProps {
  onGenerateRecipe: (ingredients: string[], preferences: string[]) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onGenerateRecipe }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);

  const addIngredient = () => {
    if (currentIngredient && !ingredients.includes(currentIngredient)) {
      setIngredients([...ingredients, currentIngredient]);
      setCurrentIngredient('');
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(item => item !== ingredient));
  };

  const handleDietaryChange = (_: any, newValue: string[]) => {
    setDietaryPreferences(newValue);
  };

  const handleSubmit = () => {
    if (ingredients.length > 0) {
      onGenerateRecipe(ingredients, dietaryPreferences);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        What ingredients do you have?
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Autocomplete
            freeSolo
            options={commonIngredients}
            value={currentIngredient}
            onChange={(_, newValue) => setCurrentIngredient(newValue || '')}
            inputValue={currentIngredient}
            onInputChange={(_, newInputValue) => setCurrentIngredient(newInputValue)}
            renderInput={(params) => (
              <TextField 
                {...params} 
                label="Enter an ingredient" 
                variant="outlined" 
                fullWidth
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addIngredient();
                  }
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button 
            variant="contained" 
            onClick={addIngredient} 
            startIcon={<AddIcon />}
            fullWidth
            sx={{ height: '100%' }}
          >
            Add Ingredient
          </Button>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 2, mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Your ingredients:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <Chip 
                key={ingredient} 
                label={ingredient} 
                onDelete={() => removeIngredient(ingredient)} 
                color="primary" 
                variant="outlined"
              />
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No ingredients added yet. Add some to get started!
            </Typography>
          )}
        </Box>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Dietary preferences (optional):
        </Typography>
        <Autocomplete
          multiple
          options={['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'keto', 'paleo', 'low-carb', 'low-fat']}
          value={dietaryPreferences}
          onChange={handleDietaryChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Select dietary preferences"
            />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
                color="secondary"
              />
            ))
          }
        />
      </Box>
      
      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        onClick={handleSubmit}
        disabled={ingredients.length === 0}
        fullWidth
      >
        Generate Recipe
      </Button>
    </Paper>
  );
};

export default IngredientInput;
