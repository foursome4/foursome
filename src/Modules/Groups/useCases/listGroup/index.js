"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listGroupController = void 0;
var GroupsRepository_1 = require("../../repositories/implementations/GroupsRepository");
var ListGroupController_1 = require("./ListGroupController");
var ListGroupUseCase_1 = require("./ListGroupUseCase");
var groupsRepository = GroupsRepository_1.GroupsRepository.getInstance();
var listGroupUsecase = new ListGroupUseCase_1.ListGroupUseCase(groupsRepository);
var listGroupController = new ListGroupController_1.ListGroupController(listGroupUsecase);
exports.listGroupController = listGroupController;
