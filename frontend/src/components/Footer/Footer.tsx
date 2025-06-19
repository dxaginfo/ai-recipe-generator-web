import { Box, Container, Typography, Link as MuiLink } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          AI Recipe Generator
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Turn your ingredients into delicious meals with AI
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' '}
          <MuiLink color="inherit" href="https://github.com/dxaginfo/ai-recipe-generator-web">
            AI Recipe Generator
          </MuiLink>
          {' | All Rights Reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
