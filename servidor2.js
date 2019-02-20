var express = require('express')
var aplicacion = express()
const os = require('os');
const net = require('net');
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)
const {StringDecoder} = require('string_decoder')
const decoder = new  StringDecoder('utf8')

var interface = os.networkInterfaces();
var ipDinamic;
for(var k in interface){
    for(var k2 in interface[k]){
        var address = interface[k][k2]
        if(address.family == 'IPv4' && !address.internal ){
            ipDinamic = address.address.toString();
            console.log(ipDinamic);
        }
    }
}

var HOST = ipDinamic;

var PORT = server.listen(process.env.PORT || 3000);


var ser = net.createServer(function(so){
 
    
    console.log('Usuario Conectado Servidor 1:' + so.remoteAddress + ':' + so.remotePort)


    
    so.on('data', function(data){
        var cent = data 
        console.log(decoder.write(cent))
    })

    so.on('close',function(){
        console.log('Usuario Desconectado Servidor 1')
    })
})

ser.listen(PORT, HOST);