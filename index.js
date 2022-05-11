import express from 'express';
//express=require('express')() import ou require c kif kif
import  dotenv from 'dotenv';
import  mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todos.js'
const app=express();
dotenv.config();
const PORT =process.env.PORT ||8000;

//middelware
const mongodb=process.env.mongodb

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/todos',todosRoutes)
   

app.get("/",(req,res)=>{
  res.send('welocme to server');
})


mongoose.connect(mongodb,{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
    })
    .catch((err)=>console.log(err))
    
    