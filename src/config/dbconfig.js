
const knex = require("knex");

require('dotenv').config();

// const db = knex({
//     client: "postgresql" ,
//     connection: {
//       database: "scholarmedia",
//       user: "postgres",
//       password: "7777",
//     },
    
//   });
//server
  const db = knex({
    client: "postgresql" ,
    connection: process.env.DATABASE_URL,
    
  });

db.connection((err)=>{
    if(!err){
        console.log("connected to db successfully");
    }else{
        console.log("error connecting to db");
    }
    
    
});  

module.exports = db;


