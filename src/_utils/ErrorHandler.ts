import { CustomError } from "src/_application/CustomError";
import winston from "winston";
import { logger } from "./logger";

export class ErrorHandler {
  static throwWithoutLog(error: CustomError) {
    throw error;
  }

  static throwWithLog(error: CustomError) {
    logger.error(error.message, error, "error");
    throw error;
  }
}
