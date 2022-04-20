
//const {Router} =require('express');

const express = require('express');
const router = express.Router();
const controller=require("../controller/superadmin.controller");


//const router=Router();


router.post('/',controller.module.addCustomer);
router.get('/',controller.module.getCustomer);




module.exports=router;