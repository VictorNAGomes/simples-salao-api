import Server from "./_application/server"
import { Router } from "./_application/routes/routes"

const server = new Server(Router())

server.start()