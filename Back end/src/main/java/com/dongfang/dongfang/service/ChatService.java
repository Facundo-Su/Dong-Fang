package com.dongfang.dongfang.service;

import com.dongfang.dongfang.model.Mensaje;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatService {

    private final List<Mensaje> mensajes = new ArrayList<>();

    public List<Mensaje> getMensajes(){
        return mensajes;
    }

    public Mensaje enviarMensaje(Mensaje mensajeUsuario){
        mensajes.add(mensajeUsuario);

        Mensaje mensajeRobot = new Mensaje("assistant",mensajeUsuario.getMensaje());
        mensajes.add(mensajeRobot);

        return mensajeRobot;
    }




}
