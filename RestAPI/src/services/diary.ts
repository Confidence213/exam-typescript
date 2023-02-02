import { DiaryEntry, NewDiaryEntry, NonSensitiveContentDiaryEntry } from '../types'
import diaryData from './diaries.json'

/** Types assertion - When working with json coming from external APIs,
 * it is like not controlling the creation of those objects,
 * so we must assert the data type or return that your call is going to have.
 * In this case, we import an interface to make some of the values of our DiaryEntry object 'static'.
 * - Try to avoid this technique unless it is indispensable (For example, do a fetch and you need to treat
 * the response in json in a very specific way).
 * - Basically, below we are saying that our diaryData is now going to be treated as if it were an array of type DiaryEntry. */
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

// Now the getEntries will return an array of type DiaryEntry.
export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveContentDiaryEntry | undefined => {
  const matchedEntry = diaries.find(entry => entry.id === id)
  if (matchedEntry == null) return undefined

  const { comment, ...diaryEntryWithoutComment } = matchedEntry
  return diaryEntryWithoutComment
}

export const getEntriesWithoutSensitiveContent = (): NonSensitiveContentDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const createNewDiaryEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newEntry = {
    id: diaries.length + 1,
    ...newDiaryEntry
  }

  diaries.push(newEntry)
  return newEntry
}
