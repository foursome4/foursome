"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateForunsController = void 0;
var CreateForunsController = /** @class */ (function () {
    function CreateForunsController(createForunsUseCase) {
        this.createForunsUseCase = createForunsUseCase;
        ("");
    }
    CreateForunsController.prototype.handle = function (req, res) {
        var _a = req.body, name = _a.name, description = _a.description, avatar = _a.avatar, theme = _a.theme, privacity = _a.privacity;
        this.createForunsUseCase.execute({
            name: name,
            description: description,
            avatar: avatar,
            theme: theme,
            privacity: privacity
        });
        return res.status(201).send();
    };
    return CreateForunsController;
}());
exports.CreateForunsController = CreateForunsController;
