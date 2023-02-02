export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NonSensitiveContentDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

/**
 * Alternative to Omit:
 * export type NonSensitiveContentDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
 */
