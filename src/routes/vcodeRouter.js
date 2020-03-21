import Router from 'koa-router'
import vcodeController from '../api/VcodeController'

const router = new Router()

router.get('/getCaptcha', vcodeController.getCaptcha)

export default router
