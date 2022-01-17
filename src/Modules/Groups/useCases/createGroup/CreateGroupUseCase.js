"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupUseCase = void 0;
var CreateGroupUseCase = /** @class */ (function () {
    function CreateGroupUseCase(groupRepository) {
        " ";
        this.groupRepository = groupRepository;
    }
    CreateGroupUseCase.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description, avatar = _a.avatar, theme = _a.theme, privacity = _a.privacity;
        this.groupRepository.findByName(name);
        this.groupRepository.create({
            name: name,
            description: description,
            avatar: avatar,
            theme: theme,
            privacity: privacity
        });
    };
    return CreateGroupUseCase;
}());
exports.CreateGroupUseCase = CreateGroupUseCase;
