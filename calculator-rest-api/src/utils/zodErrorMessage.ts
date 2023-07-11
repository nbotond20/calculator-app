import { ZodError } from 'zod'

export const getZodErrorMessage = (error: ZodError) => {
  const errorMessage = JSON.parse(error.message)[0].message
  return errorMessage
}
