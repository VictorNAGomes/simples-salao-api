import { CustomError } from "src/_application/CustomError";
import winston from "winston";

export class ErrorHandler {
  static throwWithoutLog(error: CustomError) {
    throw error;
  }

  static throwWithLog(error: CustomError) {
    winston.log("error", error.message, error);
    throw error;
  }
}
