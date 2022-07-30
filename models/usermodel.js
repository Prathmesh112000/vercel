const mongoose=require("mongoose")

var userSchema = new mongoose.Schema({
    Name:{type:String},
	email:{type:String, required: true, index: { unique: true }},
    mobile:{type:Number, required: true, index: { unique: true }},
	Buy:[],
	Sell:[],
	Password:{type:String},
	Amount:Number,
	transactions:[],
	role:String
  
})


const userModel=mongoose.model("user",userSchema)

module.exports=userModel