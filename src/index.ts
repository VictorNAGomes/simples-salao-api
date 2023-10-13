import Server from "./_application/server";
import { Router } from "express";

const server = new Server(Router());

server.start();
