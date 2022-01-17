"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentsController = void 0;
var CreateCommentsController = /** @class */ (function () {
    function CreateCommentsController(createCommentsUseCase) {
        this.createCommentsUseCase = createCommentsUseCase;
        ("");
    }
    CreateCommentsController.prototype.handle = function (req, res) {
        var _a = req.body, text = _a.text, id_post = _a.id_post, id_account = _a.id_account;
        this.createCommentsUseCase.execute({
            text: text,
            id_post: id_post,
            id_account: id_account,
        });
        return res.status(201).send();
    };
    return CreateCommentsController;
}());
exports.CreateCommentsController = CreateCommentsController;
