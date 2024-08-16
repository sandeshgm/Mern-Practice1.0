const Student = require('../models/student.models')


const getStudents = async (req, res)=>{
    try {
        const students = await Student.find();
        res.status(200).json({
            message: "Data Retrieve Successfully",
            data: students
        })
    } catch (error) {
        res.status(500).json({
            message: "Error Detected During Retrieving Data",
            data: error.message
        });
    }
};
const getStudentsById = async(req,res)=>{
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json({
            message: "Data Retrieve By Id Successfully",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            message: "Error Detected During Fetching Data By Id",
            data: error.message
        })
        
    }
};
const addStudents = async (req,res)=>{
    try {
        await Student.create({
            name: req.body.name,
            age: req.body.age,
            address: req.body.address,
            email: req.body.email,
            password:req.body.password,
            gender: req.body.gender,
            admin : req.authAdmin._id
        });
        res.status(200).json({
            message: "Adding Data Successfully",
        })
    } catch (error) {
        res.status(500).json({
            message: "Error Detected During Adding Data",
            data: error.message
        })
    }
    

};
const updateStudent = async (req,res)=>{
    try {
        await Student.updateOne({_id: req.params.id},req.body );
        res.status(200).json({
            message: "Update Data Successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: "Error Detected During Updating Data",
            data: error.message
        });
    }
};
const deleteStudent = async (req,res)=>{
    try {
        await Student.deleteOne({_id:req.params.id});
        res.status(200).json({
            message: "Delete Data Successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error Detected During Deleting Data"
        });
    }
};







module.exports ={
    getStudents,
    getStudentsById,
    addStudents,
    updateStudent,
    deleteStudent
};