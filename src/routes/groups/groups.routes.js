"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupsRoutes = void 0;
var express_1 = require("express");
var createGroup_1 = require("../../Modules/Groups/useCases/createGroup");
var listGroup_1 = require("../../Modules/Groups/useCases/listGroup");
var groupsRoutes = (0, express_1.Router)();
exports.groupsRoutes = groupsRoutes;
groupsRoutes.post("/", function (req, res) {
    return createGroup_1.createGroupController.handle(req, res);
});
groupsRoutes.get("/", function (req, res) {
    return listGroup_1.listGroupController.handle(req, res);
});
