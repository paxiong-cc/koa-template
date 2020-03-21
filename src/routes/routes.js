import combineRoutes from 'koa-combine-routers'

import vcodeRouter from './vcodeRouter'
import emailRouter from './emailRouter'

export default combineRoutes(vcodeRouter, emailRouter)
