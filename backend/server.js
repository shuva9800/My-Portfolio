const express = require("express");
const cors = require("cors");
require("dotenv").config();


// server used to send send emails
const app = express();
//cors
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)
app.use(express.json());
//port andf lissen
const PORT= process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`applicetion started successfully at port ${PORT}`);

})
//database connection
const {dbConnect} = require("./config/database");
dbConnect();
const router = require("./router/routermap");
app.use("/api/v1",router);

app.get("/" , (req,res)=>{
    return res.status(200).json({
        success: true,
        message: "hello jeee "
    })
})




