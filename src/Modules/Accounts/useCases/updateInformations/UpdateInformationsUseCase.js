"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInformationsUseCase = void 0;
var UpdateInformationsUseCase = /** @class */ (function () {
    function UpdateInformationsUseCase(accountRepository) {
        " ";
        this.accountRepository = accountRepository;
    }
    UpdateInformationsUseCase.prototype.execute = function (_a) {
        var id = _a.id, avatar = _a.avatar, cover = _a.cover, relationship = _a.relationship, city = _a.city, uf = _a.uf, lookingFor = _a.lookingFor;
        this.accountRepository.update({
            id: id,
            avatar: avatar,
            cover: cover,
            relationship: relationship,
            city: city,
            uf: uf,
            lookingFor: lookingFor
        });
    };
    return UpdateInformationsUseCase;
}());
exports.UpdateInformationsUseCase = UpdateInformationsUseCase;
