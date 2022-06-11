const express=require("express")
const app=express()
require("dotenv").config({path:"./config/.env"})
const connect=require("./config/connect")
const userRouter=require("./routes/user.router")
app.use(express.json())
app.use("/",userRouter)


const port=process.env.PORT||8000
connect()
app.listen(port,(e)=>{

    if (e) throw e
    console.log ("lisent to port"+port)
})