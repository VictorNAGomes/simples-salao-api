import Server from "./_application/server";
import { Router } from "express";
import { Environment, logger } from "@utils/index";
import winston from "winston";

if (Environment.node_env !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

const server = new Server(Router());

server.start();
