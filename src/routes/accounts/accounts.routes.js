"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupsAccounts = void 0;
var express_1 = require("express");
var createAccount_1 = require("../../Modules/Accounts/useCases/createAccount");
var updateInformations_1 = require("../../Modules/Accounts/useCases/updateInformations");
var listGroup_1 = require("../../Modules/Groups/useCases/listGroup");
var groupsAccounts = (0, express_1.Router)();
exports.groupsAccounts = groupsAccounts;
groupsAccounts.post("/", function (req, res) {
    return createAccount_1.createAccountController.handle(req, res);
});
groupsAccounts.patch("/", function (req, res) {
    return updateInformations_1.updateInformationsController.handle(req, res);
});
groupsAccounts.get("/", function (req, res) {
    return listGroup_1.listGroupController.handle(req, res);
});
