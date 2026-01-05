import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/note.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// Global middleware
app.use(cors())
app.use(express.json())

// Health check
app.get('/', (req, res) => {
  res.send('Noter API is running')
})

// Routes
app.use('/api/v1/notes', router)

// Start server after DB connection
async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('Database connected successfully')

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Database connection error:', error.message)
    // process.exit(1)
  }
}

start()
