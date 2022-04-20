

const knex = require("../config/dbconfig");
const queries = require("../model/superadmin.model");


// get query method
const getCustomer = async (req, res) => {
    try {
        const result = await knex.raw(queries.getCustomer);
        res.status(200).json(result.rows);
    }
    catch(error) {
        res.status(500).json({
            message: "error occured",
            error: error.message,
        });
    }
};


// insert query method
const addCustomer = async (req, res) => {
    try {
        const { tenant_schoolname,tenant_name,tenant_mailid,tenant_phonenum,tenant_planname,tenant_role } = req.body;
        console.log("inside controller");
        await knex("tenants").insert({
            tenant_schoolname,tenant_name,tenant_mailid,tenant_phonenum,tenant_planname,tenant_role
        });
        res.status(200).json({msg: "Tenant Created"});
    }
    catch(err) {
        console.log(err);
        res.status(401).send(err);
    }
};



module.exports = {
    getCustomer,
    addCustomer
}