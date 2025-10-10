import React, { useEffect, useRef } from "react";
import { Box, Paper, Typography } from "@mui/material";

// Componente que renderiza un solo mensaje
function Message({ message }) {
  const isUser = message.role === "user";

  const containerStyles = {
    textAlign: isUser ? "right" : "left",
    mb: 1,
  };

  const paperStyles = {
    display: "inline-block",
    p: 1,
    bgcolor: isUser ? "#DCF8C6" : "#EDEDED",
    maxWidth: "80%",
  };

  return (
    <Box sx={containerStyles}>
      <Paper sx={paperStyles}>
        <Typography variant="body2">{message.content}</Typography>
      </Paper>
    </Box>
  );
}

// Componente principal del chat
export default function ChatBody({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const containerStyles = {
    flexGrow: 1,
    overflowY: "auto",
    mb: 1,
    p: 0.5,
  };

  return (
    <Box sx={containerStyles}>
      {messages.map((msg, i) => (
        <Message
          key={i}
          message={msg}
        />
      ))}
      <div ref={bottomRef} />
    </Box>
  );
}
