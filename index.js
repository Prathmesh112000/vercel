const mongoose=require("mongoose")
const express=require("express")
const app=express()
const cors=require("cors")
var jwt = require('jsonwebtoken');
const userModel=require("./models/usermodel")
 const courseModel=require("./models/coursemodel")
 const adminModel=require("./models/adminmodel")
 const  newcourseModel=require("./models/newcourseModel")

 const sellModel=require("./models/sellingdataModel")
 const transactionModel=require("./models/transactionModel")

const port=8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


const dburl="mongodb+srv://Prathmesh11:Prathmesh11@cluster0.o4lbk.mongodb.net/Aces"


const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(dburl,connectionparams).then(()=>{
    console.log("connected to db");
}).catch((er)=>{
    console.log(er)
})


app.get("/",(req,res)=>res.send("hello world how are you"))

app.listen(process.env.PORT || port,()=>{
    console.log("server starteed at 8080");
   
})