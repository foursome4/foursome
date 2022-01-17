"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMemberGroupUseCase = void 0;
var CreateMemberGroupUseCase = /** @class */ (function () {
    function CreateMemberGroupUseCase(membersGroupsRepository) {
        this.membersGroupsRepository = membersGroupsRepository;
        ("");
    }
    CreateMemberGroupUseCase.prototype.execute = function (_a) {
        var id_account = _a.id_account, role = _a.role, status = _a.status, id_group = _a.id_group;
        var membersGroupAlreadyExists = this.membersGroupsRepository.findById(id_account);
        if (membersGroupAlreadyExists) {
            throw new Error("Member of Group Already Exists! ");
        }
        this.membersGroupsRepository.create({
            id_account: id_account,
            role: role,
            status: status,
            id_group: id_group,
        });
    };
    return CreateMemberGroupUseCase;
}());
exports.CreateMemberGroupUseCase = CreateMemberGroupUseCase;
