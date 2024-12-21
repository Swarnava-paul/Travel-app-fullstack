require('dotenv').config();

const express = require('express');
const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

const server = express(); // express server
const connectToDb = require('./Db/Connection.Db')

//models
const UserModel = require('./Models/Model.User');
const CartModel = require('./Models/Model.Cart');
const BookingModel = require('./Models/Model.Booking');
const TourModel = require('./Models/Model.Tour');

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    
    server.use(express.json());
    
    server.listen(process.env.PORT,async()=>{
        try{
            console.log(`Sever is started on ${process.env.PORT}`);
            await connectToDb();
        }catch(e) {
            console.log('Error during running the server');
            process.exit(1);
        }
    }); // listening to server incoming requests
  
    console.log(`Worker ${process.pid} started`);
  }