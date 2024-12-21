const mongoose = require('mongoose');

async function connectToDb() {
    
    try{
       await mongoose.connect(process.env.DATABASE_URL);
       console.log('Connection with Database Successful');
    }catch(e) {
        console.log(e);
        process.exit(1)
    }
}

module.exports = connectToDb;