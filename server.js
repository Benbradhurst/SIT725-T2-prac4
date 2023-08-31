var express = require('express')
var app = express()

var port = process.env.port || 3000;
require('./dBConnection');
let router = require('./routers/router');
const { Socket } = require('socket.io');

var http = require("http").createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat',router)

io.on('connection', (socket)=>{
    console.log('a client has connected');
    socket.on(
        'disconnect', ()=> {
            console.log('a client has disconnected');
        });
        setInterval(()=>{
            socket.emit('number', parseInt(Math.random()*10));
        }, 1000); //in milliseconds
});

let running = false;
http.listen(port, ()=>{
    console.log("App listening to: " + port)
    console.log("Server live at http://localhost:" + port)
    console.log("Type Ctrl+C to shut down");
    running = true;
});

module.exports = {
    sayRunning: function(){
        if(!running){
            return "error";
        }
        else{
            return 'running';
        }

    }
}