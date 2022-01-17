"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostUseCase = void 0;
var CreatePostUseCase = /** @class */ (function () {
    function CreatePostUseCase(postsRepository) {
        this.postsRepository = postsRepository;
        ("");
    }
    CreatePostUseCase.prototype.execute = function (_a) {
        var id_group = _a.id_group, id_account = _a.id_account, text = _a.text, link = _a.link;
        var membersGroupAlreadyExists = this.postsRepository.findById(id_account);
        if (membersGroupAlreadyExists) {
            throw new Error("Member of Group Already Exists! ");
        }
        this.postsRepository.create({
            id_group: id_group,
            id_account: id_account,
            text: text,
            link: link,
        });
    };
    return CreatePostUseCase;
}());
exports.CreatePostUseCase = CreatePostUseCase;
