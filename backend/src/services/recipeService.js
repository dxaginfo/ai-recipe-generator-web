const { Configuration, OpenAIApi } = require('openai');

// This would normally be loaded from environment variables
let openaiApiKey = process.env.OPENAI_API_KEY || 'your-api-key';

const configuration = new Configuration({
  apiKey: openaiApiKey,
});

const openai = new OpenAIApi(configuration);

/**
 * Generate recipes based on available ingredients and preferences
 * @param {Array} ingredients - List of available ingredients
 * @param {Object} preferences - Dietary preferences and restrictions
 * @returns {Promise<Array>} - List of generated recipes
 */
async function generateRecipes(ingredients, preferences) {
  try {
    // Format the ingredients and preferences for the AI prompt
    const ingredientsList = ingredients.join(', ');
    
    // Build the dietary restrictions string
    let dietaryInfo = '';
    if (preferences?.dietary?.length > 0) {
      dietaryInfo = `Dietary preferences: ${preferences.dietary.join(', ')}. `;
    }
    
    // Build the allergies string
    let allergiesInfo = '';
    if (preferences?.allergies?.length > 0) {
      allergiesInfo = `Allergies (must exclude): ${preferences.allergies.join(', ')}. `;
    }
    
    // Create the prompt for the AI
    const prompt = `Create a detailed recipe using some or all of these ingredients: ${ingredientsList}. ${dietaryInfo}${allergiesInfo}\n\nProvide the recipe in the following JSON format:\n{\n  "title": "Recipe Name",\n  "ingredients": [\n    {\n      "name": "Ingredient Name",\n      "quantity": "Amount",\n      "unit": "Measurement Unit"\n    }\n  ],\n  "instructions": [\n    "Step 1 instruction",\n    "Step 2 instruction"\n  ],\n  "preparationTime": minutesAsNumber,\n  "cookingTime": minutesAsNumber,\n  "servings": numberOfServingsAsNumber,\n  "nutrition": {\n    "calories": caloriesPerServingAsNumber,\n    "protein": gramsAsNumber,\n    "carbs": gramsAsNumber,\n    "fat": gramsAsNumber\n  },\n  "dietaryInfo": ["tag1", "tag2"]\n}`;

    // Call the OpenAI API
    const response = await openai.createCompletion({
      model: "text-davinci-003", // or use a more advanced model like GPT-4 if available
      prompt: prompt,
      max_tokens: 1000,
      temperature: 0.7,
    });

    // Parse the response
    const recipeText = response.data.choices[0].text.trim();
    let recipe;
    
    try {
      recipe = JSON.parse(recipeText);
    } catch (error) {
      console.error('Error parsing recipe JSON:', error);
      // Attempt to extract JSON from the text if it's not properly formatted
      const jsonMatch = recipeText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        recipe = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Failed to parse recipe from AI response');
      }
    }

    return recipe;
  } catch (error) {
    console.error('Error generating recipe:', error);
    throw error;
  }
}

module.exports = {
  generateRecipes,
};
