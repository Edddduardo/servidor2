var express = require('express')
var app = express()
const net = require('net')
const server = require('http').Server(app)
const socket = require('socket.io')(server)
const {StringDecoder} = require('string_decoder')
const decoder = new StringDecoder('utf8')

var HOST = "192.168.43.194"
var PORT =8082

server.listen(PORT, function(){
    console.log('Servidor ON en el port '+PORT+':'+HOST)
})

var ser = net.createServer(function(so){
    // so.on('connect', function(){
    //     console.log('Usuario Nuevo')
    // })
    console.log('Usuario Conectado'+ so.remoteAddress+":"+so.remotePort)
    //console.log(so)
    so.on('data', function(data){
        console.log(data)
        var a = data
        console.log(decoder.write(a))
    })
    so.on('close',function(){
        console.log('Usuario desconectado')
    })
})

ser.listen(PORT,HOST)