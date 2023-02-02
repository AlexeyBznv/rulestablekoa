import Router from '@koa/router'

const routerHome = new Router({
    prefix: '/home'
})

routerHome.get('/', ctx => {
    ctx.body = 'Hello World'
})

routerHome.post('/', ctx => {
    ctx.body = 'Hello World - post'
})

export default routerHome
