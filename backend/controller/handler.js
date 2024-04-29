const Form = require("../model/formmodel");


exports.createMessage = async (req,res) =>{
    try{
        const {firstName,lastName,email,phnumber,message} = req.body;
        if(!firstName || !lastName || !email || !phnumber ){
            return res.status(402).json({
                success: false,
                message:" all filled to be field"
            })
        }
        const data = await Form.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phnumber: phnumber,
            message: message,
        })

        return res.status(200).json({
            success: true,
            message: "message send successfully",
            data: data
        });

    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error.message,
            message:"error in db"
        })
    }
}