import { Router as ExpressRouter } from 'express'
import { clientRoutes } from './client.routes'

export const Router = (): ExpressRouter => {
    const router = ExpressRouter()

    router.get('/', (request, response) => {
        response.json({ message: "Olá mundo" })
    })

    router.use(clientRoutes(router))

    return router
}