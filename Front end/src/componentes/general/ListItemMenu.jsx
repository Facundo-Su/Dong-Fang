import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export default function ListItemMenu({ icon: IconComponent, text, onClick }) {
  return (
    <ListItem
      button
      onClick={onClick}
      sx={{
        borderRadius: "50px",
        mb: 1,
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.1)", // fondo ligeramente más oscuro
        },
        display: "flex",
        alignItems: "center",
        width: "calc(100% - 10px)", // ancho completo menos margen
        px: 2,
      }}
      // borde redondeado y margen inferior
    >
      <ListItemIcon>
        <IconComponent sx={{ fontSize: "2em", mr: "10px" }} />
      </ListItemIcon>

      <ListItemText>
        <Typography
          variant="h6"
          sx={{ fontSize: "1rem" }}
        >
          {text}
        </Typography>
      </ListItemText>
    </ListItem>
  );
}
