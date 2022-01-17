"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostController = void 0;
var CreatePostController = /** @class */ (function () {
    function CreatePostController(createPostUseCase) {
        this.createPostUseCase = createPostUseCase;
        ("");
    }
    CreatePostController.prototype.handle = function (req, res) {
        var _a = req.body, id_group = _a.id_group, id_account = _a.id_account, text = _a.text, link = _a.link;
        this.createPostUseCase.execute({
            id_group: id_group,
            id_account: id_account,
            text: text,
            link: link,
        });
        return res.status(201).send();
    };
    return CreatePostController;
}());
exports.CreatePostController = CreatePostController;
