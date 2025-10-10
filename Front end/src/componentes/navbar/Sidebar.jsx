import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  Divider,
  Button,
  Icon,
  ListItemIcon,
} from "@mui/material";
import logo from "../../assets/dongfangLogo.png";
import { Home, Info, ContactMail } from "@mui/icons-material";
import ListItemMenu from "../general/ListItemMenu";

const drawerWidth = 260;

export default function Sidebar({ mobileOpen, handleDrawerToggle, isMobile }) {
  const drawerContent = (
    <Box sx={{ textAlign: "center" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "80px",
            height: "auto",
            marginBottom: "8px",
            marginRight: "30px",
          }}
        />
        <Typography
          variant="h6"
          color="white"
          sx={{
            color: "yellow", // color del relleno de la letra
            fontSize: "1.5rem",
          }}
        >
          东方印刷
        </Typography>
      </Toolbar>
      <Divider />

      <List sx={{ ml: "5px", mr: "5px" }}>
        <ListItemMenu
          icon={Home}
          text={"Inicio"}
          onClick={() => {}}
        />
        <ListItemMenu
          icon={Info}
          text={"Acerca de"}
          onClick={() => {}}
        />
        <ListItemMenu
          icon={ContactMail}
          text={"Contacto"}
          onClick={() => {}}
        />
      </List>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? mobileOpen : true}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#dee9f5ff",
          color: "black",
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
