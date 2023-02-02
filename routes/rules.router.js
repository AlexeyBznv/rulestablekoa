import Router from '@koa/router'
import { actionsWithRules } from "../api/rules.api.js";

const routerRules = new Router({
    prefix: '/rules'
})

routerRules.get('/', async ctx => {
    ctx.body  = await actionsWithRules.getRules()
})

routerRules.delete('/',async ctx => {
    const id = ctx.header.id
    await actionsWithRules.deleteRule(id)
    ctx.response.status = 200
})

routerRules.post('/', async ctx => {
    let rule = ctx.request.body
    await actionsWithRules.createNewRule(rule)
    ctx.response.status = 201
})

routerRules.put('/', async ctx => {
    let rule = ctx.request.body
    await actionsWithRules.editRule(rule)
    ctx.response.status = 202
})

export default routerRules

