"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLikePostController = void 0;
var CreateLikePostController = /** @class */ (function () {
    function CreateLikePostController(createLikePostUseCase) {
        this.createLikePostUseCase = createLikePostUseCase;
        ("");
    }
    CreateLikePostController.prototype.handle = function (req, res) {
        var _a = req.body, id_post = _a.id_post, id_account = _a.id_account;
        this.createLikePostUseCase.execute({
            id_post: id_post,
            id_account: id_account,
        });
        return res.status(201).send();
    };
    return CreateLikePostController;
}());
exports.CreateLikePostController = CreateLikePostController;
