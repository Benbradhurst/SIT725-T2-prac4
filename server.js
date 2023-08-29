var express = require('express')
var app = express()


var port = process.env.port || 3000;
require('./dBConnection');
let router = require('./routers/router');
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat',router)

let running = false;
app.listen(port, ()=>{
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