import fs from 'fs'
import path from 'path'

const dbPath = path.resolve(__dirname, './database/db.json')

type DB = {
  number: number | undefined
}

export const getDb = () => {
  const db = fs.readFileSync(dbPath, 'utf-8')
  return JSON.parse(db) as DB
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveDb = (db: any) => {
  const dbString = JSON.stringify(db, null, 2)
  fs.writeFileSync(dbPath, dbString)
}
