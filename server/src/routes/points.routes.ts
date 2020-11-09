import { Router } from 'express'
import { PointsController } from '../controllers/PointsController'

export const pointsRoutes = Router()

const pointsController = new PointsController()

pointsRoutes.post('/points', pointsController.create)

// index -> list all
// show -> list specific items
// create -> create a new item
// update -> update
// delete -> delete
