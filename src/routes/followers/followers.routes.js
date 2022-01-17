"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupsFollowers = void 0;
var express_1 = require("express");
var createFollowers_1 = require("../../Modules/Accounts/useCases/createFollowers");
var updateInformations_1 = require("../../Modules/Accounts/useCases/updateInformations");
var listGroup_1 = require("../../Modules/Groups/useCases/listGroup");
var groupsFollowers = (0, express_1.Router)();
exports.groupsFollowers = groupsFollowers;
groupsFollowers.post("/", function (req, res) {
    return createFollowers_1.createFollowersController.handle(req, res);
});
groupsFollowers.patch("/", function (req, res) {
    return updateInformations_1.updateInformationsController.handle(req, res);
});
groupsFollowers.get("/", function (req, res) {
    return listGroup_1.listGroupController.handle(req, res);
});
