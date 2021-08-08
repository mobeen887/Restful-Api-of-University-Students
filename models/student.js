const mongoose = require('mongoose')

//Student Schema for Database creation
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
        default: "physical"
    }

})

module.exports = mongoose.model('Student', studentSchema)