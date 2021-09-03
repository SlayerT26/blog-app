import db from './db/connection.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/api', postRoutes);

db.on('connected', () => {
  console.log('Connected to MongoDB!')
  app.listen(PORT, () => console.log(`Express server application is running on port ${PORT}`))
})

