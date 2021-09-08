import { Router } from 'express'
import * as controllers from '../controllers/posts.js'

const router = Router()

router.get('/posts', controllers.getPosts)
router.get('/posts/:_id', controllers.getPost)
router.post('/posts', controllers.createPost)
router.put('/posts/:_id', controllers.updatePost)
router.delete('/posts/:_id', controllers.deletePost)

export default router