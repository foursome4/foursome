"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionAccounts = void 0;
var express_1 = require("express");
var authenticateAccount_1 = require("../../Modules/Accounts/useCases/authenticateAccount");
var sessionAccounts = (0, express_1.Router)();
exports.sessionAccounts = sessionAccounts;
sessionAccounts.post("/", function (req, res) {
    return authenticateAccount_1.authenticateAccountController.handle(req, res);
});
