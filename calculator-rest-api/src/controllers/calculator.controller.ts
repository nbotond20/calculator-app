import { getDb, saveDb } from '@db'
import { NextFunction, Request, Response } from 'express'
import Boom from '@hapi/boom'
import { z } from 'zod'
import { getZodErrorMessage } from '@utils/zodErrorMessage'

const calculatorController = {
  // Get a number from the database
  getNumber: async (_: Request, res: Response, next: NextFunction) => {
    try {
      const db = getDb()
      if (!db?.number) {
        throw Boom.notFound('Number not found!')
      }
      res.status(200).json({
        number: db.number,
      })
    } catch (error) {
      next(error)
    }
  },

  // Save a number in the database
  saveNumber: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const db = getDb()
      const number = req.body.number

      const validation = z
        .number({
          required_error: 'Number is required!',
        })
        .safeParse(number)

      if (!validation.success) {
        throw Boom.badRequest(getZodErrorMessage(validation.error))
      }

      db.number = number
      saveDb(db)
      res.status(201).json({
        number,
      })
    } catch (error) {
      next(error)
    }
  },
}

export default calculatorController
