const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const textMensaje = document.querySelector('#text-mensaje');
const btnBuscar = document.querySelector('#btn-buscar');

//Referencia del cliente de socket
const socket = io();

//método para escuchar cuando un socket se conecta
socket.on('connect', (socket) => {
    //console.log('cliente conectado');
    lblOnline.style.display = '';
    lblOffline.style.display = 'none';
})

//método para escuchar cuando un socket se desconecta
socket.on('disconnect', (socket) => {
    //console.log('cliente desconectado');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
})

//Escuchamos el evento que viene desde el servidor y recibimos el payload que es la data
socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
});

btnBuscar.addEventListener('click', () => {
    const mensaje = {
        texto: textMensaje.value,
        id: '123asdas',
        fecha: new Date().getTime()
    };

    //Con el evento emit le indicamos el evento que queremos escuchar que puede ser cualquiera y enviamos la data
    //Se puede recibir la información del callback del servidor con los argumentos
    socket.emit('mensaje-enviado', mensaje, (id) => {
        console.log('Desde el servidor',id);
    });
});