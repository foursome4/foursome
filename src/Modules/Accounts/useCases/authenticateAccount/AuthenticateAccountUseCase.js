"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateAccountUseCase = void 0;
var bcrypt_1 = require("bcrypt");
var jsonwebtoken_1 = require("jsonwebtoken");
var database_service_1 = require("../../../../../services/database.service");
var AuthenticateAccountUseCase = /** @class */ (function () {
    function AuthenticateAccountUseCase(accountRepository) {
        " ";
        this.accountRepository = accountRepository;
    }
    AuthenticateAccountUseCase.prototype.execute = function (_a) {
        var email = _a.email, username = _a.username, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var accountEmail, accountUsername, user, passwordCompare, userData, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.accountRepository.session(email, username, password)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, database_service_1.collections.accounts.findOne({ email: email })];
                    case 2:
                        accountEmail = _b.sent();
                        return [4 /*yield*/, database_service_1.collections.accounts.findOne({ username: username })];
                    case 3:
                        accountUsername = _b.sent();
                        if (accountEmail) {
                            user = accountEmail;
                            // console.log(user)
                        }
                        else if (accountUsername) {
                            user = accountUsername;
                            // console.log(user)
                        }
                        return [4 /*yield*/, (0, bcrypt_1.compare)(password, user.password)];
                    case 4:
                        passwordCompare = _b.sent();
                        console.log(passwordCompare);
                        if (!user) {
                            throw new Error("Username or email, incorrect!");
                        }
                        else if (!passwordCompare) {
                            throw new Error("password, incorrect!");
                        }
                        userData = {
                            id: user._id,
                            id2: user.id,
                            nickname: user.nickname,
                            username: user.username,
                            email: user.email,
                            phone: user.phone,
                            role: user.role,
                            status: user.status,
                            type: user.type,
                            avatar: user.avatar,
                            cover: user.cover,
                            city: user.city,
                            relationship: user.relationship,
                            uf: user.uf,
                            date: user.created_at
                        };
                        console.log(userData);
                        token = (0, jsonwebtoken_1.sign)({
                            id: user._id,
                            id2: user.id,
                            nickname: user.nickname,
                            username: user.username,
                            email: user.email,
                            phone: user.phone,
                            role: user.role,
                            status: user.status,
                            type: user.type,
                            avatar: user.avatar,
                            cover: user.cover,
                            city: user.city,
                            relationship: user.relationship,
                            uf: user.uf,
                            date: user.created_at,
                        }, "d64d7c8b83dd7212c25c3745933ee76e", {
                            subject: userData.id,
                            expiresIn: "1d"
                        });
                        console.log(token);
                        console.log(userData);
                        return [2 /*return*/, {
                                id: user._id,
                                id2: user.id,
                                nickname: user.nickname,
                                username: user.username,
                                email: user.email,
                                phone: user.phone,
                                role: user.role,
                                status: user.status,
                                type: user.type,
                                avatar: user.avatar,
                                cover: user.cover,
                                city: user.city,
                                relationship: user.relationship,
                                uf: user.uf,
                                date: user.created_at,
                                token: token
                            }];
                }
            });
        });
    };
    return AuthenticateAccountUseCase;
}());
exports.AuthenticateAccountUseCase = AuthenticateAccountUseCase;
