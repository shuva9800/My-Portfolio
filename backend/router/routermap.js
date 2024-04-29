const express = require('express');
const router = express.Router();


const{createMessage} = require("../controller/handler");

router.post("/contact",createMessage);


module.exports = router;