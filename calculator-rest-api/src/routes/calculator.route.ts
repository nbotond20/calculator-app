import calculatorController from '@controllers/calculator.controller'
import { Router } from 'express'
//import auth from '@middlewares/auth'

const router = Router()

router.get('/get-memory', calculatorController.getNumber)
router.post('/save-memory', calculatorController.saveNumber)

export default router
