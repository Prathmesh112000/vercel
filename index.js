const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const app=express()

const port=8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>res.send("hello world how are you"))

app.listen(process.env.PORT || port,()=>{
    console.log("server starteed at 8080");
   
})