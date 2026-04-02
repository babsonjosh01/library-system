const express = require('express')
const router = express.Router()
const studentController = require('../controller/studentController')

router.get('/', studentController.getStudents)

router.get('/:id', studentController.getStudent)

router.post('/', studentController.createStudent)

module.exports = router