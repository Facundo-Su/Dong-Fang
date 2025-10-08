import React, { useState } from "react";
import { IconButton, Paper } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import { useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = { role: "user", mensaje: input };
    setMessages((prev) => [...prev, newMessages]);
    setInput("");

    try {
      const res = await fetch("http://localhost:8080/api/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessages),
      });

      const respuesta = await res.json();
      setMessages((prev) => [...prev, respuesta]);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <>
      {/* Icono flotante */}
      <IconButton
        color="primary"
        onClick={toggleChat}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          bgcolor: "primary.main",
          color: "white",
          "&:hover": { bgcolor: "primary.dark" },
        }}
      >
        <ChatIcon />
      </IconButton>

      {/* Panel de chat */}
      {open && (
        <Paper
          elevation={4}
          sx={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 300,
            height: 400,
            display: "flex",
            flexDirection: "column",
            p: 1,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <ChatHeader toggleChat={toggleChat} />
          <ChatBody messages={messages} />
          <ChatInput
            input={input}
            setInput={setInput}
            handleSend={handleSend}
          />
        </Paper>
      )}
    </>
  );
}
