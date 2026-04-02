const express = require('express')
const app = express()
const connectDB = require('./config/database')
const authorRoutes = require('./routes/author')
const bookRoutes = require('./routes/book')
const libraryAttendantRoutes = require('./routes/libraryAttendant')
const studentRoutes = require('./routes/student')

require('dotenv').config({path: './config/.env'})

connectDB()

app.use(express.json())

app.use('/authors',authorRoutes)
app.use('/books',bookRoutes)
app.use('/libraryAttendants',libraryAttendantRoutes)
app.use('/students',studentRoutes)


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// app.listen(process.env.PORT, () => {
//     console.log("Server is running, you better catch it")
// })