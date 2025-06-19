# AI Recipe Generator

A web platform that creates personalized recipes based on available ingredients and dietary constraints using artificial intelligence.

## Project Overview

The AI Recipe Generator is a web application designed to help users create delicious meals using ingredients they already have on hand. By leveraging AI technology, the platform generates customized recipes that accommodate dietary preferences, restrictions, and nutritional goals.

### Key Features

- **Ingredient-Based Recipe Generation**: Enter the ingredients you have available, and the AI will create suitable recipes.
- **Dietary Customization**: Specify preferences (vegetarian, vegan, keto, etc.) and allergies/restrictions.
- **Nutritional Analysis**: View detailed nutritional information for each recipe.
- **Meal Planning**: Plan multiple meals to optimize ingredient usage and meet nutritional goals.
- **Recipe Saving & Sharing**: Save favorite recipes and share them with friends.

## Technology Stack

- **Frontend**: React.js with Next.js, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: OpenAI API
- **Authentication**: Auth0
- **Deployment**: Vercel (frontend), Heroku (backend)

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB
- OpenAI API key

### Installation

1. Clone the repository
   ```
   git clone https://github.com/dxaginfo/ai-recipe-generator-web.git
   cd ai-recipe-generator-web
   ```

2. Install dependencies
   ```
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Set up environment variables
   ```
   # Create .env files in both frontend and backend directories
   # Add necessary environment variables (database connection, API keys, etc.)
   ```

4. Start the development servers
   ```
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server
   cd frontend
   npm run dev
   ```

## Project Structure

```
ai-recipe-generator-web/
├── frontend/              # Next.js React application
│   ├── components/        # UI components
│   ├── pages/             # Page components and routes
│   ├── public/            # Static assets
│   ├── styles/            # CSS/SCSS styles
│   └── utils/             # Utility functions
├── backend/               # Express.js server
│   ├── controllers/       # Request handlers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   └── utils/             # Utility functions
└── docs/                  # Documentation
```

## API Endpoints

- `POST /api/recipes/generate` - Generate recipes based on ingredients
- `GET /api/recipes` - Get saved recipes
- `POST /api/recipes` - Save a recipe
- `GET /api/ingredients` - Get ingredient database
- `POST /api/meal-plan` - Create a meal plan

## Contributing

We welcome contributions to the AI Recipe Generator project! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the AI capabilities
- All contributors who help make this project better

## Contact

Project Link: [https://github.com/dxaginfo/ai-recipe-generator-web](https://github.com/dxaginfo/ai-recipe-generator-web)