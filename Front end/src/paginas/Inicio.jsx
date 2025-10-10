import { Box } from "@mui/material";
import Sidebar from "../componentes/navbar/Sidebar";
import Chat from "../componentes/chatAI/Chat";

export default function Inicio() {
  return (
    <Box
      className="App"
      sx={{
        bgcolor: "#f5f5f5",
        height: "100vh",
        width: "100vw",
        p: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // xs = mobile, md = desktop
        gap: 2,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Chat />
      </Box>
    </Box>
  );
}
