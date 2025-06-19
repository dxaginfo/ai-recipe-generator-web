import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip,
  Button,
  CardActions,
  Divider
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

interface RecipeCardProps {
  recipe: {
    title: string;
    imageUrl?: string;
    preparationTime: number;
    cookingTime: number;
    servings: number;
    dietaryInfo: string[];
    nutrition: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
  };
  onViewDetails: () => void;
  onSaveRecipe: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  recipe, 
  onViewDetails,
  onSaveRecipe 
}) => {
  const { 
    title, 
    imageUrl, 
    preparationTime, 
    cookingTime, 
    servings, 
    dietaryInfo, 
    nutrition 
  } = recipe;

  // Placeholder image if none provided
  const defaultImage = 'https://source.unsplash.com/random/300x200/?food,recipe';
  
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl || defaultImage}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          {dietaryInfo.map((diet) => (
            <Chip key={diet} label={diet} size="small" />
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {preparationTime + cookingTime} min
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocalDiningIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {servings} servings
            </Typography>
          </Box>
        </Box>
        
        <Divider sx={{ my: 1 }} />
        
        <Typography variant="subtitle2" gutterBottom>
          Nutrition per serving:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.secondary">
            Calories: {nutrition.calories}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Protein: {nutrition.protein}g
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Carbs: {nutrition.carbs}g
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fat: {nutrition.fat}g
          </Typography>
        </Box>
      </CardContent>
      
      <CardActions>
        <Button size="small" onClick={onSaveRecipe} startIcon={<FavoriteIcon />}>
          Save
        </Button>
        <Button size="small" startIcon={<ShareIcon />}>
          Share
        </Button>
        <Button size="small" color="primary" onClick={onViewDetails}>
          View Recipe
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
