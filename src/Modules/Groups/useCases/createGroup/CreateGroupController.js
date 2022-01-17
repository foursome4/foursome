"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupController = void 0;
var CreateGroupController = /** @class */ (function () {
    function CreateGroupController(createGroupUseCase) {
        this.createGroupUseCase = createGroupUseCase;
        ("");
    }
    CreateGroupController.prototype.handle = function (req, res) {
        var _a = req.body, name = _a.name, description = _a.description, avatar = _a.avatar, theme = _a.theme, privacity = _a.privacity;
        this.createGroupUseCase.execute({
            name: name,
            description: description,
            avatar: avatar,
            theme: theme,
            privacity: privacity
        });
        return res.status(201).send();
    };
    return CreateGroupController;
}());
exports.CreateGroupController = CreateGroupController;
