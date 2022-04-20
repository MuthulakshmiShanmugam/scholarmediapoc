
const knex = require("knex");

require('dotenv').config();


const db = knex({
  client: "postgresql",
  connection: {
    database: "scholarmedia",
    user: "postgres",
    password: "root",
  },
});


db.connection((err) => {
  if(!err) {
    console.log("connected to db successfully");
  }
  else {
    console.log("error connecting to db");
  }
});



module.exports = db;