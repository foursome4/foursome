"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupsFriends = void 0;
var express_1 = require("express");
var createFriend_1 = require("../../Modules/Accounts/useCases/createFriend");
var updateInformations_1 = require("../../Modules/Accounts/useCases/updateInformations");
var listGroup_1 = require("../../Modules/Groups/useCases/listGroup");
var groupsFriends = (0, express_1.Router)();
exports.groupsFriends = groupsFriends;
groupsFriends.post("/", function (req, res) {
    return createFriend_1.createFriendsController.handle(req, res);
});
groupsFriends.patch("/", function (req, res) {
    return updateInformations_1.updateInformationsController.handle(req, res);
});
groupsFriends.get("/", function (req, res) {
    return listGroup_1.listGroupController.handle(req, res);
});
