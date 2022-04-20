const knex = require("../config/dbconfig");

const addCustomer = async (req, res) => {
    try{
    
        const { tenant_schoolname,tenant_name,tenant_mailid,tenant_phonenum,tenant_planname,tenant_role } = req.body;
        console.log("inside controller");
       await knex("tenants").insert({
        tenant_schoolname,tenant_name,tenant_mailid,tenant_phonenum,tenant_planname,tenant_role
     
    });
    res.status(200).json({msg: "Tenant created"});

     
    }
    catch(err){
        console.log(err);
        res.status(401).send(err);
    }
};

const getCustomer = async (req, res) => {
    try{
    
   
       await knex.from("tenants").select("*").then((rows)=>{
          
           res.status(200).json({rows});

           
       })
   
     
    }
    catch(err){
        console.log(err);
        res.status(401).send(err);
    }
};



exports.module= {
    addCustomer,
    getCustomer
}