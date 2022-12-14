import { Router } from "express";
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', reviewsCtrl.index)
router.get('/:id', reviewsCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, reviewsCtrl.create)
router.put('/:id', checkAuth, reviewsCtrl.update)
router.delete('/:id', checkAuth, reviewsCtrl.delete)

export {
  router
}