import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import account from '../../images/account-header.svg';
import cart from '../../images/cart.svg';
import search from '../../images/search.svg';

interface HeaderProps {
  nodes: Nodes[];
}

type Nodes = {
  name: string;
  strapiId: string;
};

export default function Header({ nodes }: HeaderProps) {
  const contactUs = {
    name: 'Contact Us',
    strapiId: '343contactUs',
  };

  const fontTabs = {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    textTransform: 'uppercase',
  };

  const navigation = [...nodes, contactUs];

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
        <IconButton>
          <img src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img src={cart} alt="cart" />
        </IconButton>
        <IconButton>
          <img src={account} alt="account" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
