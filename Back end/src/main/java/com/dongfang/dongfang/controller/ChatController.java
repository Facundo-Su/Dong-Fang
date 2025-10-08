package com.dongfang.dongfang.controller;

import com.dongfang.dongfang.model.Mensaje;
import com.dongfang.dongfang.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:5173/")
public class ChatController {

    private final ChatService chatService;

    @Autowired
    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @GetMapping("/messages")
    public List<Mensaje> getMensajes(){
        return chatService.getMensajes();
    }

    @PostMapping("/send")
    public Mensaje enviarMensaje(@RequestBody Mensaje mensajeUsuario){
        return chatService.enviarMensaje(mensajeUsuario);
    }
}
