const mongoose = require('mongoose');
const mailSender = require("../utility/mailsend");


const userSchema = new mongoose.Schema({
    firstName :{
        type: 'string',
        required: true,
        trim: true,
    },
    lastName:{
        type: 'string',
        required: true,
        trim: true,
    },
    email:{
        type: 'string',
        required: true,
        trim: true,
    },
    phnumber:{
        type: "string",
       required: true,
    },
    message:{
        type: 'string',
        //required: true,
    }
   
   
   
    
})

userSchema.post("save", async function(doc){
    try{
        console.log("docs is -", doc);
    // doc is the details of database upload responce
    const data = {
        name: doc.firstName + doc.lastName,
        email: doc.email,
        phoneNumber: doc.phnumber,
        message: doc.message,
    }
        
         const mailResponse = await sendMail(email, "connection mail from PORTFOLIO", data);//change
         console.log("Email sent Successfully: ", mailResponse);
    }
    catch(err){
        console.log(err);
    }
})


module.exports = mongoose.model("User",userSchema);