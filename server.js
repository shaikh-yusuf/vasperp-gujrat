const express=require("express")
const bodyParser=require("body-parser")
const Cors=require("cors")
const app=express()
const products=require("./Products")

app.use(bodyParser.json())
app.use(Cors())

app.get("/products",(req,res)=>{
    res.json(products)
})
app.listen(5050)