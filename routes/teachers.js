const express = require('express')
const teacher = require('../models/teacher')
const router = express.Router()
const Teacher = require('../models/teacher')

//Getting all:
router.get('/', async (req, res) => {
    try {
        const teachers = await Teacher.find()
        res.json(teachers)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router