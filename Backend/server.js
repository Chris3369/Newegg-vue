import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDB } from './lib/db.js'

import authRoute from './routes/auth.route.js'

dotenv.config()

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))

// allows you to parse the body of the request
app.use(express.json())

app.use(cookieParser())

app.use('/api/auth', authRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
    connectDB()
})