const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

// Connect to the DB
connectDB()
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Now we send jsons' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

// Error Handler
app.use(errorHandler)

app.listen(PORT, () => console.log(`The server is running on port: ${PORT}`))
