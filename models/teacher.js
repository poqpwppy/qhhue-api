const mongoose = require('mongoose')

const teachersSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    Ten: { 
        type: String,
        required: true
    },

    Ngaysinh: { 
        type: String,
        required: true
    },

    Gioitinh: {
        type: String,
        require: true
    },

    Monhoc: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Teachers', teachersSchema)