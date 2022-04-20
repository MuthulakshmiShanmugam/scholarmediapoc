const knex = require("../config/dbconfig");
const queries=require("../models/schema.model");

const createSchema= async(req,res)=>{
    try {
 const {schemaName}= req.body;
 
   await knex.raw(`CREATE SCHEMA IF NOT EXISTS ${schemaName}`);
   await knex.schemaName.createTable(`${schemaName}_users`,(table) =>{
    table.increments("id");
    table.string("first_name");
    table.string("last_name");
    table.string("email").unique();

   });
   console.log(queries.createSchema);
   res.status(200).json({msg: "schema and table created"});


        
    } catch (error) {
        res.status(401).send(error);
        
    }
}

module.exports={
    createSchema
}
