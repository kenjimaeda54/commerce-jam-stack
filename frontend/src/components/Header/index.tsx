import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import React from "react"
import account from "../../images/account-header.svg"
import cart from "../../images/cart.svg"
import search from "../../images/search.svg"

const fontFamilyTabs = {
  fontFamily: "Montserrat",
  fontWeight: 400,
}

export default function Header() {
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">VAR X</Typography>
        </Button>
        <Tabs
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Tab sx={fontFamilyTabs} label="HATS" />
          <Tab sx={fontFamilyTabs} label="HOODIES" />
          <Tab sx={fontFamilyTabs} label="SHIRTS" />
          <Tab sx={fontFamilyTabs} label="CONTACT US" />
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
  )
}
