import app from './app'
import errorHandler from '@middlewares/errorHandler'
import calculatorRoute from '@routes/calculator.route'
import { Boom } from '@hapi/boom'

const BASE_URL = '/api/v1'
function setBasePath(route: string) {
  return `${BASE_URL}${route}`
}

// List the available routes
app.use(setBasePath('/'), calculatorRoute)

// Catch 404 and forward to error handler
app.use((_, __, next) => {
  next(new Boom('Unkown request!', { statusCode: 404 }))
})

// Error handler. Must be the last middleware
app.use(errorHandler)

// Start the server
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on http://localhost:${process.env.PORT}`)
})
