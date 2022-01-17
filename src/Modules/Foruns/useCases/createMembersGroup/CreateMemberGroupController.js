"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMemberGroupController = void 0;
var CreateMemberGroupController = /** @class */ (function () {
    function CreateMemberGroupController(createMemberGroupUseCase) {
        this.createMemberGroupUseCase = createMemberGroupUseCase;
        ("");
    }
    CreateMemberGroupController.prototype.handle = function (req, res) {
        var _a = req.body, id_account = _a.id_account, role = _a.role, status = _a.status, id_group = _a.id_group;
        this.createMemberGroupUseCase.execute({
            id_account: id_account,
            role: role,
            status: status,
            id_group: id_group,
        });
        return res.status(201).send();
    };
    return CreateMemberGroupController;
}());
exports.CreateMemberGroupController = CreateMemberGroupController;
