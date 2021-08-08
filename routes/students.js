const express = require('express')
const router = express.Router()
const Student = require('../models/student')

router.get('/', async(req,res) => {
    try{
        const students = await Student.find()
        res.json(students)
    }catch(err){
        res.status(400).json({msg:err});
    }
})

router.get('/:id', async(req,res) => {
    try{
        const student = await Student.findById(req.params.id)
        if(!student) throw Error('Something went wrong while fetching the student data.');
        res.json(student)
    }catch(err){
        res.status(400).json({msg:err});
    }
})

router.post('/', async(req,res) => {
    const student = new Student({
        name: req.body.name,
        roll_no: req.body.roll_no,
        semester: req.body.semester,
        address: req.body.address,
        course: req.body.course,
        class: req.body.class
    })

    try{
        const s1 = await student.save()
        if(!s1) throw Error('Something went wrong while saving the student');
        res.json(s1)
    }catch(err){
        res.status(400).json({msg:err});
    }
})

router.patch('/:id', async (req, res) => {
    try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body);
    if(!student) throw Error('Something went wrong while updating the student');
    res.status(200).json({success: true});
    }catch(err) {
    res.status(400).json({msg:err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if(!student) throw Error('No Student found!');
    res.status(200).json({success: true})
    }catch(err) {
    res.status(400).json({msg: error})
    }
})

module.exports = router