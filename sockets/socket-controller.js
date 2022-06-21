
const socketController = (socket) => {
    /* console.log('cliente conectado', socket.id); */

 /*    socket.on('disconnect', () => {
        console.log('cliente desconectado', socket.id)
    }) */

    //Escuchamos el evento personalizado que nos llega desde nuestro cliente y la data lo recibimos en el payload
    socket.on('mensaje-enviado', (payload, callback) => {
        //recibimso el payload
        //console.log(payload);

        //Se puede responder con un tercer argumento conocido como callback para que solo ese cliente vea esa información

        const id = 1231321;
        callback({id, fecha: new Date().getTime()});
        //Emitimos un evento personalizado que puedo ser cualquier nombre y enviamos la data como argumento
        //Con el broadcast le indicamos que todos los demas clientes escuchen el mensaje menos el mismo cliente
        socket.broadcast.emit('enviar-mensaje', payload);

    })
}

module.exports = socketController