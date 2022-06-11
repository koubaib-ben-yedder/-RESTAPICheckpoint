const mongoose=require("mongoose")



const connect=()=>{

    try {

        mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected")
        
    } catch (error) {

        console.error(error)
        
    }
}

module.exports=connect