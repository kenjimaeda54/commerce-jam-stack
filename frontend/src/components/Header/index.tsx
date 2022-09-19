import React, { useState } from 'react';
import { Link } from 'gatsby';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import account from '../../images/account-header.svg';
import cart from '../../images/cart.svg';
import search from '../../images/search.svg';
import menu from '../../images/menu.svg';

interface HeaderProps {
  nodes: Nodes[];
}

type Nodes = {
  name: string;
  strapiId: string;
};

export default function Header({ nodes }: HeaderProps) {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const [isClose, setIsClose] = useState(false);
  const iOS =
    typeof navigator !== undefined &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const contactUs = {
    name: 'Contact Us',
    strapiId: '343contactUs',
  };

  const fontTabs = {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    textTransform: 'uppercase',
  };

  const navigationLink = [
    { id: 1, img: search, alt: 'search', navigate: '', visible: true },
    { id: 2, img: cart, alt: 'cart', navigate: '/cart', visible: true },
    {
      id: 3,
      img: account,
      alt: 'account',
      navigate: '/account',
      visible: !match,
    },
    {
      id: 4,
      img: menu,
      navigate: '',
      alt: 'menu',
      visible: match,
      onClick: () => handleSwipeableDrawer(),
    },
  ];

  const navigation = [...nodes, contactUs];

  const handleSwipeableDrawer = () => setIsClose((old) => !old);

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">VAR X</Typography>
        </Button>
        <Tabs
          sx={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          value={0}
        >
          {navigation.map((it) => (
            <Tab
              value={it.strapiId}
              sx={fontTabs}
              label={it.name}
              key={it.strapiId}
            />
          ))}
        </Tabs>
        {navigationLink.map((it) => {
          if (it.visible) {
            return (
              <IconButton
                onClick={it.onClick}
                to={it.navigate}
                component={Link}
                key={it.id}
              >
                <img src={it.img} alt={it.alt} />
              </IconButton>
            );
          }
        })}
      </Toolbar>
      <SwipeableDrawer
        open={isClose}
        onClose={handleSwipeableDrawer}
        onOpen={handleSwipeableDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <List>
          {navigation.map((it) => (
            <ListItem key={it.strapiId}>
              <ListItemText primary={it.name} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
