const express = require('express')
const app = express()
app.use(express.json())
const {products,orders} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a><a href="/api/orders">Orders</a>')
})

app.get('/api/products',(req,res)=>{
    const nproducts = products.map((product)=>{
        const {id,image,name}=product;
        return {id,image,name}
    })
    res.send(nproducts)
})

app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params;
    const prod = products.find((product)=>product.id === Number(productID))
    if(!prod) res.status(400).send(`product not found`)
    res.send(prod)
})

app.get('/api/products/:productID/review/:reviewID',(req,res)=>{
    const {productID,reviewID} = req.params
    console.log(productID,reviewID);
    res.send(`Hello there!!`)
})

app.get('/api/orders',(req,res)=>{
    res.send(orders)
})

app.get('/api/v1/query-ex',(req,res)=>{
    console.log(req.query);
    let sproducts = [...products]
    const {search,limit}=req.query
    if(search){
        sproducts=sproducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sproducts=sproducts.slice(0,Number(limit))
    }
    if(sproducts.length<1)
        return res.status(200).json({success:true,data:[]})
    res.status(200).json({data:sproducts})
})

app.listen(5000,()=>{
    console.log(`Server is running on : http://localhost:5000`);
})