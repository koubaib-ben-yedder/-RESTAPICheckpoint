const express=require("express")
const userRouter=express.Router()
const {getUser,postUser,putUser,deleteUser}=require("../controller/user.controller")

userRouter.get("/getUser",getUser)
userRouter.post("/postUser",postUser)
userRouter.put("/putUser/:id/:firstName/:lastName/:age",putUser)
userRouter.delete("/deleteUser/:id",deleteUser)

module.exports=userRouter