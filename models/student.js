const { Int32 } = require('mongodb')
const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    roll_no: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true,
        default: "Physical"
    }

})

module.exports = mongoose.model('Student', studentSchema)