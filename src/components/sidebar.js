// Sidebar.js
import React from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PrintIcon from '@mui/icons-material/Print';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* Dashboard */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('dashboard')}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        {/* Print Page */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('printpage')}>
            <ListItemIcon><PrintIcon /></ListItemIcon>
            <ListItemText primary="Print Page" />
          </ListItemButton>
        </ListItem>

        {/* Manage Employee */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('manage-employee')}>
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText primary="Quản lý nhân sự" />
          </ListItemButton>
        </ListItem>

        {/* Product */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('product')}>
            <ListItemIcon><CategoryIcon /></ListItemIcon>
            <ListItemText primary="Product" />
          </ListItemButton>
        </ListItem>

        <Divider />

        {/* Function Section */}
        <Typography variant="body2" sx={{ padding: '10px 16px', color: 'gray' }}>Function</Typography>
        <List sx={{ pl: 2 }}>
          {/* Register */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('register')}>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="Register" />
            </ListItemButton>
          </ListItem>

          {/* Login */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('login')}>
              <ListItemIcon><LoginIcon /></ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        </List>
      </List>
    </div>
  );
}

export default Sidebar;
