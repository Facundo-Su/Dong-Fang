import React from "react";
import { Box, TextField, Button } from "@mui/material";

export default function ChatInput({ input, setInput, handleSend }) {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <TextField
        fullWidth
        size="small"
        placeholder="Escribí tu mensaje..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <Button
        variant="contained"
        onClick={handleSend}
      >
        Enviar
      </Button>
    </Box>
  );
}
