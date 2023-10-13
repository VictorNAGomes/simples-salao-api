"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swagger = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
class Swagger {
}
exports.Swagger = Swagger;
_a = Swagger;
Swagger.config = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Hello World",
            version: "1.0.0",
            description: "A simple Express Library API",
        },
    },
    apis: ["src/application/routes/*.ts"],
};
Swagger.spec = (0, swagger_jsdoc_1.default)(_a.config);
