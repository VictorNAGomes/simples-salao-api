"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDomain = void 0;
class UserDomain {
    constructor(data) {
        this.idUser = data.idUser;
        this.email = data.email;
        this.password = data.password;
    }
}
exports.UserDomain = UserDomain;
