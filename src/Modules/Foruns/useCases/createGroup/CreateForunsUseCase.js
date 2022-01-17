"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateForunsUseCase = void 0;
var CreateForunsUseCase = /** @class */ (function () {
    function CreateForunsUseCase(forunRepository) {
        " ";
        this.forunRepository = forunRepository;
    }
    CreateForunsUseCase.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description, avatar = _a.avatar, theme = _a.theme, privacity = _a.privacity;
        this.forunRepository.findByName(name);
        this.forunRepository.create({
            name: name,
            description: description,
            avatar: avatar,
            theme: theme,
            privacity: privacity
        });
    };
    return CreateForunsUseCase;
}());
exports.CreateForunsUseCase = CreateForunsUseCase;
