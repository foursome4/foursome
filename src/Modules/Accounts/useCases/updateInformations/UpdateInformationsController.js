"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInformationsController = void 0;
var UpdateInformationsController = /** @class */ (function () {
    function UpdateInformationsController(updateInformationsUseCase) {
        this.updateInformationsUseCase = updateInformationsUseCase;
        ("");
    }
    UpdateInformationsController.prototype.handle = function (req, res) {
        var _a = req.body, avatar = _a.avatar, cover = _a.cover, relationship = _a.relationship, city = _a.city, uf = _a.uf, lookingFor = _a.lookingFor;
        var id = req.params.id;
        this.updateInformationsUseCase.execute({
            id: id,
            avatar: avatar,
            cover: cover,
            relationship: relationship,
            city: city,
            uf: uf,
            lookingFor: lookingFor
        });
        return res.status(201).send();
    };
    return UpdateInformationsController;
}());
exports.UpdateInformationsController = UpdateInformationsController;
