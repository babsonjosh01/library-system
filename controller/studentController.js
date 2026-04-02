const Student = require('../models/student')

module.exports = {
    createStudent : async (req,res) => {
        try{
            const student = await Student.create(req.body)
            res.status(201).json(student)
        }catch(error) {
            res.status(400).json({error : error.message})
        }
    },
    getStudents : async (req,res) => {
        try{
            const student = await Student.find()
            res.json(Student)
        }catch(error) {
            res.status(500).json({error : error.message})
        }
    },
    getStudent : async (req,res) => {
          try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
    }
}