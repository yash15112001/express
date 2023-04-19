const express = require('express')
const app = express()
// express server available methods
// post,get,put,delete,all,use,listen

const PORT = 5000

app.get('/',(req,res)=>{
    res.status(210).send(`Home Page`)
    console.log('home page - 200');
})
app.get('/about',(req,res)=>{
    res.status(200).send(`About Page`)
})
app.get('/contact',(req,res)=>{
    res.status(200).send(`Contact Page`)
})

app.all('*',(req,res)=>{
    res.status(404).send(`<h1>Page Not Found</h1>`)
})

app.listen(PORT,()=>{
    console.log(`server is running on : http://localhost:${PORT}`);
})




/*

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require('path');
const connectDB = require('./database/connection');
const ejs = require('ejs');
const app = express();
const url = require('./s3server');
const cors = require('cors')

dotenv.config({ path: `config.env` });
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(morgan("tiny"));

connectDB();

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// load router
app.use("/", require("./routes/router"));


app.use(cors({
  origin: 'https://main.d1m01m2kt615dq.amplifyapp.com/'
}))
// app.use('/',require(''))

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://main.d1m01m2kt615dq.amplifyapp.com/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  console.log('detected cors middleware.');
  next();
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


*/