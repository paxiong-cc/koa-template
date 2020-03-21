import Router from 'koa-router'
import emailController from '../api/EmailController'

const router = new Router()

router.post('/forget', emailController.forget)

export default router
