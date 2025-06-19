import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              AI Recipe Generator
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit">
              <Link href="/generate" style={{ textDecoration: 'none', color: 'inherit' }}>
                Generate Recipes
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/saved" style={{ textDecoration: 'none', color: 'inherit' }}>
                Saved Recipes
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                About
              </Link>
            </Button>
            <Button color="inherit" variant="outlined">
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
