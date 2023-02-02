import Koa from 'koa'
import routerHome from "./routes/home.router.js";
import routerRules from "./routes/rules.router.js";
import bodyParser from 'koa-body'
import cors from "@koa/cors";

const app = new Koa()
const port = 3000

app.use(bodyParser())

app.use(cors())

app.use(routerHome.routes())
    .use(routerHome.allowedMethods())

app.use(routerRules.routes())
    .use(routerRules.allowedMethods())

app.listen(port)

console.log('Application is running on port ' + port)
