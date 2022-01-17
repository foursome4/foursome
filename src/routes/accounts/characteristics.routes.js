"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupsCharacteristics = void 0;
var express_1 = require("express");
var createCharacteristics_1 = require("../../Modules/Accounts/useCases/createCharacteristics");
var groupsCharacteristics = (0, express_1.Router)();
exports.groupsCharacteristics = groupsCharacteristics;
groupsCharacteristics.post("/", function (req, res) {
    return createCharacteristics_1.createCharacteristicsController.handle(req, res);
});
