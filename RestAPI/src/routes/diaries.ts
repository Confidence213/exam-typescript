import express from 'express'
import * as diaryServices from '../services/diary'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveContent())
})

router.get('/:id', (req, res) => {
  const diaryEntry = diaryServices.findById(Number(req.params.id))
  return (diaryEntry === undefined) ? res.sendStatus(404) : res.send(diaryEntry)
})

router.post('/', (req, res) => {
  try {
    const newEntry = toNewDiaryEntry(req.body)

    const createdNewEntry = diaryServices.createNewDiaryEntry(newEntry)

    res.json(createdNewEntry)
  } catch (err) {
    res.status(400).send((err as Error).message)
  }
})

export default router
