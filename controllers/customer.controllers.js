const Customer = require("../models/customer.models")


const getAllCustomers = async (req,res) =>{
    try {
        const customers = await Customer.find();
        res.status(200).json({
            message: "Fetching all data successfully",
            data : customers,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error detected, fetching data!!!",
            data: error.message
        })
    }
};

const getCustomerById =  async (req,res) =>{
    try {
        const customer = await Customer.findById(req.params.id);
        res.status(200).json({
            message: "Fetching data by id successfully",
            data : customer,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error detected, fetching data!!!",
            data: error.message
        })
    }
};

const updateCustomer = async (req, res) =>{
    try {
        await Customer.updateOne({_id : req.params.id},req.body);
        res.status(200).json({
            message: "Update data successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error detected, updating data",
            data: error.message,
        })
    }
};

const deleteCustomer = async (req, res) =>{
    try {
        await Customer.deleteOne({_id : req.params.id});
        res.status(200).json({
            message: "Deleting data successfully",
        });
    } catch (error) {
        res.status(400).json({
            message: "Error detected, Deleting data!!!",
            ata: error.message,
        });
    }
}


module.exports = {
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}