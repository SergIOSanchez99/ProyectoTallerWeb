import { Box, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const menuItems = [
  { text: 'Asociar Componente a Competencia', path: '/competencias/asociar' },
];

export const CompetenciasLayout = ({ children }) => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box sx={{ width: 220, bgcolor: '#1a237e', color: 'white', p: 2 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                sx={{
                  bgcolor: location.pathname === item.path ? '#3949ab' : 'inherit',
                  borderRadius: 1,
                  mb: 1,
                  color: 'white',
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2, bgcolor: 'white' }} />
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 4, bgcolor: '#fafafa' }}>
        {children}
      </Box>
    </Box>
  );
};

CompetenciasLayout.propTypes = {
  children: PropTypes.node,
}; 