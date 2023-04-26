import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Person from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

const Asetukset = ["MONTA", "VALIKKO", "TEKSTIÄ"];

const ResponsiveMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box>
      <Box sx={{ float: "right", flexGrow: 0 }}>
        <Tooltip title="Avaa asetukset">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, mr: "26px" }}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{
            mt: "30px",
          }}
          id="testiMenu"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {Asetukset.map((Asetukset) => (
            <MenuItem key={Asetukset}>
              <Typography
                sx={{
                  color: "#154870",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {Asetukset}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};

const Content = ({ asd }) => {
  return (
    <Toolbar sx={{ ml: "30px" }} disableGutters>
      <Person
        sx={{
          color: "white",
          ml: 0,
          display: { xs: "none", md: "flex" },
          mr: 1,
        }}
      />
      <Box sx={{ float: "left", width: "100%" }}>
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            float: "left",
          }}
          variant="h6"
        >
          SOFTWARE DEVELOPER'S CV
        </Typography>
      </Box>
      {asd}

      <ResponsiveMenu />
    </Toolbar>
  );
};

const Header = ({ foo }) => {
  return (
    <AppBar
      component={"nav"}
      sx={{
        borderBottom: 1,
        borderColor: "gray",
        mt: 0,
        marginTop: 0,
        backgroundColor: "#59595950",
        backdropFilter: "blur(10px)",
      }}
    >
      <Content asd={foo} />
    </AppBar>
  );
};
export default Header;
