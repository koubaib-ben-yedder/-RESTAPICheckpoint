const user =require('../modal/user.modal')

exports.getUser=async(req,res,next)=>{

    console.log("-")

    try {

        const users=await user.find()
        if(users){


            next()

            return res.status(200).send(users)

        }

        return res.status(400).send({msg:"you dont have any users"})

        
    } catch (error) {


        return res.status(500).send(error)
        
    }

}

exports.postUser=async (req,res,next)=>{

   


    try {
       
        user.create([req.body])
     

      
      
        next()

        return res.status(200).send({msg:"user added with sucess"})
        
    } catch (error) {

        return res.status(500).send(error)
        
    }
}

exports.putUser=async(req,res,next)=>{

    const {id,firstName,lastName,age}=req.params

    console.log(id,firstName,lastName,age)


    try {

        await user.update({_id:id},{$set:{firstName:firstName,lastName:lastName,age:age}})

        console.log(data)


        if(data){

            return res.status(200).send({msg:"user updated sucessfuly"})           
        
        }
        
    } catch (error) {

        return res.status(500).send(error)
        
    }

}

exports.deleteUser=async(req,res,next)=>{

    const {id}=req.params

    console.log(id)

    try {
        

        const data=await user.findByIdAndDelete(id)

        console.log(data)

        next()
        


        return res.status(200).send({msg:"user delete with sucess"})

        
    } catch (error) {


        return res.status(500).send(error)
        
    }

}