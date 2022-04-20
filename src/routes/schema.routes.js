
const express = require('express');
const router = express.Router();
const controller=require("../controller/schema.controller");





router.post('/',controller.createSchema);
router.get('/',controller.createSchema);




module.exports=router;