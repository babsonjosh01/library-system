const express = require('express')
const router = express.Router()
const libraryAttendantController = require('../controller/libraryAttendantController')

router.get('/', libraryAttendantController.getLibraryAttendants )

router.post('/', libraryAttendantController.createLibraryAttendant)

module.exports = router