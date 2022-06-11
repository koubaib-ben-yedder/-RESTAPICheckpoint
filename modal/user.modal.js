const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({


    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    age:{type:Number,require:true}

})

module.exports=mongoose.model("user",userSchema)