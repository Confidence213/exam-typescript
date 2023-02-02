import express from 'express' // ESModules
// const express = require('express') -> commonjs

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // Middleware for transform req.body to json.

const PORT = 3000

app.get('/dreams', (_req, res) => {
  console.log('Working!')
  res.send('Fulfilling a dream at TheMadFox, DevPacho!')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
