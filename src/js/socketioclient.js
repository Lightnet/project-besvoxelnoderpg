//Testing

var socket = io();

socket.on('connect', function(){
    console.log('a user connected');
    //console.log(socket);
});

socket.on('disconnect', function(){
    console.log('server disconnected');
});