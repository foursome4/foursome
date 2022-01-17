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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsletterRepository = void 0;
var nodemailer_1 = __importDefault(require("nodemailer"));
var database_service_1 = require("../../../../../services/database.service");
var Newsletter_1 = require("../../models/Newsletter");
var NewsletterRepository = /** @class */ (function () {
    function NewsletterRepository() {
        this.newsletters = [];
    }
    NewsletterRepository.getInstance = function () {
        if (!NewsletterRepository.INSTANCE) {
            NewsletterRepository.INSTANCE = new NewsletterRepository();
        }
        return NewsletterRepository.INSTANCE;
    };
    NewsletterRepository.prototype.create = function (_a) {
        var email = _a.email;
        return __awaiter(this, void 0, void 0, function () {
            var newsletter;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newsletter = new Newsletter_1.Newsletter();
                        Object.assign(newsletter, {
                            email: email,
                            created_at: new Date(),
                        });
                        this.newsletters.push(newsletter);
                        return [4 /*yield*/, database_service_1.collections.newsletter.insertOne(newsletter).then(function (result) {
                                var email = result;
                                console.log(newsletter.email);
                                //Mail Send -->
                                // async..await is not allowed in global scope, must use a wrapper
                                function main() {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var testAccount, transporter, info;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, nodemailer_1.default.createTestAccount()];
                                                case 1:
                                                    testAccount = _a.sent();
                                                    transporter = nodemailer_1.default.createTransport({
                                                        host: "smtp.gmail.com",
                                                        port: 587,
                                                        secure: false,
                                                        auth: {
                                                            user: "jefersonmacedowgf@gmail.com",
                                                            pass: "211902fluminense", // generated ethereal password
                                                        }
                                                    });
                                                    return [4 /*yield*/, transporter.sendMail({
                                                            from: "jefersonmacedowgf@gmail.com",
                                                            to: "desenvolvimento@foursome.com.br",
                                                            subject: "Hello ✔",
                                                            text: "Hello world?",
                                                            html: "<b>Hello world?</b>", // html body
                                                        })];
                                                case 2:
                                                    info = _a.sent();
                                                    console.log("Message sent: %s", info.messageId);
                                                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                                                    // Preview only available when sending through an Ethereal account
                                                    console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
                                                    return [2 /*return*/];
                                            }
                                        });
                                    });
                                }
                                main().catch(console.error);
                                // End send email -->
                            }).catch(function (error) {
                                console.log("Erro ao salvar o email no banco de dados: " + error);
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewsletterRepository.prototype.findByEmail = function (email) {
        var newsletter = this.newsletters.find(function (newsletter) { return newsletter.email === email; });
        return newsletter;
    };
    return NewsletterRepository;
}());
exports.NewsletterRepository = NewsletterRepository;
