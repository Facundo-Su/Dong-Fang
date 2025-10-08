import { Box, Container } from "@mui/material";
import Chat from "./componentes/chatAI/Chat";
import Navbar from "./componentes/navbar/Navbar";

function App() {
  return (
    <Box
      className="App"
      sx={{ bgcolor: "#f5f5f5", height: "100vh", width: "100vw", p: 2 }}
    >
      <div>
        <Navbar
          title={"Mi Aplicación"}
          links={[
            { label: "Inicio", onClick: () => {} },
            { label: "Acerca de", onClick: () => {} },
          ]}
        />
      </div>

      <h1 style={{ textAlign: "center" }}>Demo Chat con Material-UI</h1>
      <Chat />
    </Box>
  );
}

export default App;
