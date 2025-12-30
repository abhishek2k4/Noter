import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import router from './routes/note.route.js'

dotenv.config() 
const app = express()
const port = process.env.PORT || 4002


//database connection code
try {
    mongoose.connect(process.env.MONGODB_URL)
    console.log("Database connected successfully")  
} catch (error) {
    console.log("Database connection error", error)
}

//Routing Middleware
app.use(express.json())
app.use('/api/v1/notes', router)

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
