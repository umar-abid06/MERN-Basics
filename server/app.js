const mongoose = require('mongoose');
const express = require('express');
const app = express();

//DB connection
const DB = 'mongodb+srv://new_user06:IRn878rofYVQ4xqA@cluster0.lvt1c.mongodb.net/mernbasics?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,
    dbName:'mernbasics'
}).then(()=> {
    console.log("Connection is successful to the DB");
})
    .catch((err)=>{
        console.log("Failed!")
    });
//middleware


const pauseMe = (req, res, next) =>{
    console.log("Middleware here!");
    next();
}

//Routes
app.get('/', (req, res)=>{
    res.send("Hello from the Server!");
});
app.get('/about', pauseMe, (req, res)=>{
    res.send("Hello About from the Server!");
});
app.get('/contact', (req, res)=>{
    res.send("Hello COntact from the Server!");
});
app.get('/signup', (req, res)=>{
    res.send("Hello Signup from the Server!");
});
app.get('/login', (req, res)=>{
    res.send("Hello Login from the Server!");
});

//Starting the server!
app.listen(8000, ()=>{
    console.log("Server is running at port 8000");
});