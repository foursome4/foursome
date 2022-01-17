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
exports.FollowersRepository = void 0;
var Followers_1 = require("../../models/Followers");
var database_service_1 = require("../../../../../services/database.service");
var uuid_1 = require("uuid");
var FollowersRepository = /** @class */ (function () {
    function FollowersRepository() {
        this.followers = [];
    }
    FollowersRepository.getInstance = function () {
        if (!FollowersRepository.INSTANCE) {
            FollowersRepository.INSTANCE = new FollowersRepository();
        }
        return FollowersRepository.INSTANCE;
    };
    FollowersRepository.prototype.findByIdAccount = function (id_account) {
        return __awaiter(this, void 0, void 0, function () {
            var findEmail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_service_1.collections.followers.findOne({ id_account: id_account })];
                    case 1:
                        findEmail = _a.sent();
                        if (findEmail) {
                            throw new Error("Email already exists!");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FollowersRepository.prototype.findByIdFriend = function (id_friends) {
        return __awaiter(this, void 0, void 0, function () {
            var findUsername;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_service_1.collections.friends.findOne({ id_friends: id_friends })];
                    case 1:
                        findUsername = _a.sent();
                        if (findUsername) {
                            throw new Error("Username already exists!");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FollowersRepository.prototype.create = function (_a) {
        var id_account = _a.id_account, id_friend = _a.id_friend, type = _a.type, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var followers, _id;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        followers = new Followers_1.Followers();
                        _id = (0, uuid_1.v4)();
                        Object.assign(followers, {
                            _id: _id,
                            id: _id,
                            id_account: id_account,
                            id_friend: id_friend,
                            type: type,
                            status: status,
                            created_at: new Date(),
                        });
                        this.followers.push(followers);
                        console.log("Followers: " + followers);
                        return [4 /*yield*/, database_service_1.collections.followers.insertOne(followers).then(function (result) {
                                return console.log(result);
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FollowersRepository.prototype.list = function () {
        return this.followers;
    };
    return FollowersRepository;
}());
exports.FollowersRepository = FollowersRepository;
