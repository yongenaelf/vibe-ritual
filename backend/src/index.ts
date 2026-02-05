import express from 'express'
import mongoose from 'mongoose'
import { createClient } from 'redis'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'vibe_ritual'

// Use dbName option to avoid issues when URI already contains a path
mongoose.connect(MONGODB_URI, { dbName: MONGODB_DATABASE })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Redis Connection
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'
const redisClient = createClient({ url: REDIS_URL })

redisClient.on('error', (err) => console.error('Redis Client Error', err))
redisClient.connect()
  .then(() => console.log('Connected to Redis'))
  .catch((err) => console.error('Redis connection error:', err))

// Health Check Endpoint (REQUIRED for Kubernetes)
app.get('/health', async (req, res) => {
  try {
    // Check MongoDB
    const mongoStatus = mongoose.connection.readyState === 1

    // Check Redis
    let redisStatus = false
    try {
      await redisClient.ping()
      redisStatus = true
    } catch {
      redisStatus = false
    }

    if (mongoStatus && redisStatus) {
      res.json({ status: 'ok', mongo: 'connected', redis: 'connected' })
    } else {
      res.status(503).json({
        status: 'degraded',
        mongo: mongoStatus ? 'connected' : 'disconnected',
        redis: redisStatus ? 'connected' : 'disconnected'
      })
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Health check failed' })
  }
})

// API Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Vibe Ritual API is running', version: '1.0.0' })
})

// Intentions API
app.get('/api/intentions', async (req, res) => {
  // TODO: Implement with MongoDB
  res.json({ 
    intentions: [
      { id: '1', date: '2024-10-24', text: 'To find stillness in the chaos and beauty in the mundane.' },
      { id: '2', date: '2024-10-23', text: 'I am a vessel for creative energy today.' },
      { id: '3', date: '2024-10-22', text: 'Grateful for the breath in my lungs and the warmth of the sun.' },
    ]
  })
})

app.post('/api/intentions', async (req, res) => {
  const { text } = req.body
  if (!text) {
    return res.status(400).json({ error: 'Intention text is required' })
  }
  // TODO: Save to MongoDB
  const newIntention = {
    id: Date.now().toString(),
    date: new Date().toISOString().split('T')[0],
    text
  }
  res.status(201).json(newIntention)
})

// Rituals API
app.get('/api/rituals', async (req, res) => {
  res.json({
    rituals: [
      { id: '1', name: 'Morning Intention', steps: 4, duration: '10 min' },
      { id: '2', name: 'Evening Reflection', steps: 3, duration: '5 min' },
      { id: '3', name: 'Gratitude Practice', steps: 5, duration: '15 min' },
    ]
  })
})

// Sacred Objects API
app.get('/api/objects', async (req, res) => {
  res.json({
    objects: [
      { id: '1', name: 'Soy Candle', category: 'Lights', unlocked: true },
      { id: '2', name: 'Amethyst Cluster', category: 'Elements', unlocked: true },
      { id: '3', name: 'Cherry Blossom', category: 'Nature', unlocked: true },
      { id: '4', name: 'Sandalwood Stick', category: 'Elements', unlocked: true },
      { id: '5', name: 'Lotus Lantern', category: 'Lights', unlocked: true },
      { id: '6', name: 'Forest Moss', category: 'Nature', unlocked: true },
      { id: '7', name: 'Clear Quartz', category: 'Elements', unlocked: true },
      { id: '8', name: 'Moonstone', category: 'Elements', unlocked: false },
    ]
  })
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export { app, redisClient }
