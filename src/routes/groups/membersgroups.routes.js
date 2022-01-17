"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersgroups = void 0;
var express_1 = require("express");
var createMembersGroup_1 = require("../../Modules/Groups/useCases/createMembersGroup");
var membersgroups = (0, express_1.Router)();
exports.membersgroups = membersgroups;
membersgroups.post("/", function (req, res) {
    return createMembersGroup_1.createMemberGroupController.handle(req, res);
});
