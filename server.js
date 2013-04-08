var express= require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server)

app.use('/static', express.static(__dirname + '/static'))

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
    
});
app.get('/master', function(req, res){
    res.sendfile(__dirname + '/master.html');
});
io.sockets.on('connection', function(socket){
    socket.emit('data', 'asdf')
    
    socket.on('masterPlay', function(value){
        io.sockets.emit('playSignal', 'value')
    });
});

server.listen(3000);
