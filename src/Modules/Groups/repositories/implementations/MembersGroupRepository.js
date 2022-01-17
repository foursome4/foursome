"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersGroupRepository = void 0;
var Members_1 = require("../../models/Members");
var MembersGroupRepository = /** @class */ (function () {
    function MembersGroupRepository() {
        this.members = [];
    }
    MembersGroupRepository.getInstance = function () {
        if (!MembersGroupRepository.INSTANCE) {
            MembersGroupRepository.INSTANCE = new MembersGroupRepository();
        }
        return MembersGroupRepository.INSTANCE;
    };
    MembersGroupRepository.prototype.create = function (_a) {
        var id_account = _a.id_account, role = _a.role, status = _a.status, id_group = _a.id_group;
        var member = new Members_1.Members();
        Object.assign(member, {
            id_account: id_account,
            role: role,
            status: status,
            id_group: id_group,
            created_at: new Date(),
        });
        this.members.push(member);
    };
    MembersGroupRepository.prototype.findById = function (id_account) {
        var member = this.members.find(function (member) { return member.id_account === id_account; });
        return member;
    };
    MembersGroupRepository.prototype.list = function () {
        return this.members;
    };
    return MembersGroupRepository;
}());
exports.MembersGroupRepository = MembersGroupRepository;
