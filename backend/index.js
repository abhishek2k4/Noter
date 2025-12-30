import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/note.route.js'

dotenv.config() 
console.log(process.env.MONGODB_URL)
const app = express()
const port = process.env.PORT || 4002



app.get('/', (req, res) => {
  res.send('Noter API is running')
})
//Routing Middleware
app.use(express.json())
app.use(cors())
app.use('/api/v1/notes', router)

// Start server after connecting to the database
async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('Database connected successfully')

    app.listen(port, () => {
      console.log(`Server is running on ${port}`)
    })
  } catch (error) {
    console.error('Database connection error', error)
    process.exit(1)
  }
}

start()
