const express = require('express')
const app = express()
const ff = require('./middleware-fn')

app.use(ff)

// middleware can also be involked on few paths that starts with some specific keyword like /api
// if i want the middleware to be involked when any path with /api is involked then i can do so by doing 
// this : app.use('/api',ff)
// multiple middlewares can be also involked using : app.use([md1,md2]) middleware will be invoked in the
// order they are mentioned in app.use(...)

// or in the one path if we want to invoke multiple middlewares then 
// app.method_name(path,[array of middlewares],call_back function)

// types of middlewares - user defined , express inbuit middlewares , third party middlewares

app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})

app.listen(5000,()=>{
    console.log(`Server is running on : http://localhost:5000`);
})