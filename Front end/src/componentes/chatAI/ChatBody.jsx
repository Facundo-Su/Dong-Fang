import React, { useEffect, useRef } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";

function Message({ message, onClickProducto }) {
  const isUser = message.role === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
      {message.tipo === "producto" ? (
        <Button
          variant="contained"
          onClick={() => onClickProducto(message.mensaje)}
        >
          {message.mensaje} {/* por ejemplo: "Completar Datos / 填写信息" */}
        </Button>
      ) : (
        <Paper
          sx={{
            p: 1.5,
            bgcolor: isUser ? "#DCF8C6" : "#ffffff",
            maxWidth: "75%",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
            borderRadius: 2,
            wordBreak: "break-word",
          }}
        >
          <Typography variant="body2">{message.mensaje}</Typography>
        </Paper>
      )}
    </Box>
  );
}

export default function ChatBody({ messages, onClickProducto }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        height: "100%",
      }}
    >
      {messages.map((msg, i) => (
        <Message
          key={i}
          message={msg}
          onClickProducto={onClickProducto}
        />
      ))}
      <div ref={bottomRef} />
    </Box>
  );
}
