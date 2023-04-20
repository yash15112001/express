const express = require('express')
const app = express()
const {users} = require('./data')
const ff = require('./middleware-fn')

// app.use(ff)

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({message:"Home",success:true})
})
app.post('/login',(req,res)=>{
    res.send('successful post request')
})
app.get('/api/users',(req,res)=>{
    res.status(200).json({message:"Users Found",data:users,success:true})
})

app.listen(5000,()=>{
    console.log(`Server is running on : http://localhost:5000`);
})

// ref regaring routing - seperating functions in controller and better way of routing in /Desktop/Internship/server/router/route.js - line 36 to 46